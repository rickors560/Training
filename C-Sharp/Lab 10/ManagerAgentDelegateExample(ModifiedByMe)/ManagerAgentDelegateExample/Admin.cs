using System;
using System.Collections.Generic;
using System.Text;

namespace ManagerAgentDelegateExample
{
    public static class Admin
    {
        public static void subscribe(Agent a) {
            a.notificationChanged += showAdmin;
        }
        public static void showAdmin(object a, NotificationEventArgs n) {
            Console.WriteLine($"Admin Notified : {n.status} ");
        }
    }
}
