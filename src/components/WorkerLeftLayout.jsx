import React,{useEffect,useState} from 'react';
import { auth,db } from '../firebase';
import { doc,getDoc,getDocs,collection } from 'firebase/firestore'
import user_icon from '../../public/user_icon.svg'

const WorkerLeftLayout = () => {

  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [locations, setLocations] = useState([]);
  const [premiumMembers, setPremiumMembers] = useState([]);

  useEffect(() => {
    const fetchPremiumMembers = async () => {
      try {
        // Fetch all documents from the premiumMembers collection
        const premiumMembersSnapshot = await getDocs(collection(db, "premiumMembers"));
        const userIds = premiumMembersSnapshot.docs.map(doc => doc.id); // Assuming user UID is the document ID
  
        if (userIds.length > 0) {
          // Fetch the corresponding documents from the Owners collection
          const ownersPromises = userIds.map(async (userId) => {
            const ownerDocRef = doc(db, "Owners", userId);
            const ownerDoc = await getDoc(ownerDocRef);
            return ownerDoc.exists() ? ownerDoc.data() : null;
          });
  
          const usersData = await Promise.all(ownersPromises);
          // Filter out any null values if any document was not found
          setPremiumMembers(usersData.filter(data => data !== null));
        }
      } catch (error) {
        console.error("Error fetching premium members:", error);
      }
    };
  
    fetchPremiumMembers();
  }, []); 
  useEffect(() => {
    const fetchCustomerReviews = async () => {
      if (premiumMembers.length > 0) {
        try {
          // Extract usernames
          const usernames = premiumMembers.map(member => member.Username);
          console.log(usernames);
  
          // Fetch locations from customerreviews collection
          const customerReviewsSnapshot = await getDocs(collection(db, "workerreviews"));
          const locationsArray = [];
  
          customerReviewsSnapshot.docs.forEach(doc => {
            const reviews = doc.data().reviews; // Assuming review is an array
  
            // Safeguard: Check if reviews is an array before iterating
            if (Array.isArray(reviews)) {
              reviews.forEach(review => {
                if (usernames.includes(review.name)) {
                  locationsArray.push(review.location);
                }
              });
            }
          });
  
          setLocations(locationsArray);
          console.log("Locations:", locations);
          
        } catch (error) {
          console.error("Error fetching worker reviews:", error);
        }
      }
    };
  
    fetchCustomerReviews();
  }, [premiumMembers]); // Dependency on premiumMembers to trigger when it updates

 
  useEffect(()=>{
    console.log("check",locations);
    
  },[locations])




  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (user) {
        if (user.providerData.some((provider) => provider.providerId === 'google.com')) {
          // User logged in with Google
          setUserDetails({
            displayName: user.displayName,
            email: user.email,
            photoURL:user.photoURL,
          });
        } else {
          // User logged in with email/password
          const docRef = doc(db, "Workers", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          }
        }
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);


  return (
    <>
    
    {/* Left Top Component */}
    <div className="flex items-center mt-5 w-full justify-center">
        <div className="w-64"> {/* Fixed width of 16rem */}
        <div className="relative bg-gray-100 shadow-xl rounded-lg py-3">
  {/* Background Image */}
  <img 
    src="profile_bg1.jpeg" 
    alt="Background" 
    className="absolute inset-0 w-full h-full object-cover z-0 rounded-lg"
  />
  <div className="relative z-10">
    <div className="photo-wrapper p-2">
      <br />
      <img
        className="w-20 h-20 rounded-full mx-auto object-cover"
        src={userDetails?.photoURL || user_icon}
        alt="Profile"
      />
    </div>

    <div className="p-2">
      {loading ? (
        <p>Loading....</p>
      ) : userDetails ? (
        <>
          <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
            {userDetails.displayName || userDetails.Username}
          </h3>
          <h5 className="text-center text-lg text-gray-900 font-medium leading-8">
            {userDetails.email}
          </h5>
        </>
      ) : (
        <p>No user details available</p>
      )}
    </div>
  </div>
</div>

        </div>
      </div>
    {/* Lower Left Component */}

    <div className="flex items-center mt-5 w-full justify-center">
        <div className="w-64"> {/* Fixed width of 16rem */}
        <div className="bg-gray-100 shadow-xl rounded-lg py-3 bg-[url('green.jpeg')] bg-cover bg-center bg-no-repeat">
        <div className="p-2">
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">Discover Jobs</h3>
              
              <div className="mt-4">
                {/* Table */}
                <div className="space-y-2">
  {premiumMembers.map((member, index) => (
    <div key={index} className="flex items-center space-x-2 px-5">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
      <a 
        href={locations[index] || "#"} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-900 transform motion-safe:hover:scale-105 font-mono font-medium"
      >
        {member.Username || "Unknown User"}
      </a>
    </div>
  ))}
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default WorkerLeftLayout