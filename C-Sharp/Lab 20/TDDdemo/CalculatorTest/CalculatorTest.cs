using CalculatorLib;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace CalculatorTest
{
    [TestClass]
    public class CalculatorTest
    {
        public ICalculator c;
        private int num1;
        private int num2;
        private int addresult;
        private int subresult;
        private int mulresult;
        private int divresult;

        [TestInitialize]
        public void TestSetup() {
            c = new Calculator();
            num1 = 0;
            num2 = 0;
            addresult = 0;
            subresult = 0;
        }
        // for Add()
        [TestMethod]
        public void ShouldAddTwoPositiveNumbers()
        {
            num1 = 10; num2 = 5; addresult = 15;
            var result = c.Add(num1, num2);
            Assert.AreEqual(addresult, result);
        }
        [TestMethod]
        public void ShouldReturnFirstNumberIfSecondNumberIsZero()
        {
            num1 = 25;
            var result = c.Add(num1, 0);
            Assert.AreEqual(num1, result);
        }
        // for Sub()
        [TestMethod]
        public void ShouldSubTwoPositiveNumbers() {
            num1 = 10; num2 = 5; subresult = 5;
            var result = c.Sub(num1, num2);
            Assert.AreEqual(subresult, result);
        }
        [TestMethod]
        public void ShouldSubOneNegativeNumber()
        {
            num1 = -10; num2 = 5; subresult = -15;
            var result = c.Sub(num1, num2);
            Assert.AreEqual(subresult, result);
        }
        [TestMethod]
        public void ShouldSubNegativeNumbers()
        {
            num1 = -10; num2 = -5; subresult = -5;
            var result = c.Sub(num1, num2);
            Assert.AreEqual(subresult, result);
        }
        // for Mul()
        [TestMethod]
        public void ShouldMulTwoNumbers() {
            num1 = 0; num2 = 5; mulresult = 0;
            var result = c.Mul(num1, num2);
            Assert.AreEqual(mulresult, result);
        }
        // for Div()
        [TestMethod]
        public void ShouldDivTwoNumbers() {
            num1 = 10; num2 = 2; divresult = 5;
            var result = c.Div(num1, num2);
            Assert.AreEqual(divresult, result);
        }
        [TestMethod]
        [ExpectedException(typeof(ArgumentException))]
        public void ShouldThrowExceptionDivideByZero() {
            num1 = 20; num2 = 0;
            c.Div(num1, num2);
        }
    }
}
