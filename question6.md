# Question: Explain about push notification, how we send if we have to send notification to 2lac users

## Answer

```bash
* What is it?
    - A push notification is a message that pops up on a mobile device. App publishers can send them at any time; users don’t have to be in the app or using their devices to receive them.
    - Push notification is a way of sending messages to the users.
    - With the help of push notification, developers can do a lot of things, e.g, they can show the latest sports scores, get a user to take an action, such as downloading a coupon, or let a user know about an event, such as a flash sale.

* Why are they used?
    - For showing Sports scores and news right on users mobile lock screen.
    - For utility messages like traffic, weather and ski snow reports.
    - For promoting products or offers to increase sales.
    - For improving customer experience.
    - For converting unknown app users to known customers.
    - For sending transactional receipts right away.
    - For sending OTPs.
    - For driving users to other marketing channels, such as social networks.

* How to send notification to 2 lac users?
    - According to FCM(Firebase Cloud Messaging), there is a limit of 1000 messages at a time.
    - So, we can send it in a batch of 1000 users at a time.
    - Firstly, we have to get all the users from database then make an array and push 1000 users into that array and send the notification. Then reset the array and again push the next 1000 users into array and again send the notification. Iterate it to 200 times to send to 2 lac users.
```
