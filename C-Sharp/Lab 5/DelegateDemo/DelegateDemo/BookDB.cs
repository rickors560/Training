using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace DelegateDemo
{
    public delegate void ProcessBookCallbackDelegate(Book book);
    public class BookDB
    {
        ArrayList list = new ArrayList();
        public void AddBook(string title, string author, decimal price, bool paperback) {
            list.Add(new Book
            {
                Title = title,
                Author = author,
                Price = price,
                PaperBack = paperback
            });
        }
        public void ProcessPaperbackBooks(ProcessBookCallbackDelegate processBook) {
            foreach (Book b in list) {
                if (b.PaperBack) {
                    processBook(b);
                }
            }
        }
    }
}
