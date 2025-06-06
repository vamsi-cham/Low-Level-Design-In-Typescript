import { NotificationFactory } from "./Factory/NotificationFactory";

const notifier = NotificationFactory.create('email');
notifier.send('Hello from Factory!');