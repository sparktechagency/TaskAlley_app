import { useRoute } from '@react-navigation/native';
import DetailsTask from "../../components/taskDetails/DetailsTask";

const TaskDetails = () => {
  const {
    params: { heading, from, status },
  } = useRoute().params as {
    params: {
      heading: "Tasks Details" | "My Tasks Details"; from: "user" | "service", status: "All Tasks" |
      "open for bids" |
      "in Progress" |
      "completed" |
      "cancelled" | "dispute"
    }
  };
  return <DetailsTask heading={heading} from={from} status={status} />;
};

export default TaskDetails;
