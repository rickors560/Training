using System;
using System.Collections.Generic;
using System.Text;

namespace EventRealTimeDemo__Clock_
{
    public class InventoryClock
    {
        public void subscribe(Clock c)
        {
            c.SecondChanged += InvTimeChanged; // Adding a function in event i.e, SecondChanged
        }
        public void InvTimeChanged(object c, Time t)
        {
            Console.WriteLine($"Inventory Time Changed: {t.hour}:{t.minute}:{t.second}");
        }
    }
}
