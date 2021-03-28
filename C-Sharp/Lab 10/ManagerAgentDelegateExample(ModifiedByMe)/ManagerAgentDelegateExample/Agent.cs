using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace ManagerAgentDelegateExample
{
    public class Agent
    {
        public delegate void NotificationHandler(object agent, NotificationEventArgs notificationInfo);
        public event NotificationHandler notificationChanged;
        //public delegate bool tasksenddelegate(Message m);
        private bool isTaskCompleted = false;
        public void doTask(sendMessageDelegate task, Message m) {
            NotificationEventArgs notificationInfo = new NotificationEventArgs(isTaskCompleted);
            if (isTaskCompleted == false)
            {
                if (notificationChanged != null)
                {
                    //Console.WriteLine("start");
                    notificationChanged(this, notificationInfo);
                }
            }
            Thread.Sleep(500);
            isTaskCompleted = true;
            Console.WriteLine("\n");
            notificationInfo = new NotificationEventArgs(isTaskCompleted);
            if (isTaskCompleted) {
                //Console.WriteLine("ty");
                var status = task(m);
                if (notificationChanged != null) {
                    notificationChanged(this, notificationInfo);
                    
                }
            }
        }
    }
}
