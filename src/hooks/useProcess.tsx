import {useDispatch, useSelector} from 'react-redux';
import {updateProcess} from '../states/process';
import {getDb} from '../helpers/db';
import {updateHistory} from '../states/history';
import {RootState} from '../states/store';
import {useEffect} from 'react';

const useProcess = () => {
  const dispatch = useDispatch();
  const process = useSelector((state: RootState) => state.process);
  // console.log('process', process);
  useEffect(() => {
    const fetchProcess = async () => {
      const db = await getDb();
      const dbProcess = await db.process;
      const dbHistory = await db.history;
      const condition =
        dbProcess.hasStarted &&
        !process.id &&
        dbProcess.id !== process.id 
      if (condition) {
        dispatch(updateProcess(dbProcess));
      }

      // console.log('dbHistory', dbHistory);

      dispatch(updateHistory(dbHistory));
    };
    fetchProcess();
  }, [process.id]);
};

export default useProcess;
