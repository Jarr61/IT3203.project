document.getElementById("quizForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevents refreshing the page, allows page to remain on screen


  let score = 0;
  let output = "<h2>Results</h2>"

  const a1= "display: flex";
  const a2= "1";
  const a3= "2";
  const a4 = ["Columnns", "Rows", "Gaps"];
  const a5 = "2";

  //Question 1 js
  const q1 = document.getElementById("q1").value.trim().toLowerCase();
  let correctQ1 = (q1.includes("display") && q1.includes("flex"));
  if (correctQ1) score++;
  output += `<p><strong>Q1:</strong> ${correctQ1 ? "Correct" : "Incorrect"}<br>
  <em>Correct answer:</em> display: flex;</p>`;

  // Question 2 js
  const q2 = document.querySelector("input[name='q2']:checked");
  let correctQ2 = q2 && q2.value === a2;
  if (correctQ2) score++;
  output += `<p><strong>Q2:</strong> ${correctQ2 ? "Correct" : "Incorrect"}<br>
  <em>Correct answer:</em> One-dimensional layout, with rows OR columns</p>`;

  // Question 3 js
  const q3 = document.querySelector("input[name='q3']:checked");
  let correctQ3 = q3 && q3.value === a3;
  if (correctQ3) score++;
  output += `<p><strong>Q3:</strong> ${correctQ3 ? "Correct" : "Incorrect"}<br>
  <em>Correct answer:</em> justify-content</p>`;

  // Question 4 js
  const q4 = Array.from(document.querySelectorAll("input[name='q4']:checked"))
                  .map(x => x.value);
  let correctQ4 = (q4.length === a4.length &&
                   a4.every(x => q4.includes(x)));
  if (correctQ4) score++;
  output += `<p><strong>Q4:</strong> ${correctQ4 ? "Correct" : "Incorrect"}<br>
  <em>Correct answers:</em> Columns, Rows, Gap</p>`;

  // Question 5 js
  const q5 = document.querySelector("input[name='q5']:checked");
  let correctQ5 = q5 && q5.value === a5;
  if (correctQ5) score++;
  output += `<p><strong>Q5:</strong> ${correctQ5 ? "Correct" : "Incorrect"}<br>
  <em>Correct answer:</em> Multiple row/column layout</p>`;

  // Final result
  output += `<h3>Your Score: ${score}/5</h3>`;
  output += score >= 3 
    ? `<p style="color:green;"><strong>PASS</strong></p>`
    : `<p style="color:red;"><strong>FAIL</strong></p>`;

  document.getElementById("results").innerHTML = output;
  });

document.getElementById("resetBtn").addEventListener("click", function() {
  document.getElementById("results").innerHTML = "";
});