using System;
using System.Collections.Generic;
using System.Text;

namespace RealTimeDelegateDemo
{
    public class AudioPlayer
    {
        int AudioStatus;
        public int AudioPlayCheck(string ext) {
            if (ext == "mp3")
            {
                AudioStatus = 0;
            }
            else {
                AudioStatus = -1;
            }
            Console.WriteLine($"\n{ext} Audio :");
            return AudioStatus;
        }
    }
}
