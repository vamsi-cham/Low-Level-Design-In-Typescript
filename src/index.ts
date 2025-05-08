import { PickerAlgo } from "./Enum/PickerAlgo";
import { OrderManager } from "./Order/OrderManager";
import { FirstItemStrategy } from "./PickRestaurant/FirstItemStrategy";
import { PickRestaurantFactory } from "./PickRestaurant/PickRestaurantFactory";
import { Item } from "./Restaurant/Item";
import { Menu } from "./Restaurant/Menu";
import { RestaurantManager } from "./Restaurant/RestaurantManager";


const restaurantManager =  new RestaurantManager();

const pickRestaurantFactory = new PickRestaurantFactory(restaurantManager)

const pickRestaurantStrategy = pickRestaurantFactory.pickingAlgo(PickerAlgo.FIRST_ITEM)

const orderManager =  new OrderManager(restaurantManager, pickRestaurantStrategy);

restaurantManager.onboardRestaurant('rest1', 10, new Menu([new Item('biryani', 100)]));

// restaurantManager.updatePrice('rest1', 'paneer', 50);

restaurantManager.onboardRestaurant('rest2', 10, new Menu([]));

restaurantManager.updatePrice('rest2', 'paneer', 45);

restaurantManager.updatePrice('rest1', 'biryani', 90);

restaurantManager.updatePrice('rest2', 'biryani', 99);

orderManager.placeOrder('order1', 'biryani');

orderManager.placeOrder('order2', 'paneer', 'biryani');

orderManager.getAllOrders();

orderManager.dispatchOrder('order1');
orderManager.getDispatchedOrders()

orderManager.placeOrder('order3', 'chicken');

orderManager.getAllOrders();

restaurantManager.getRestaurantServedItems('rest1')