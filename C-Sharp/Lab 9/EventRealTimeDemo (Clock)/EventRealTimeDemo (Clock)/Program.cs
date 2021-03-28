using System;

namespace EventRealTimeDemo__Clock_
{
    class Program
    {
        static void Main(string[] args)
        {
            Clock c = new Clock();
            BedRoomClock bd = new BedRoomClock();
            bd.subscribe(c);
            InventoryClock i = new InventoryClock();
            i.subscribe(c);
            c.run();
        }
    }
}   