import { Queue } from "bullmq";
import { connection } from "./connection";

export const opportunityDeduplicationQueue = new Queue(
  "opportunity-deduplication",
  {
    connection: connection as any,
    defaultJobOptions: {
      attempts: 3,
      removeOnComplete: { count: 100 },
      removeOnFail: { count: 50 },
    },
  }
);
