// instructions page 1
// var page1 = [
//   '<p>Your main task is to respond to white arrows (with a black border) that appear on the screen.</p> '+
//   '<p>Press the LEFT ARROW KEY with the right index finger when you see a LEFT ARROW and press the RIGHT ARROW KEY with the right ring finger when you see a RIGHT ARROW. </p>'+
//   '<p>Thus, left arrow = left key and right arrow = right key. </p>'+ '<br>' +
//   '<p>However, on some trials (stop-signal trials) the arrows will turn red after a variable delay. You have to stop your response when this happens. </p>'+
//   '<p>On approximately half of the stop-signal trials, the red stop signal will appear soon and you will notice that it will be easy to stop your response. </p>'+
//   '<p>On the other half of the trials, the red stop signals will appear late and it will become very difficult or even impossible to stop your response.</p>'
// ];
var page1 = [
    '<p style="direction: rtl; text-align: right;">המשימה העיקרית שלך היא להגיב לחצים לבנים (עם מסגרת שחורה) שמופיעים על המסך.</p>' +
    '<p style="direction: rtl; text-align: right;">לחץ על מקש החץ השמאלי עם אצבע המורה הימנית כשאתה רואה חץ שמאלה, ולחץ על מקש החץ הימני עם אצבע הקמיצה הימנית כשאתה רואה חץ ימינה.</p>' +
    '<p style="direction: rtl; text-align: right;">כלומר, חץ שמאלה = מקש שמאל וחץ ימינה = מקש ימין.</p>' + '<br>' +
    '<p style="direction: rtl; text-align: right;">עם זאת, בחלק מהניסיונות (ניסיונות אות-עצירה) החצים יהפכו לאדומים לאחר השהייה משתנה. עליך לעצור את התגובה שלך כשזה קורה.</p>' +
    '<p style="direction: rtl; text-align: right;">בערך במחצית מניסיונות אות-העצירה, אות העצירה האדום יופיע מוקדם ותשים לב שיהיה קל לעצור את התגובה שלך.</p>' +
    '<p style="direction: rtl; text-align: right;">במחצית השנייה של הניסיונות, אותות העצירה האדומים יופיעו מאוחר ויהיה מאוד קשה או אפילו בלתי אפשרי לעצור את התגובה שלך.</p>'
];

// instructions page 2
// Do not forget to adjust the number of blocks
// page2 = [
//   '<p> Nevertheless, it is really important that you do not wait for the stop signal to occur and that you respond as quickly and as accurately as possible to the white arrows. </p>'+
//   '<p> After all, if you start waiting for the red stop signals, then the program will delay their presentation. This will result in long reaction times. </p>'+
//   '<p> We will start with a short practice block in which you will receive immediate feedback. You will no longer receive immediate feedback in the experimental phase. </p>'+
//   '<p> However, at the end of each experimental block, there will be a 15 second break. During this break, we will show you some information about your mean performance in the previous block.</p>' +
//   '<p> The experiment consists of 1 practice block and 4 experimental blocks</p>'
// ];

page2 = [
    '<p style="direction: rtl; text-align: right;">למרות זאת, חשוב מאוד שלא תחכה להופעת אות העצירה ושתגיב מהר ומדויק ככל האפשר לחצים הלבנים.</p>' +
    '<p style="direction: rtl; text-align: right;">אחרי הכל, אם תתחיל לחכות לאותות העצירה האדומים, התוכנית תעכב את הופעתם. זה יגרום לזמני תגובה ארוכים.</p>' +
    '<p style="direction: rtl; text-align: right;">נתחיל עם בלוק אימון קצר שבו תקבל משוב מיידי. בשלב הניסוי עצמו לא תקבל יותר משוב מיידי.</p>' +
    '<p style="direction: rtl; text-align: right;">עם זאת, בסוף כל בלוק ניסוי, תהיה הפסקה של 15 שניות. במהלך הפסקה זו, נציג בפניך מידע על הביצועים הממוצעים שלך בבלוק הקודם.</p>' +
    '<p style="direction: rtl; text-align: right;">הניסוי מורכב מבלוק אימון אחד ו-4 בלוקים ניסויים.</p>'
];

// informed consent text
var informed_consent_text = [
  '<p> Type your informed consent text in the text_variables.js file... </p>'
];

// trial by trial feedback messages
correct_msg = '<p> correct response </p>'
incorrect_msg = '<p> incorrect response </p>'
too_slow_msg = '<p> too slow </p>'
too_fast_msg = '<p> too fast </p>'
correct_stop_msg = '<p> correct stop </p>'
incorrect_stop_msg = '<p> remember: try to stop </p>'

// block feedback
no_signal_header = "<p><b>GO TRIALS: </b></p>"
avg_rt_msg = "<p>Average response time = %d milliseconds</p>"
prop_miss_msg = "<p>Proportion missed go = %.2f (should be 0)</p>"
stop_signal_header = "<p><b>STOP-SIGNAL TRIALS: </b></p>"
prop_corr_msg = "<p>Proportion correct stops = %.2f (should be close to 0.5)</p>" + "<br>"
next_block_msg = "<p>You can take a short break, the next block starts in <span id='timer'>15</span></p>"
final_block_msg = "<p>Press space to continue...</p>" // after the final block they don't need a break

// other
var label_previous_button = 'Previous';
var label_next_button = 'Next';
var label_consent_button = 'I agree';
var full_screen_message = '<p>The experiment will switch to fullscreen mode when you push the button below. </p>';
var welcome_message = ['<p>Welcome to the experiment.</p>' + '<p>Press "Next" to begin.</p>'];
var not_supported_message = ['<p>This experiment requires the Chrome or Firefox webbrowser.</p>'];
var subjID_instructions = "Enter your participant ID."
var age_instructions = "Enter your age."
var gender_instructions = "Choose your gender."
var gender_options = ['Female','Male', 'Other', 'Prefer not to say']
var text_at_start_block = '<p>Press space to begin.</p>'
var get_ready_message = '<p>Get ready...</p>'
var fixation_text = '<div style="font-size:60px;">TEST</div>'
var end_message = "<p>Thank you for your participation.</p>" +
  "<p>Press space to finalize the experiment.</p>"
