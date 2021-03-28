using System;
using System.Collections.Generic;
using System.Text;

namespace EventRealTimeDemo__Clock_
{
    public class Time: EventArgs
    {
        public int second;
        public int minute;
        public int hour;
        public Time(int h, int m, int s) {
            this.hour = h;
            this.minute = m;
            this.second = s;
        }
    }
}
