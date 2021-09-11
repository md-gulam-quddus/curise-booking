// document.getElementById("firstInc").addEventListener("click", function () {
//   //   const ticketCount = document.getElementById("firstTicketCount");
//   //   const newTicketCount = parseInt(ticketCount.value);
//   //   const ticketNumber = newTicketCount + 1;
//   //   ticketCount.value = ticketNumber;
//   //   const ticketPrice = ticketNumber * 150;
//   //   document.getElementById("totalPrice").innerText = "$" + ticketPrice;
//   handleTicketChange(true);
// });

// document.getElementById("firstDec").addEventListener("click", function () {
//   //   const ticketCount = document.getElementById("firstTicketCount");
//   //   const newTicketCount = parseInt(ticketCount.value);
//   //   const ticketNumber = newTicketCount - 1;
//   //   ticketCount.value = ticketNumber;
//   //   const ticketPrice = ticketNumber * 150;
//   //   document.getElementById("totalPrice").innerText = "$" + ticketPrice;
//   handleTicketChange(false);
// });

// function handleTicketChange(isIncrease) {
//   const ticketCount = document.getElementById("firstTicketCount");
//   const newTicketCount = parseInt(ticketCount.value);
//   //   const ticketNumber = newTicketCount + 1;
//   let ticketNumber = newTicketCount;
//   if (isIncrease === true) {
//     ticketNumber = newTicketCount + 1;
//   }
//   if (isIncrease === false && ticketNumber > 0) {
//     ticketNumber = newTicketCount - 1;
//   }

//   ticketCount.value = ticketNumber;
//   const ticketPrice = ticketNumber * 150;
//   document.getElementById("totalPrice").innerText = "$" + ticketPrice;
// }

function handleTicketChange(ticket, isIncrease) {
  //   const ticketCount = document.getElementById(ticket);
  //   const newTicketCount = parseInt(ticketCount.value);
  const newTicketCount = inputTicket(ticket);
  //   const ticketNumber = newTicketCount + 1;
  let ticketNumber = newTicketCount;
  if (isIncrease === true) {
    ticketNumber = newTicketCount + 1;
  }
  if (isIncrease === false && ticketNumber > 0) {
    ticketNumber = newTicketCount - 1;
  }

  document.getElementById(ticket).value = ticketNumber;
  //   let ticketPrice = 0;
  //   if (ticket == "firstTicketCount") {
  //     ticketPrice = ticketNumber * 150;
  //   }
  //   if (ticket == "economyTicketCount") {
  //     ticketPrice = ticketNumber * 100;
  //   }
  calculateTotal();
}

function calculateTotal() {
  //   const firstClass = document.getElementById("firstTicketCount");
  //   const firstClassTotal = parseInt(firstClass.value);
  const firstClass = inputTicket("firstTicketCount");
  //   const economyClass = document.getElementById("economyTicketCount");
  //   const economyClassTotal = parseInt(economyClass.value);
  const economyClass = inputTicket("economyTicketCount");

  const totalPrice = firstClass * 150 + economyClass * 100;
  document.getElementById("totalPrice").innerText = "$" + totalPrice;
  const tax = totalPrice * 0.1;
  document.getElementById("taxAmount").innerText = "$" + tax;
  const grandTotal = tax + totalPrice;
  document.getElementById("grandTotal").innerText = "$" + grandTotal;
}

function inputTicket(ticketId) {
  const ticketClass = document.getElementById(ticketId);
  const ticketTotal = parseInt(ticketClass.value);
  return ticketTotal;
}

function showDetails() {
  const economyClass = document.getElementById("economyTicketCount");
  const priceEconomy = parseInt(economyClass.value) * 100;
  console.log(
    economyClass.value + " Economy Class Ticket Price Are " + priceEconomy
  );
}

const bookBtn = document
  .getElementById("showDetails")
  .addEventListener("click", function () {
    showDetails();
  });
