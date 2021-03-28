using System;
using System.Collections.Generic;
using System.Text;

namespace RealTimeDelegateDemo
{
    public class VideoPlayer
    {
        int VideoStatus;
        public int VideoPlayCheck(string ext)
        {
            if (ext == "mkv")
            {
                VideoStatus = 0;
            }
            else
            {
                VideoStatus = -1;
            }
            Console.WriteLine($"\n{ext} Video :");
            return VideoStatus;
        }
    }
}
