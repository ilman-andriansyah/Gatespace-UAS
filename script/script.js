/*********************************************************************************************************************************************************
INDEX PAGE
*********************************************************************************************************************************************************/
function welcome(){alert("Welcome to Gatespace");}
/*INDEX MAIN HEADER
<tr class="main-header">
     <td colspan="3" height="120px" align="center"><h1><b>GATESPACE</b></h1></td>
</tr>
*/
function indexmainheader(){
     document.writeln("<tr class=main-header>");
     document.writeln("    <td colspan=3 height=120px align=center><h1><b>GATESPACE</b></h1></td>");
     document.writeln("</tr>");
}
/*INDEX MAIN NAVIGATION
<tr>
     <td colspan="3" height="50px" align="center">
           &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp 
           <a href="index.html" style="font-family:helvetica;color:white;text-decoration:none;"><b>HOME</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
           <a href="#founder" style="font-family:helvetica;color:white;text-decoration:none;"><b>FOUNDER</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
           <a href="profile/profile.html" style="font-family:helvetica;color:white;text-decoration:none;"><b>PROFILE</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
           <a href="contact/contact.html" style="font-family:helvetica;color:white;text-decoration:none;"><b>CONTACT</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
           <a href="product/product.html" style="font-family:helvetica;color:white;text-decoration:none;"><b>PRODUCT</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
     </td>
</tr>
*/
function indexmainnavigation(){
     document.writeln("<tr>");
     document.writeln("    <td colspan=3 height=50px align=center>");
     document.writeln("         &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ");
     document.writeln("         <a href=index.html style=font-family:helvetica;color:white;text-decoration:none;><b>HOME</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ");
     document.writeln("         <a href=#founder style=font-family:helvetica;color:white;text-decoration:none;><b>FOUNDER</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("         <a href=profile/profile.html style=font-family:helvetica;color:white;text-decoration:none;><b>PROFILE</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("         <a href=contact/contact.html style=font-family:helvetica;color:white;text-decoration:none;><b>CONTACT</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("         <a href=product/product.html style=font-family:helvetica;color:white;text-decoration:none;><b>PRODUCT</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("    </td>");
     document.writeln("</tr>");
}
/*INDEX MAIN CONTENT
<tr>
     <td height="370px" width="700px" align="center">
           <!--Menambahkan Audio / Suara
           <audio controls>
                <source src="horse.ogg" type="audio/ogg">
                <source src="horse.mp3" type="audio/mpeg">
                Your browser does not support the audio tag
           </audio>
           -->
           <!--Background Audio / Suara-->
           <b>Audio Background of Death Becomes Fur</b><br><br><br>
           <audio autoplay id="bgsound">
                <source src="http://media.w3.org/2010/07/bunny/04-Death Becomes_Fur.mp4" type="audio/mp4">
                <source src="http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga" type="audio/ogg;codecs=vorbis">
                <p>Your user agent does not support the HTML5 Audio element.</p>
           </audio>
           <button type="button" onclick="document.getElementById ('bgsound').pause();">Stop background sound</button>
     </td>
     <td height="370px" width="700px" align="center">
           <b>
                <h1>#1 WORLD</h1>
                <h1>BIGGEST</h1>
                <h1>SHOES STORE</h1>
           </b>
     </td>
     <td height="370px" width="700px" align="center">
           <b>GATESPACE MARQUEE</b><br><br><br>
           <marquee direction="left">Welcome to Gatespace</marquee><br><br><br>
           <marquee direction="right">Welcome to Gatespace</marquee></font><br><br><br>
           <marquee direction="left" behavior="alternate">Welcome to Gatespace</marquee></font><br><br><br>
           <marquee direction="left" scrolldelay=500>Welcome to Gatespace</marquee>
     </td>
</tr>
*/
function indexmaincontent(){
     document.writeln("<tr>");
     document.writeln("    <td height=370px width=700px align=center>");
     document.writeln("         <!--Menambahkan Audio / Suara");
     document.writeln("         <audio controls>");
     document.writeln("              <source src=horse.ogg type=audio/ogg>");
     document.writeln("              <source src=horse.mp3 type=audio/mpeg>");
     document.writeln("              Your browser does not support the audio tag");
     document.writeln("         </audio>");
     document.writeln("         -->");
     document.writeln("         <!--Background Audio / Suara-->");
     document.writeln("         <b>Audio Background of Death Becomes Fur</b><br><br><br>");
     document.writeln("         <audio autoplay id=bgsound>");
     document.writeln("              <source src=http://media.w3.org/2010/07/bunny/04-Death Becomes_Fur.mp4 type=audio/mp4>");
     document.writeln("              <source src=http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga type=audio/ogg;codecs=vorbis>");
     document.writeln("              <p>Your user agent does not support the HTML5 Audio element.</p>");
     document.writeln("         </audio>");
     document.writeln("         <button type=button onclick=document.getElementById ('bgsound').pause();>Stop background sound</button>");
     document.writeln("    </td>");
     document.writeln("    <td height=370px width=700px align=center>");
     document.writeln("         <b>");
     document.writeln("              <h1>#1 WORLD</h1>");
     document.writeln("              <h1>BIGGEST</h1> ");
     document.writeln("              <h1>SHOES STORE</h1>");
     document.writeln("         </b>");
     document.writeln("    </td>");
     document.writeln("    <td height=370px width=700px align=center>");
     document.writeln("         <b>GATESPACE MARQUEE</b><br><br><br>");
     document.writeln("         <marquee direction=left>Welcome to Gatespace</marquee><br><br><br>");
     document.writeln("         <marquee direction=right>Welcome to Gatespace</marquee></font><br><br><br>");
     document.writeln("         <marquee direction=left behavior=alternate>Welcome to Gatespace</marquee></font><br><br><br>");
     document.writeln("         <marquee direction=left scrolldelay=500>Welcome to Gatespace</marquee>");
     document.writeln("    </td>");
     document.writeln("</tr>");
}
/*INDEX MAIN FOOTER
<tr class="main-footer">
     <td colspan="3" height="100px" align="center"><b>Copyright &copy by Ilman Mochamad Andriansyah</b></td>
</tr>
*/
function indexmainfooter(){
     document.writeln("<tr class=main-footer>");
     document.writeln("    <td colspan=3 height=100px align=center><b>Copyright &copy by Ilman Mochamad Andriansyah</b></td>");
     document.writeln("</tr>");
}
/*INDEX SECOND HEADER
<tr class="second-header">
     <td colspan="3" height="120px" align="center"><h1><b>FOUNDER</b></h1></td>
</tr>
*/
function indexsecondheader(){
     document.writeln("<tr class=second-header>");
     document.writeln("    <td colspan=3 height=120px align=center><h1><b>FOUNDER</b></h1></td>");
     document.writeln("</tr>");
}
/*INDEX SECOND NAVIGATION
<tr>
     <td colspan="3" height="50px" align="center">
           &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
           <a href="#top" style="font-family:helvetica;color:white;text-decoration:none;"><b>GOTO THE TOP</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
     </td>
</tr>
*/
function indexsecondnavigation(){
     document.writeln("<tr>");
     document.writeln("    <td colspan=3 height=50px align=center>");
     document.writeln("         &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("         <a href=#top style=font-family:helvetica;color:white;text-decoration:none;><b>GOTO THE TOP</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("    </td>");
     document.writeln("</tr>");
}
/*INDEX SECOND CONTENT
<tr>
     <td height="370px" width="1400px" align="center">
           <b>
                <h1>ILMAN MOCHAMAD ANDRIANSYAH</h1>
                <h1>INFORMATION SYSTEM 2</h1>
                <h1>INDONESIAN COMPUTER UNIVERSITY</h1>
           </b>
     </td>
</tr>
*/
function indexsecondcontent(){
     document.writeln("<tr>");
     document.writeln("    <td height=370px width=1400px align=center>");
     document.writeln("         <b>");
     document.writeln("              <h1>ILMAN MOCHAMAD ANDRIANSYAH</h1>");
     document.writeln("              <h1>INFORMATION SYSTEM 2</h1>");
     document.writeln("              <h1>INDONESIAN COMPUTER UNIVERSITY</h1>");
     document.writeln("         </b>");
     document.writeln("    </td>");
     document.writeln("</tr>    ");
}
/*INDEX SECOND FOOTER
<tr class="second-footer">
     <td colspan="3" height="100px" align="center"><b>Copyright &copy by Ilman Mochamad Andriansyah</b></td>
</tr>
*/             
function indexsecondfooter(){
     document.writeln("<tr class=second-footer>");
     document.writeln("    <td colspan=3 height=100px align=center><b>Copyright &copy by Ilman Mochamad Andriansyah</b></td>");
     document.writeln("</tr>");
}
/*********************************************************************************************************************************************************
PROFILE PAGE
*********************************************************************************************************************************************************/
/*PROFILE MAIN HEADER
<tr class="main-header">
     <td colspan="3" height="120px" align="center"><h1><b>GATESPACE</b></h1></td>
</tr>
*/
function profilemainheader(){
     document.writeln("<tr class=main-header>");
     document.writeln("    <td colspan=3 height=120px align=center><h1><b>GATESPACE</b></h1></td>");
     document.writeln("</tr>");
}
/*PROFILE MAIN NAVIGATION
<tr>
     <td colspan="3" height="50px" align="center">
           &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp 
           <a href="../index.html" style="font-family:helvetica;color:white;text-decoration:none;"><b>HOME</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
           <a href="#founder" style="font-family:helvetica;color:white;text-decoration:none;"><b>FOUNDER</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
           <a href="profile.html" style="font-family:helvetica;color:white;text-decoration:none;"><b>PROFILE</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
           <a href="../contact/contact.html" style="font-family:helvetica;color:white;text-decoration:none;"><b>CONTACT</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
           <a href="../product/product.html" style="font-family:helvetica;color:white;text-decoration:none;"><b>PRODUCT</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
     </td>
</tr>
*/
function profilemainnavigation(){
     document.writeln("<tr>");
     document.writeln("    <td colspan=3 height=50px align=center>");
     document.writeln("         &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"); 
     document.writeln("         <a href=../index.html style=font-family:helvetica;color:white;text-decoration:none;><b>HOME</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("         <a href=#founder style=font-family:helvetica;color:white;text-decoration:none;><b>FOUNDER</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("         <a href=profile.html style=font-family:helvetica;color:white;text-decoration:none;><b>PROFILE</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("         <a href=../contact/contact.html style=font-family:helvetica;color:white;text-decoration:none;><b>CONTACT</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("         <a href=../product/product.html style=font-family:helvetica;color:white;text-decoration:none;><b>PRODUCT</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("    </td>");
     document.writeln("</tr>");
}
/*PROFILE MAIN CONTENT
<tr>
     <td height="370px" width="700px" align="center">
           <!--Menambahkan Audio / Suara
           <audio controls>
                <source src="horse.ogg" type="audio/ogg">
                <source src="horse.mp3" type="audio/mpeg">
                Your browser does not support the audio tag
           </audio>
           -->
           <!--Background Audio / Suara-->
           <b>Audio Background of Death Becomes Fur</b><br><br><br>
           <audio autoplay id="bgsound">
                <source src="http://media.w3.org/2010/07/bunny/04-Death Becomes_Fur.mp4" type="audio/mp4">
                <source src="http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga" type="audio/ogg;codecs=vorbis">
                <p>Your user agent does not support the HTML5 Audio element.</p>
           </audio>
           <button type="button" onclick="document.getElementById ('bgsound').pause();">Stop background sound</button>
     </td>
     <td height="370px" width="700px" align="center">
           <b>
                <h1>PROFILE</h1><br>
                <h4 align="justify" style="margin-top:1cm;margin-bottom:1cm;margin-right:1cm;margin-left:1cm;">
                     Gatespace is #1 World Biggest Shoes Store
                     which spread in all country begin from Indonesia
                     and now spread in some great country
                     include United States, Spain, France, Russia, Canada, China, Japan, etc. Gatespace Principal is Quality is Our Tradition.
                </h4>
           </b>
     </td>
     <td height="370px" width="700px" align="center">
           <b>GATESPACE MARQUEE</b><br><br><br>
           <marquee direction="left">Welcome to Gatespace</marquee><br><br><br>
           <marquee direction="right">Welcome to Gatespace</marquee></font><br><br><br>
           <marquee direction="left" behavior="alternate">Welcome to Gatespace</marquee></font><br><br><br>
           <marquee direction="left" scrolldelay=500>Welcome to Gatespace</marquee>
     </td>
</tr>
*/
function profilemaincontent(){
     document.writeln("<tr>");
     document.writeln("    <td height=370px width=700px align=center>");
     document.writeln("         <!--Menambahkan Audio / Suara");
     document.writeln("         <audio controls>");
     document.writeln("              <source src=horse.ogg type=audio/ogg>");
     document.writeln("              <source src=horse.mp3 type=audio/mpeg>");
     document.writeln("              Your browser does not support the audio tag");
     document.writeln("         </audio>");
     document.writeln("         -->");
     document.writeln("         <!--Background Audio / Suara-->");
     document.writeln("         <b>Audio Background of Death Becomes Fur</b><br><br><br>");
     document.writeln("         <audio autoplay id=bgsound>");
     document.writeln("              <source src=http://media.w3.org/2010/07/bunny/04-Death Becomes_Fur.mp4 type=audio/mp4>");
     document.writeln("              <source src=http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga type=audio/ogg;codecs=vorbis>");
     document.writeln("              <p>Your user agent does not support the HTML5 Audio element.</p>");
     document.writeln("         </audio>");
     document.writeln("         <button type=button onclick=document.getElementById ('bgsound').pause();>Stop background sound</button>");
     document.writeln("    </td>");
     document.writeln("    <td height=370px width=700px align=center>");
     document.writeln("         <b>");
     document.writeln("              <h1>PROFILE</h1><br>");
     document.writeln("              <h4 align=justify style=margin-top:1cm;margin-bottom:1cm;margin-right:1cm;margin-left:1cm;>");
     document.writeln("                    Gatespace is #1 World Biggest Shoes Store");
     document.writeln("                    which spread in all country begin from Indonesia");
     document.writeln("                    and now spread in some great country");
     document.writeln("                    include United States, Spain, France, Russia, Canada, China, Japan, etc. Gatespace Principal is Quality is Our Tradition.");
     document.writeln("              </h4>");
     document.writeln("         </b>");
     document.writeln("    </td>");
     document.writeln("    <td height=370px width=700px align=center>");
     document.writeln("         <b>GATESPACE MARQUEE</b><br><br><br>");
     document.writeln("         <marquee direction=left>Welcome to Gatespace</marquee><br><br><br>");
     document.writeln("         <marquee direction=right>Welcome to Gatespace</marquee></font><br><br><br>");
     document.writeln("         <marquee direction=left behavior=alternate>Welcome to Gatespace</marquee></font><br><br><br>");
     document.writeln("         <marquee direction=left scrolldelay=500>Welcome to Gatespace</marquee>");
     document.writeln("    </td>");
     document.writeln("</tr>");
}
/*PROFILE MAIN FOOTER
<tr class="main-footer">
     <td colspan="3" height="100px" align="center"><b>Copyright &copy by Ilman Mochamad Andriansyah</b></td>
</tr>
*/
function profilemainfooter(){
     document.writeln("<tr class=main-footer>");
     document.writeln("    <td colspan=3 height=100px align=center><b>Copyright &copy by Ilman Mochamad Andriansyah</b></td>");
     document.writeln("</tr>");
}
/*PROFILE SECOND HEADER
<tr class="second-header">
     <td colspan="3" height="120px" align="center"><h1><b>FOUNDER</b></h1></td>
</tr>
*/
function profilesecondheader(){
     document.writeln("<tr class=second-header>");
     document.writeln("    <td colspan=3 height=120px align=center><h1><b>FOUNDER</b></h1></td>");
     document.writeln("</tr>");
}
/*PROFILE SECOND NAVIGATION
<tr>
     <td colspan="3" height="50px" align="center">
           &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
           <a href="#top" style="font-family:helvetica;color:white;text-decoration:none;"><b>GOTO THE TOP</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
     </td>
</tr>
*/
function profilesecondnavigation(){
     document.writeln("<tr>");
     document.writeln("    <td colspan=3 height=50px align=center>");
     document.writeln("         &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("         <a href=#top style=font-family:helvetica;color:white;text-decoration:none;><b>GOTO THE TOP</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("    </td>");
     document.writeln("</tr>");
}
/*PROFILE SECOND CONTENT
<tr>
     <td height="370px" width="1400px" align="center">
           <b>
                <h1>ILMAN MOCHAMAD ANDRIANSYAH</h1>
                <h1>INFORMATION SYSTEM 2</h1>
                <h1>INDONESIAN COMPUTER UNIVERSITY</h1>
           </b>
     </td>
</tr>
*/
function profilesecondcontent(){
     document.writeln("<tr>");
     document.writeln("    <td height=370px width=1400px align=center>");
     document.writeln("         <b>");
     document.writeln("              <h1>ILMAN MOCHAMAD ANDRIANSYAH</h1>");
     document.writeln("              <h1>INFORMATION SYSTEM 2</h1>");
     document.writeln("              <h1>INDONESIAN COMPUTER UNIVERSITY</h1>");
     document.writeln("         </b>");
     document.writeln("    </td>");
     document.writeln("</tr>    ");
}
/*PROFILE SECOND FOOTER
<tr class="second-footer">
     <td colspan="3" height="100px" align="center"><b>Copyright &copy by Ilman Mochamad Andriansyah</b></td>
</tr>
*/             
function profilesecondfooter(){
     document.writeln("<tr class=second-footer>");
     document.writeln("    <td colspan=3 height=100px align=center><b>Copyright &copy by Ilman Mochamad Andriansyah</b></td>");
     document.writeln("</tr>");
}
/*********************************************************************************************************************************************************
CONTACT PAGE
*********************************************************************************************************************************************************/
/*CONTACT MAIN HEADER
<tr class="main-header">
     <td colspan="3" height="120px" align="center"><h1><b>GATESPACE</b></h1></td>
</tr>
*/
function contactmainheader(){
     document.writeln("<tr class=main-header>");
     document.writeln("    <td colspan=3 height=120px align=center><h1><b>GATESPACE</b></h1></td>");
     document.writeln("</tr>");
}
/*CONTACT MAIN NAVIGATION
<tr>
     <td colspan="3" height="50px" align="center">
           &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp 
           <a href="../index.html" style="font-family:helvetica;color:white;text-decoration:none;"><b>HOME</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
           <a href="#founder" style="font-family:helvetica;color:white;text-decoration:none;"><b>FOUNDER</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
           <a href="profile.html" style="font-family:helvetica;color:white;text-decoration:none;"><b>PROFILE</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
           <a href="../contact/contact.html" style="font-family:helvetica;color:white;text-decoration:none;"><b>CONTACT</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
           <a href="../product/product.html" style="font-family:helvetica;color:white;text-decoration:none;"><b>PRODUCT</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
     </td>
</tr>
*/
function contactmainnavigation(){
     document.writeln("<tr>");
     document.writeln("    <td colspan=3 height=50px align=center>");
     document.writeln("         &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"); 
     document.writeln("         <a href=../index.html style=font-family:helvetica;color:white;text-decoration:none;><b>HOME</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("         <a href=#founder style=font-family:helvetica;color:white;text-decoration:none;><b>FOUNDER</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("         <a href=../profile/profile.html style=font-family:helvetica;color:white;text-decoration:none;><b>PROFILE</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("         <a href=../contact/contact.html style=font-family:helvetica;color:white;text-decoration:none;><b>CONTACT</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("         <a href=../product/product.html style=font-family:helvetica;color:white;text-decoration:none;><b>PRODUCT</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("    </td>");
     document.writeln("</tr>");
}
/*CONTACT MAIN CONTENT
<tr>
     <td height="370px" width="700px" align="center">
           <!--Menambahkan Audio / Suara
           <audio controls>
                <source src="horse.ogg" type="audio/ogg">
                <source src="horse.mp3" type="audio/mpeg">
                Your browser does not support the audio tag
           </audio>
           -->
           <!--Background Audio / Suara-->
           <b>Audio Background of Death Becomes Fur</b><br><br><br>
           <audio autoplay id="bgsound">
                <source src="http://media.w3.org/2010/07/bunny/04-Death Becomes_Fur.mp4" type="audio/mp4">
                <source src="http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga" type="audio/ogg;codecs=vorbis">
                <p>Your user agent does not support the HTML5 Audio element.</p>
           </audio>
           <button type="button" onclick="document.getElementById ('bgsound').pause();">Stop background sound</button>
     </td>
     <td height="370px" width="700px" align="center">
           <b>
                <h1>CONTACT</h1><br>
                <h3>gatespace@gmail.com</h3>
                <h3>085709045634</h3>
                <h3>@gatespace</h3>
                <h6>9956 W Remington PI Unit A10 Suite 121, Littleton, CO 80128, United States</h6>
           </b>
     </td>
     <td height="370px" width="700px" align="center">
           <b>GATESPACE MARQUEE</b><br><br><br>
           <marquee direction="left">Welcome to Gatespace</marquee><br><br><br>
           <marquee direction="right">Welcome to Gatespace</marquee></font><br><br><br>
           <marquee direction="left" behavior="alternate">Welcome to Gatespace</marquee></font><br><br><br>
           <marquee direction="left" scrolldelay=500>Welcome to Gatespace</marquee>
     </td>
</tr>
*/
function contactmaincontent(){
     document.writeln("<tr>");
     document.writeln("    <td height=370px width=700px align=center>");
     document.writeln("         <!--Menambahkan Audio / Suara");
     document.writeln("         <audio controls>");
     document.writeln("              <source src=horse.ogg type=audio/ogg>");
     document.writeln("              <source src=horse.mp3 type=audio/mpeg>");
     document.writeln("              Your browser does not support the audio tag");
     document.writeln("         </audio>");
     document.writeln("         -->");
     document.writeln("         <!--Background Audio / Suara-->");
     document.writeln("         <b>Audio Background of Death Becomes Fur</b><br><br><br>");
     document.writeln("         <audio autoplay id=bgsound>");
     document.writeln("              <source src=http://media.w3.org/2010/07/bunny/04-Death Becomes_Fur.mp4 type=audio/mp4>");
     document.writeln("              <source src=http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga type=audio/ogg;codecs=vorbis>");
     document.writeln("              <p>Your user agent does not support the HTML5 Audio element.</p>");
     document.writeln("         </audio>");
     document.writeln("         <button type=button onclick=document.getElementById ('bgsound').pause();>Stop background sound</button>");
     document.writeln("    </td>");
     document.writeln("    <td height=370px width=700px align=center>");
     document.writeln("         <b>");
     document.writeln("              <h1>CONTACT</h1><br>");
     document.writeln("              <h3>gatespace@gmail.com</h3>");
     document.writeln("              <h3>085709045634</h3>");
     document.writeln("              <h3>@gatespace</h3>");
     document.writeln("              <h6>9956 W Remington PI Unit A10 Suite 121, Littleton, CO 80128, United States</h6>");
     document.writeln("         </b>");
     document.writeln("    </td>");
     document.writeln("    <td height=370px width=700px align=center>");
     document.writeln("         <b>GATESPACE MARQUEE</b><br><br><br>");
     document.writeln("         <marquee direction=left>Welcome to Gatespace</marquee><br><br><br>");
     document.writeln("         <marquee direction=right>Welcome to Gatespace</marquee></font><br><br><br>");
     document.writeln("         <marquee direction=left behavior=alternate>Welcome to Gatespace</marquee></font><br><br><br>");
     document.writeln("         <marquee direction=left scrolldelay=500>Welcome to Gatespace</marquee>");
     document.writeln("    </td>");
     document.writeln("</tr>");
}
/*CONTACT MAIN FOOTER
<tr class="main-footer">
     <td colspan="3" height="100px" align="center"><b>Copyright &copy by Ilman Mochamad Andriansyah</b></td>
</tr>
*/
function contactmainfooter(){
     document.writeln("<tr class=main-footer>");
     document.writeln("    <td colspan=3 height=100px align=center><b>Copyright &copy by Ilman Mochamad Andriansyah</b></td>");
     document.writeln("</tr>");
}
/*CONTACT SECOND HEADER
<tr class="second-header">
     <td colspan="3" height="120px" align="center"><h1><b>FOUNDER</b></h1></td>
</tr>
*/
function contactsecondheader(){
     document.writeln("<tr class=second-header>");
     document.writeln("    <td colspan=3 height=120px align=center><h1><b>FOUNDER</b></h1></td>");
     document.writeln("</tr>");
}
/*CONTACT SECOND NAVIGATION
<tr>
     <td colspan="3" height="50px" align="center">
           &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
           <a href="#top" style="font-family:helvetica;color:white;text-decoration:none;"><b>GOTO THE TOP</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
     </td>
</tr>
*/
function contactsecondnavigation(){
     document.writeln("<tr>");
     document.writeln("    <td colspan=3 height=50px align=center>");
     document.writeln("         &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("         <a href=#top style=font-family:helvetica;color:white;text-decoration:none;><b>GOTO THE TOP</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("    </td>");
     document.writeln("</tr>");
}
/*CONTACT SECOND CONTENT
<tr>
     <td height="370px" width="1400px" align="center">
           <b>
                <h1>ILMAN MOCHAMAD ANDRIANSYAH</h1>
                <h1>INFORMATION SYSTEM 2</h1>
                <h1>INDONESIAN COMPUTER UNIVERSITY</h1>
           </b>
     </td>
</tr>
*/
function contactsecondcontent(){
     document.writeln("<tr>");
     document.writeln("    <td height=370px width=1400px align=center>");
     document.writeln("         <b>");
     document.writeln("              <h1>ILMAN MOCHAMAD ANDRIANSYAH</h1>");
     document.writeln("              <h1>INFORMATION SYSTEM 2</h1>");
     document.writeln("              <h1>INDONESIAN COMPUTER UNIVERSITY</h1>");
     document.writeln("         </b>");
     document.writeln("    </td>");
     document.writeln("</tr>    ");
}
/*CONTACT SECOND FOOTER
<tr class="second-footer">
     <td colspan="3" height="100px" align="center"><b>Copyright &copy by Ilman Mochamad Andriansyah</b></td>
</tr>
*/             
function contactsecondfooter(){
     document.writeln("<tr class=second-footer>");
     document.writeln("    <td colspan=3 height=100px align=center><b>Copyright &copy by Ilman Mochamad Andriansyah</b></td>");
     document.writeln("</tr>");
}
/*********************************************************************************************************************************************************
PRODUCT PAGE
*********************************************************************************************************************************************************/
/*PRODUCT MAIN HEADER
<tr class="main-header">
     <td colspan="3" height="120px" align="center"><h1><b>GATESPACE</b></h1></td>
</tr>
*/
function productmainheader(){
     document.writeln("<tr class=main-header>");
     document.writeln("    <td colspan=3 height=120px align=center><h1><b>GATESPACE</b></h1></td>");
     document.writeln("</tr>");
}
/*PRODUCT MAIN NAVIGATION
<tr>
     <td colspan="3" height="50px" align="center">
           &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp 
           <a href="../index.html" style="font-family:helvetica;color:white;text-decoration:none;"><b>HOME</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
           <a href="#founder" style="font-family:helvetica;color:white;text-decoration:none;"><b>FOUNDER</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
           <a href="profile.html" style="font-family:helvetica;color:white;text-decoration:none;"><b>PROFILE</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
           <a href="../contact/contact.html" style="font-family:helvetica;color:white;text-decoration:none;"><b>CONTACT</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
           <a href="../product/product.html" style="font-family:helvetica;color:white;text-decoration:none;"><b>PRODUCT</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
     </td>
</tr>
*/
function productmainnavigation(){
     document.writeln("<tr>");
     document.writeln("    <td colspan=3 height=50px align=center>");
     document.writeln("         &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"); 
     document.writeln("         <a href=../index.html style=font-family:helvetica;color:white;text-decoration:none;><b>HOME</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("         <a href=#founder style=font-family:helvetica;color:white;text-decoration:none;><b>FOUNDER</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("         <a href=../profile/profile.html style=font-family:helvetica;color:white;text-decoration:none;><b>PROFILE</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("         <a href=../contact/contact.html style=font-family:helvetica;color:white;text-decoration:none;><b>CONTACT</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("         <a href=../product/product.html style=font-family:helvetica;color:white;text-decoration:none;><b>PRODUCT</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("    </td>");
     document.writeln("</tr>");
}
/*PRODUCT MAIN CONTENT
<tr>
     <td height="370px" width="1400px" align="center">
     <center>
     <a href="battleducks/index.html"><img src="battleducks/battleducks.jpeg" width="150px" height="150px" style="margin-right:2cm" title="Battle Ducks"></a>
     <a href="battlepack/index.html"><img src="battlepack/battlepack.jpeg" width="150px" height="150px" style="margin-right:2cm" title="Battle Pack"></a>
     <a href="bluewaves/index.html"><img src="bluewaves/bluewaves.jpeg" width="150px" height="150px" style="margin-right:2cm" title="Blue Waves"></a>
     <a href="calmpalm/index.html"><img src="calmpalm/calmpalm.jpeg" width="150px" height="150px" style="margin-right:2cm" title="Calm Palm"></a>
     <a href="goldwhite/index.html"><img src="goldwhite/goldwhite.jpeg" width="150px" height="150px" style="margin-right:2cm" title="Gold White"></a>
     <a href="grasshoper/index.html"><img src="grasshoper/grasshoper.jpeg" width="150px" height="150px" style="margin-right:2cm" title="Grass Hoper"></a>
     <a href="greencooling/index.html"><img src="greencooling/greencooling.jpeg" width="150px" height="150px" style="margin-right:2cm" title="Green Cooling"></a>
     <a href="linspeedy/index.html"><img src="linspeedy/linspeedy.jpeg" width="150px" height="150px" style="margin-right:2cm" title="Lin Speedy"></a>
     <a href="smackpull/index.html"><img src="smackpull/smackpull.jpeg" width="150px" height="150px" style="margin-right:2cm" title="Smack Pull"></a>
     <a href="spiderow/index.html"><img src="spiderow/spiderow.jpeg" width="150px" height="150px" style="margin-right:2cm" title="Spider Row"></a>
     </center>
</tr>
*/
function productmaincontent(){
    
     document.writeln("<tr>");
     document.writeln("    <td height=370px width=1400px align=center>");
     document.writeln("    <center>");
     document.writeln("    <a href=battleducks/index.html><img src=battleducks/battleducks.jpeg width=150px height=150px style=margin-right:2cm title=Battle Ducks></a>");
     document.writeln("    <a href=battlepack/index.html><img src=battlepack/battlepack.jpeg width=150px height=150px style=margin-right:2cm title=Battle Pack></a>");
     document.writeln("    <a href=bluewaves/index.html><img src=bluewaves/bluewaves.jpeg width=150px height=150px style=margin-right:2cm title=Blue Waves></a>");
     document.writeln("    <a href=calmpalm/index.html><img src=calmpalm/calmpalm.jpeg width=150px height=150px style=margin-right:2cm title=Calm Palm></a>");
     document.writeln("    <a href=goldwhite/index.html><img src=goldwhite/goldwhite.jpeg width=150px height=150px style=margin-right:2cm title=Gold White></a>");
     document.writeln("    <a href=grasshoper/index.html><img src=grasshoper/grasshoper.jpeg width=150px height=150px style=margin-right:2cm title=Grass Hoper></a>");
     document.writeln("    <a href=greencooling/index.html><img src=greencooling/greencooling.jpeg width=150px height=150px style=margin-right:2cm title=Green Cooling></a>");
     document.writeln("    <a href=linspeedy/index.html><img src=linspeedy/linspeedy.jpeg width=150px height=150px style=margin-right:2cm title=Lin Speedy></a>");
     document.writeln("    <a href=smackpull/index.html><img src=smackpull/smackpull.jpeg width=150px height=150px style=margin-right:2cm title=Smack Pull></a>");
     document.writeln("    <a href=spiderow/index.html><img src=spiderow/spiderow.jpeg width=150px height=150px style=margin-right:2cm title=Spider Row></a>");
     document.writeln("    </center>");
     document.writeln("</tr>");
}
/*PRODUCT MAIN FOOTER
<tr class="main-footer">
     <td colspan="3" height="100px" align="center"><b>Copyright &copy by Ilman Mochamad Andriansyah</b></td>
</tr>
*/
function productmainfooter(){
     document.writeln("<tr class=main-footer>");
     document.writeln("    <td colspan=3 height=100px align=center><b>Copyright &copy by Ilman Mochamad Andriansyah</b></td>");
     document.writeln("</tr>");
}
/*PRODUCT SECOND HEADER
<tr class="second-header">
     <td colspan="3" height="120px" align="center"><h1><b>FOUNDER</b></h1></td>
</tr>
*/
function productsecondheader(){
     document.writeln("<tr class=second-header>");
     document.writeln("    <td colspan=3 height=120px align=center><h1><b>FOUNDER</b></h1></td>");
     document.writeln("</tr>");
}
/*PRODUCT SECOND NAVIGATION
<tr>
     <td colspan="3" height="50px" align="center">
           &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
           <a href="#top" style="font-family:helvetica;color:white;text-decoration:none;"><b>GOTO THE TOP</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
     </td>
</tr>
*/
function productsecondnavigation(){
     document.writeln("<tr>");
     document.writeln("    <td colspan=3 height=50px align=center>");
     document.writeln("         &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("         <a href=#top style=font-family:helvetica;color:white;text-decoration:none;><b>GOTO THE TOP</b></a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp");
     document.writeln("    </td>");
     document.writeln("</tr>");
}
/*PRODUCT SECOND CONTENT
<tr>
     <td height="370px" width="1400px" align="center">
           <b>
                <h1>ILMAN MOCHAMAD ANDRIANSYAH</h1>
                <h1>INFORMATION SYSTEM 2</h1>
                <h1>INDONESIAN COMPUTER UNIVERSITY</h1>
           </b>
     </td>
</tr>
*/
function productsecondcontent(){
     document.writeln("<tr>");
     document.writeln("    <td height=370px width=1400px align=center>");
     document.writeln("         <b>");
     document.writeln("              <h1>ILMAN MOCHAMAD ANDRIANSYAH</h1>");
     document.writeln("              <h1>INFORMATION SYSTEM 2</h1>");
     document.writeln("              <h1>INDONESIAN COMPUTER UNIVERSITY</h1>");
     document.writeln("         </b>");
     document.writeln("    </td>");
     document.writeln("</tr>    ");
}
/*PRODUCT SECOND FOOTER
<tr class="second-footer">
     <td colspan="3" height="100px" align="center"><b>Copyright &copy by Ilman Mochamad Andriansyah</b></td>
</tr>
*/             
function productsecondfooter(){
     document.writeln("<tr class=second-footer>");
     document.writeln("    <td colspan=3 height=100px align=center><b>Copyright &copy by Ilman Mochamad Andriansyah</b></td>");
     document.writeln("</tr>");
}
/*********************************************************************************************************************************************************
DEAL INPUT PAGE
*********************************************************************************************************************************************************/
/*DEAL INPUT
<h2><b>DEAL INPUT<br></b></font>
<form action="deal_submit.php" method="post">
     <hr>
           <table>
                <tr><td>Nama Anda<td>: <input type=text name="nama" size=30>
                <tr><td>Username<td>: <input type=text name="username" size=20>
                <tr><td>Password<td>: <input type=password name="password" size=20>
                <tr><td>E-Mail<td>: <input type=text name ="email" size=30>
                <tr><td>Jenis kelamin<td>: <input type="radio" name "kelamin" value=Pria>pria <input type="radio" name= "kelamin" value=Wanita>wanita
                <tr><td>Hoby <td>: <input type="checkbox" name="musik" value=Musik>musik
                <tr><td><td>: <input type="checkbox" name="jalan" value=Jalan>jalan
                <tr><td><td>: <input type="checkbox" name="baca" value=Baca>baca
                <tr><td>Jurusan <td>: <select size="1" name="jurusan">
                <option>Informatika</option>
                <option>Akuntansi</option>
                <option>Manajemen</option>
                <option>Keuangan</option>
                </select>
                <tr><td>Keterangan<td>: <textarea name="keterangan" cols=40 rows=5></textarea>
           </table>
     <hr>
     <input type=submit value=kirim><input type=reset>
</form>
*/             
function dealinput(){
     document.writeln("<h2><b>DEAL INPUT<br></b></font>");
     document.writeln("<form action=deal_submit.php method=post>");
     document.writeln("    <hr>");
     document.writeln("         <table>");
     document.writeln("              <tr><td>Nama Anda<td>: <input type=text name=nama size=30>");
     document.writeln("              <tr><td>Username<td>: <input type=text name=username size=20>");
     document.writeln("              <tr><td>Password<td>: <input type=password name=password size=20>");
     document.writeln("              <tr><td>E-Mail<td>: <input type=text name =email size=30>");
     document.writeln("              <tr><td>Jenis kelamin<td>: <input type=radio name=kelamin value=Pria>pria <input type=radio name=kelamin value=Wanita>wanita");
     document.writeln("              <tr><td>Hoby <td>: <input type=checkbox name=musik value=Musik>musik");
     document.writeln("              <tr><td><td>: <input type=checkbox name=jalan value=Jalan>jalan");
     document.writeln("              <tr><td><td>: <input type=checkbox name=baca value=Baca>baca");
     document.writeln("              <tr><td>Jurusan <td>: <select size=1 name=jurusan>");
     document.writeln("              <option>Informatika</option>");
     document.writeln("              <option>Akuntansi</option>");
     document.writeln("              <option>Manajemen</option>");
     document.writeln("              <option>Keuangan</option>");
     document.writeln("              </select>");
     document.writeln("              <tr><td>Keterangan<td>: <textarea name=keterangan cols=40 rows=5></textarea>");
     document.writeln("         </table>");
     document.writeln("    <hr>");
     document.writeln("    <input type=submit value=kirim><input type=reset>");
     document.writeln("</form>");    
}