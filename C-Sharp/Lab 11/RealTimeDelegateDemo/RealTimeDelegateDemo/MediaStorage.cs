using System;
using System.Collections.Generic;
using System.Text;

namespace RealTimeDelegateDemo
{
    public class MediaStorage
    {
        public delegate int ReportDelegate(string e);
        public void ReportStatus(ReportDelegate d, string extension){
            int r = d(extension);
            if (r == 0)
            {
                Console.WriteLine($"{extension} Media Played SuccessFully");
            }
            else {
                Console.WriteLine($"{extension} Media Did Not Play SuccessFully");
            }
        }
    }
}
