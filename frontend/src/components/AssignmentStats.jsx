import { ASSIGNMENT_STATUSES } from '../constants/assignmentStatuses';

import {
  Card,
  CardContent,
  Typography,

  Chip,
} from '@mui/material';


const AssignmentStats = ({ tasks}) => {

    const getStatusColor = (status) => {
    switch (status) {
      case ASSIGNMENT_STATUSES.COMPLETED:
        return 'success';
      case ASSIGNMENT_STATUSES.IN_PROGRESS:
        return 'primary';
      case ASSIGNMENT_STATUSES.OVERDUE:
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <div>
          <Card sx={{ mb: 2 }}>
            <CardContent>
                {/* <Chip
                    color='purple'
                    size="small"
                    sx={{ mt: 1 }}
                  /> */}
                <Typography variant="h6">
                    Total Assignments: {tasks.length}
                </Typography>
          </CardContent>

            </Card>
            {Object.values(ASSIGNMENT_STATUSES).map((status) => (
                <Card key={status} sx={{ mb: 2 }}>
                    <CardContent>
                        <Chip
                            color={getStatusColor(status)}
                            size="small"
                            sx={{ mt: 1 }}
                        />
                        <Typography variant="h6">
                            {status}: {tasks.filter((task) => task.status === status).length}
                        </Typography>
                </CardContent>

            </Card>
            ))}
    </div>
  );
};

export default AssignmentStats;