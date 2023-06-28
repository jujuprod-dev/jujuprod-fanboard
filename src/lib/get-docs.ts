import { collection, query, orderBy, startAfter, getDocs, limit, DocumentSnapshot } from "firebase/firestore";
import { db } from '@/config/firebase';
import { ProjectData } from "@/config/types";

// Fetch documents with pagination
// Modify fetchProjects to accept a single parameter
export async function fetchProjects({ limitCount, startAfterDoc }: any) {
    await new Promise((resolve) => setTimeout(resolve, 500));
  
    let projectsQuery;
  
    if (startAfterDoc) {
      projectsQuery = query(
        collection(db, "projects"),
        orderBy("title"),
        startAfter(startAfterDoc),
        limit(limitCount)
      );
    } else {
      projectsQuery = query(
        collection(db, "projects"),
        orderBy("title"),
        limit(limitCount)
      );
    }
  
    const querySnapshot = await getDocs(projectsQuery);
    const docs = querySnapshot.docs.map(docSnap => ({ id: docSnap.id, ...(docSnap.data() as ProjectData) }));
  
    return { docs, lastVisible: querySnapshot.docs[querySnapshot.docs.length - 1] };
  }
  
