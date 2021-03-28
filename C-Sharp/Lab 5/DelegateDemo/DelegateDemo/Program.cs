using System;

namespace DelegateDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            BookDB books = new BookDB();
            books.AddBook("Book1", "Author1", 150, true);
            books.AddBook("Book2", "Author2", 250, true);
            books.AddBook("Book3", "Author3", 350, true);
            books.AddBook("Book4", "Author4", 450, true);
            ProcessBookCallbackDelegate d = new ProcessBookCallbackDelegate(SellBook);
            d += RentBook;
            books.ProcessPaperbackBooks(d);
            

        }
        static void SellBook(Book book) {
            Console.WriteLine($"SOLD Title: {book.Title} SOLD Price: {book.Price}");
        }
        static void RentBook(Book book)
        {
            Console.WriteLine($"\n---------RENT Title: {book.Title} RENT Price: {book.Price}\n");
        }
    }
}
