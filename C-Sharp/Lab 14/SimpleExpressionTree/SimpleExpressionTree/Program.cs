using System;

namespace SimpleExpressionTree
{
    class Program
    {
        static void Main(string[] args)
        {
            System.Linq.Expressions.Expression<Func<int, int>> e = (x) => x * x ;
            Console.WriteLine(e);

            var a = e.Compile();
            Console.WriteLine(a(5));

            Func<int, int> sq = (x) => x * x;
            Console.WriteLine(sq(7));
        }
    }
}