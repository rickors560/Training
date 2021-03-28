using System;
using System.Collections.Generic;
using System.Text;

namespace ManagerAgentDelegateExample
{
    public delegate bool sendMessageDelegate(Message m);
    public class Manager
    {
        private sendMessageDelegate td;
        Agent a;
        public Manager()
        {
            a = new Agent();
        }
        public void RequestDelivery(Message m, sendMessageDelegate t) {
            Console.WriteLine("Task Done-->\n");
            //td = new Agent.tasksenddelegate(t);
            Admin.subscribe(a);
            a.doTask(t, m);
        }
    }
}
