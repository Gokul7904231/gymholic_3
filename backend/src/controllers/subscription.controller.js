import Subscription from "../model/Subscription.model.js";
import Gym from "../model/Gym.model.js";

export const currentSubscription = async (req, res) => {
  const gym = await Gym.findOne({ ownerId: req.user.id });
  const subscription = await Subscription.findOne({ gymId: gym._id });

  res.json(subscription);
};
