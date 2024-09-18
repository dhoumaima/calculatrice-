//Cal Program
const Display = document.getElementById("Display");

function AppendToDisplay(Input)
{
    Display.value += Input
}

function Calculate()
{
   try
   {
    Display.value=eval(Display.value);
   }
   catch(error)
   {
    Display.value="Error";
   }
}

function ClearDisplay()
{
    Display.value="";
}