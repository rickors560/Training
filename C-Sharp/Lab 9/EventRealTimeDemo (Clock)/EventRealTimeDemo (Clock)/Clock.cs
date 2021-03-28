using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace EventRealTimeDemo__Clock_
{
    public class Clock
    {
        int s;
        int h;
        int m;
        public delegate void ClockSecondChangeHandler(object clock, Time newTime);
        public event ClockSecondChangeHandler SecondChanged;
        public void run() {
            for (; ; ) {
                Thread.Sleep(100);
                System.DateTime dt = System.DateTime.Now;
                if (dt.Second != s) {
                    Time newTime = new Time(dt.Hour, dt.Minute, dt.Second);
                    if (SecondChanged != null) {
                        SecondChanged(this, newTime); // Calling Delegate
                    }
                }
                s = dt.Second;
                m = dt.Minute;
                h = dt.Hour;
            }
        }
    }
}
