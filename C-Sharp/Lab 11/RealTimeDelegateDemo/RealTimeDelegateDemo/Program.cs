using System;
using static RealTimeDelegateDemo.MediaStorage;

namespace RealTimeDelegateDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            MediaStorage m = new MediaStorage();
            AudioPlayer ap = new AudioPlayer();
            VideoPlayer vp = new VideoPlayer();
            ReportDelegate reportDelegate = new ReportDelegate(ap.AudioPlayCheck);
            m.ReportStatus(reportDelegate, "mp3");
            reportDelegate = vp.VideoPlayCheck;
            m.ReportStatus(reportDelegate, "mkv");
        }
    }
}