using System;
using System.Collections.Generic;
using System.Text;

namespace CountVowel
{
    public static class MyExtensionMethods
    {
        public static int CountVowels(this String s)
        {
            s = s.ToLower();
            int c = 0;
            for (int i = 0; i < s.Length; i++)
            {
                if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u')
                {
                    c += 1;
                }
            }
            return c;
        }
    }
}
