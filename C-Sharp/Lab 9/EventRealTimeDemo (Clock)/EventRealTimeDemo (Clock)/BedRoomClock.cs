using System;
using System.Collections.Generic;
using System.Text;

namespace EventRealTimeDemo__Clock_
{
    public class BedRoomClock
    {
        public void subscribe(Clock c) {
            c.SecondChanged += BDTimeChanged; // Adding a function in event i.e, SecondChanged
        }
        public void BDTimeChanged(object c, Time t) {
            Console.WriteLine($"BedRoom Time Changed: {t.hour}:{t.minute}:{t.second}");
        }
    }
}
