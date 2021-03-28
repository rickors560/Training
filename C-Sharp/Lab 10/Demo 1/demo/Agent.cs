using System;
using System.Collections.Generic;
using System.Text;

namespace demo
{
    public class Agent
    {
        public delegate void MyDelegate();
        public void sendMessage(MyDelegate d) {
            d();
        }
    }
}
