import express from "express";
import cors from "cors";

import customerAuthRoutes from "./routes/customerAuth.route.js";
// import gymRoutes from "./routes/gym.route.js";
// import memberRoutes from "./routes/member.route.js";
// import slotRoutes from "./routes/slot.route.js";
// import subscriptionRoutes from "./routes/subscription.route.js";
// import paymentRoutes from "./routes/payment.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", customerAuthRoutes);
// app.use("/api/gym", gymRoutes);
// app.use("/api/members", memberRoutes);
// app.use("/api/slots", slotRoutes);
// app.use("/api/subscription", subscriptionRoutes);
// app.use("/api/payment", paymentRoutes);

export default app;
