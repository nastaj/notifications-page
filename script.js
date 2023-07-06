// DOM Elements
const notificationsCounter = document.querySelector(".notifications");
const notifications = document.querySelectorAll(".notification");
const notificationBoard = document.querySelector(".notification-board");

// App
class App {
  #target;

  // Used for determining the notification counter value
  #unread = [];

  constructor() {
    // Single event listener for the whole notification board
    // This app uses event delegation for its core functionality
    notificationBoard.addEventListener(
      "click",
      this._notificationHandler.bind(this)
    );
  }

  _notificationHandler(e) {
    this.#target = e.target;

    // "Mark as read"
    if (this.#target.closest(".mark-read")) {
      notifications.forEach((notification) => {
        this._markAsRead(notification);
      });
    }

    // Mark as read on individual notification click
    if (this.#target.closest(".notification")) {
      this._markAsRead(this.#target.closest(".notification"));
    }

    // Update counter
    this._updateUnread();
    this._setCounter();
  }

  _markAsRead(notification) {
    if (!notification.hasAttribute("unread")) return;

    notification.classList.remove("bg-blue-grayish-snow-white");
    notification.querySelector(".notification-dot").classList.add("invisible");
    notification.removeAttribute("unread");
  }

  _updateUnread() {
    this.#unread = Array.from(notifications).filter((notification) => {
      return notification.hasAttribute("unread");
    });
  }

  _setCounter() {
    const counterValue = this.#unread.length;
    notificationsCounter.textContent = counterValue;
  }
}

const app = new App();
