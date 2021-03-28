using System;
using System.Collections.Generic;
using System.Text;

namespace demo
{
    public class Manager
    {
        Agent a;
        public Manager()
        {
            a = new Agent();
        }
        public void manage() {
            Console.WriteLine("Task Completed Send Message Now ->");
            a.sendMessage(CallType.CallByPhone);
        }
    }
}
