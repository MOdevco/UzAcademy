import {Button} from '@chakra-ui/react'
import { collection, deleteDoc, doc, getFirestore, setDoc } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Context } from '../_app';
import { memo, useContext } from 'react';

function Remover() {

    const { db, firebase } = useContext(Context)

    const [students]: any = useCollection(
        collection(getFirestore(firebase), 'students'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },    
        }
    );

    const remove = async () => {
        students.docs.map((i: any) => {
            deleteDoc(doc(db, "students", i.id))
            const studentsRef = doc(db, 'students', `${i.data().nameStudent} ${i.data().surename}`);
            setDoc(studentsRef, { 
                nameStudent: i.data().nameStudent,
                surename: i.data().surename,
                tel: i.data().tel,
                course: i.data().course,
                isPayed: false,
                review: i.data().review
            }, { merge: true });
        })
    }

    return (
        <>
            <Button onClick={remove}>Hammani pulini to'lanmagan qilish</Button>
        </>
    )
}

export default memo(Remover)