$(document).ready(function () {
    $('#3,#4,#5,#6,#7,#8,#9,#10').css('display', 'none');
    console.log("page loaded");
    $('.calc2').click(function () {
        $('#3,#4,#5,#6,#7,#8,#9,#10').css('display', 'none');
        $('#2').css('display', 'flex');
    });
    $('.calc3').click(function () {
        $('#2,#4,#5,#6,#7,#8,#9,#10').css('display', 'none');
        $('#3').css('display', "flex");
    });
    $('.calc4').click(function () {
        $('#2,#3,#5,#6,#7,#8,#9,#10').css('display', 'none');
        $('#4').css('display', 'flex');
    });
    $('.calc5').click(function () {
        $('#2,#3,#4,#6,#7,#8,#9,#10').css('display', 'none');
        $('#5').css('display', 'flex');
    });
    $('.calc6').click(function () {
        $('#2,#3,#4,#5,#7,#8,#9,#10').css('display', 'none');
        $('#6').css('display', 'flex');
    });
    $('.calc7').click(function () {
        $('#2,#3,#4,#5,#6,#8,#9,#10').css('display', 'none');
        $('#7').css('display', 'flex');
    });
    $('.calc8').click(function () {
        $('#2,#3,#4,#5,#6,#7,#9,#10').css('display', 'none');
        $('#8').css('display', 'flex');
    });
    $('.calc9').click(function () {
        $('#2,#3,#4,#5,#6,#7,#8,#10').css('display', 'none');
        $('#9').css('display', 'flex');
    });
    $('.calc10').click(function () {
        $('#2,#3,#4,#5,#6,#7,#8,#9').css('display', 'none');
        $('#10').css('display', 'flex');
    });

    //calculator logic
   

    /*Bodyfat starts*/
    var bfat_mode = "metric";

    $("#bfat_radio_imperial").click(function () {
        //swal("ghhgh");
        $("#bfat_height_disp_inch").css("display", "inline");

        $("#bfat_height_disp_feet").css("display", "inline");

        $("#bfat_weight_disp_lbs").css("display", "inline");

        $("#bfat_waist_inch").css("display", "inline");

        $("#bfat_hip_inch").css("display", "inline");

        $("#bfat_neck_inch").css("display", "inline");

        $("#bfat_weight_disp_kg").css("display", "none");

        $("#bfat_height_disp_cms").css("display", "none");

        $("#bfat_waist_cms").css('display', 'none');

        $("#bfat_hip_cms").css('display', 'none');

        $("#bfat_neck_cms").css('display', 'none');
        bfat_mode = "imp";


        //swal("ft clicked");
        //gender="male";
    });


    $("#bfat_radio_metric").click(function () {

        //swal("hjhjh");
        bfat_mode = "metric";
        $("#bfat_height_disp_inch").css("display", "none");

        $("#bfat_height_disp_feet").css("display", "none");
        $("#bfat_weight_disp_kg").css("display", "inline");
        $("#bfat_waist_cms").css('display', 'inline');
        $("#bfat_neck_cms").css('display', 'inline');

        $("#bfat_hip_cms").css('display', 'inline');

        $("#bfat_height_disp_cms").css("display", "inline");

        $("#bfat_weight_disp_lbs").css("display", "none");

        $("#bfat_waist_inch").css("display", "none");

        $("#bfat_hip_inch").css("display", "none");
        $("#bfat_neck_inch").css("display", "none");



    });


    $("#heart_inner_button_res").click(function () {

        //swal("hjhjh");
        $("#heart_age_input").val("");
        $("#heart_hr_input").val("");



    });


    $("#bfat_inner_button_cal").click(function () {




        var gen = $('[name=bfat_radio_gender]:checked').val();

        console.log("female " + gen);



        var age = $('#bfat_age_input').val();
        var tru = 0;
        if (!age || age > 100 || age < 1)
            swal("please enter the proper age");
        else
            tru = tru + 1;

        var height = $('#bfat_height_disp_cms').val();
        var ft = $('#bfat_height_disp_feet').val();
        var weight = $('#bfat_weight_disp_kg').val();
        var lb = $('#bfat_weight_disp_lbs').val();
        var neck = $('#bfat_neck_cms').val();
        var nin = $('#bfat_neck_inch').val();
        var waist = $('#bfat_waist_cms').val();
        var win = $('#bfat_waist_inch').val();
        var hip = $('#bfat_hip_cms').val();
        var hin = $('#bfat_hip_inch').val();
        if (bfat_mode != 'imp') {
            if (!height || height > 300 || height < 30)
                swal("please enter the height between 30cm and 300cm");
            else
                tru = tru + 1;
            if (!weight || weight > 500 || weight < 10)
                swal("please enter the Weight between 10kg and 500kg");
            else
                tru = tru + 1;

            if (!neck || neck > 60 || neck < 15)
                swal("please enter the neck circumfernce between 15cm and 60cm");
            else
                tru = tru + 1;
            if (!waist || waist > 150 || waist < 20)
                swal("please enter the waist circumfernce between 20cm and 150cm");
            else
                tru = tru + 1;
            if (!hip || hip > 150 || hip < 20)
                swal("please enter the hip circumfernce between 20cm and 150cm");
            else
                tru = tru + 1;
        }
        else {
            if (!ft || ft > 12 || ft < 1)
                swal("please enter the height between 1ft and 12ft");
            else {
                var ins = 0;
                ins = $('#bfat_height_disp_inch').val();
                height = ft * 30.5 + ins * 2.45;
                tru = tru + 1;
            }

            if (!lb || lb > 1000 || lb < 20)
                swal("please enter the Weight between 20 lbs and 1000 lbs");
            else {
                weight = lb * 0.453592;
                tru = tru + 1;
            }

            if (!nin || nin > 24 || nin < 0)
                swal("please enter the neck circumfernce between 1 inch and 24 inch");
            else {
                neck = nin * 2.45;
                tru = tru + 1;
            }
            if (!win || win > 60 || win < 0)
                swal("please enter the waist circumfernce between 1 inch and 60 inch");
            else {
                waist = win * 2.45;
                tru = tru + 1;
            }
            if (!hin || hin > 60 || hin < 0)
                swal("please enter the hip circumfernce between 1 inch and 60 inch");
            else {
                hip = hin * 2.45;
                tru = tru + 1;
            }

        }



        if (tru >= 5) {
            var bfat;
            if (gen == 'male') {
                console.log("male" + gen);
                var w = parseInt(waist);
                var n = parseInt(neck);
                var h = parseInt(hip);
                bfat = (495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(height))) - 450;
                //bfat=w-h;
            }
            else {
                console.log("female" + gen);
                var w = parseInt(waist);
                var n = parseInt(neck);
                var h = parseInt(hip);
                bfat = (495 / (1.29579 - 0.35004 * Math.log10(w + h - n) + 0.22100 * Math.log10(height))) - 450;;
                //alert ("dfg");
            }

            if (bfat < 1)
                bfat = 1;
            $("#bfat_res_disp").val("Your BodyFat% is " + bfat.toFixed(2));
            //alert("you clicked "+bfat);
        }
    });

    /*Bodyfat ends*/

    /*Bmr starts*/
    var bmr_mode = "metric";

    $("#bmr_radio_imperial").click(function () {
        //swal("ghhgh");
        $("#bmr_height_disp_inch").css("display", "inline");

        $("#bmr_height_disp_feet").css("display", "inline");

        $("#bmr_weight_disp_lbs").css("display", "inline");

        $("#bmr_weight_disp_kg").css("display", "none");

        $("#bmr_height_disp_cms").css("display", "none");
        bmr_mode = "imp";


        //swal("ft clicked");
        //gender="male";
    });


    $("#bmr_radio_metric").click(function () {

        //swal("hjhjh");
        bmr_mode = "metric";
        $("#bmr_height_disp_inch").css("display", "none");

        $("#bmr_height_disp_feet").css("display", "none");
        $("#bmr_weight_disp_kg").css("display", "inline");

        $("#bmr_height_disp_cms").css("display", "inline");

        $("#bmr_weight_disp_lbs").css("display", "none");



    });

    $("#bmr_inner_button_cal").click(function () {

        var age = $("#bmr_age_input").val();



        var gen = $('[name=radio_gender]').val();

        var tru = 0;
        if (!age || age > 100 || age < 1)
            swal("please enter the proper age");
        else
            tru = tru + 1;

        var height = $("#bmr_height_disp_cms").val();
        var ft = $("#bmr_height_disp_feet").val();
        var weight = $("#bmr_weight_disp_kg").val();
        var lb = $("#bmr_weight_disp_lbs").val();
        if (bmr_mode != 'imp') {
            if (!height || height > 300 || height < 30)
                swal("please enter the height between 30cm and 300cm");
            else
                tru = tru + 1;
            if (!weight || weight > 500 || weight < 10)
                swal("please enter the Weight between 10kg and 50kg");
            else
                tru = tru + 1;
        }
        else {
            if (!ft || ft > 12 || ft < 1)
                swal("please enter the height between 1ft and 12ft");
            else {
                var ins = 0;
                ins = $("#bmr_height_disp_inch").val();
                height = ft * 30.5 + ins * 2.45;
                tru = tru + 1;
            }

            if (!lb || lb > 1000 || lb < 20)
                swal("please enter the Weight between 20 lbs and 1000 lbs");
            else {
                weight = lb * 0.453592;
                tru = tru + 1;
            }

        }



        if (tru == 3) {
            var BMR = 0;
            if (gen == 'male') {
                BMR = 66.5 + (13.75 * parseInt(weight)) + (5.003 * parseInt(height)) - (6.755 * parseInt(age));
            }
            else {
                BMR = 655.1 + (9.563 * parseInt(weight)) + (1.850 * parseInt(height)) - (4.676 * parseInt(age));
            }
            //swal("you clillcked "+BMR);
            console.log("hey " + BMR);
            $("#bmr_res_disp").val("Your Bmr is " + BMR.toFixed(2));

        }

    });
    /*bmr ends*/

    /*heart rate cal starts*/
    $("#heart_inner_button_cal").click(function () {
        var age_hr = $("#heart_age_input").val();
        var r_hr = $("#heart_hr_input").val();
        if(age_hr == '' || r_hr == '') {
            return swal('Enter details to proceed !');
        }

        age_hr = parseInt($("#heart_age_input").val());
        r_hr = parseInt($("#heart_hr_input").val());

        if (age_hr < 5 || age_hr > 100 || r_hr > 200 || r_hr < 40)
            swal("Invalid Details");
        else {
            var max_hr = 220 - age_hr;
            var hrr = max_hr - r_hr;
            var a = (hrr * 0.5);
            a = a + r_hr;
            var b = (hrr * 0.85);
            b = b + r_hr;
            var final = "";
            final = final + "Min: " + Math.floor(a) + " Max: " + Math.floor(b) + "\nMax heart rate: " + max_hr;
            document.getElementById("heart_res_disp").value = final;
        }
    });
    /*heart rate cal ends*/

    /*bmi starts*/
    var bmi_mode = "metric";

    $("#bmi_radio_imperial").click(function () {
        //swal("ghhgh");
        $("#bmi_height_disp_inch").css("display", "inline");

        $("#bmi_height_disp_feet").css("display", "inline");

        $("#bmi_weight_disp_lbs").css("display", "inline");

        $("#bmi_weight_disp_kg").css("display", "none");

        $("#bmi_height_disp_cms").css("display", "none");
        bmi_mode = "imp";


        //swal("ft clicked");
        //gender="male";
    });


    $("#bmi_radio_metric").click(function () {

        //swal("hjhjh");
        bmi_mode = "metric";
        $("#bmi_height_disp_inch").css("display", "none");

        $("#bmi_height_disp_feet").css("display", "none");
        $("#bmi_weight_disp_kg").css("display", "inline");

        $("#bmi_height_disp_cms").css("display", "inline");

        $("#bmi_weight_disp_lbs").css("display", "none");




        //swal("ft clicked");
        //gender="male";
    });

    $("#bmi_inner_button_cal").click(function () {

        var bmi_age = $("#bmi_age_input").val();

        var bmi_ht_in = 0;

        var bmi_ht_cm = $("#bmi_height_disp_cms").val();
        var bmi_ht_ft = $("#bmi_height_disp_feet").val();
        bmi_ht_in = $("#bmi_height_disp_inch").val();
        var bmi_wt_lbs = $("#bmi_weight_disp_lbs").val();
        var bmi_wt_kg = $("#bmi_weight_disp_kg").val();

        console.log("height inch" + bmi_ht_in);
        console.log("height feet" + bmi_ht_ft);
        console.log("height cm" + bmi_ht_cm);
        console.log("weight kg" + bmi_wt_kg);
        console.log("weight lbs" + bmi_wt_lbs);




        var bmi, tot_ht, flag = 0;;

        if (bmi_mode == "imp") {


            if (bmi_ht_ft > 7 || bmi_ht_ft < 4 || bmi_ht_in > 11) {
                swal("Enter valid height");
                flag++;
            }
            if (bmi_wt_lbs < 4 || bmi_wt_lbs > 551) {
                swal("Enter valid weight");
                flag++;
            }
            if (flag == 0) {
                var h1 = parseInt(bmi_ht_in);
                var h2 = parseInt(bmi_ht_ft);
                tot_ht = h1 + (h2 * 12);
                bmi = 703 * (bmi_wt_lbs / (tot_ht * tot_ht));
                console.log("height total " + tot_ht);

                /*document.getElementById("bmi_res_disp").value=bmi.toPrecision(4); */

                $("#bmi_res_disp").val("Your Bmi is " + bmi.toPrecision(4));
            }




        }

        else {
            var flag = 0;
            if (bmi_ht_cm < 30 || bmi_ht_cm > 245) {
                swal("Enter valid height");
                flag++;
            }

            if (bmi_wt_kg > 250 || bmi_wt_kg < 5) {
                swal("enter valid weight");
                flag++;
            }



            if (flag == 0) {

                tot_ht = bmi_ht_cm / 100;
                bmi = (bmi_wt_kg / (tot_ht * tot_ht));
                $("#bmi_res_disp").val("Your Bmi is " + bmi.toPrecision(4));
            }

        }
    });

    $("#bmi_res_but").click(function () {
        bmi_age = '';
        bmi_ht_cm = '';
        bmi_ht_ft = '';
        bmi_ht_in = '';
        bmi_wt_lbs = '';
        bmi_wt_kg = '';
    });
    /*bmi ends*/

    /*Waist 2 hip starts*/
    var w2h_mode = "metric";

    $("#w2h_radio_imperial").click(function () {
        //swal("ghhgh");

        $("#waist_cms").css("display", "none");

        $("#hip_cms").css("display", "none");

        $("#waist_inch").css("display", "inline");

        $("#hip_inch").css("display", "inline");

        w2h_mode = "imp";


        //swal("ft clicked");
        //gender="male";
    });


    $("#w2h_radio_metric").click(function () {

        //swal("hjhjh");
        w2h_mode = "metric";
        $("#waist_inch").css("display", "none");

        $("#hip_inch").css("display", "none");
        $("#waist_cms").css("display", "inline");

        $("#hip_cms").css("display", "inline");




        //swal("ft clicked");
        //gender="male";
    });


    $("#w2h_inner_button_cal").click(function () {

        if (w2h_mode == "imp") {
            var waist = $("#waist_inch").val();
            var hip = $("#hip_inch").val();
            if(waist == '' || hip == '') {return swal('enter all fileds to proceed');}
            var r = waist / hip;
            console.log(r);
            $("#w2h_disp").val("W 2 H ratio " + r.toFixed(2));

        }
        else {
            var waist = $("#waist_cms").val();
            var hip = $("#hip_cms").val();
            if(waist == '' || hip == '') {return swal('enter all fileds to proceed');}
            var r = waist / hip;
            console.log(r);
            $("#w2h_disp").val("W 2 H ratio " + r.toFixed(2));


        }

    });

    $("#bmi_res_but").click(function () {
        bmi_age = '';
        bmi_ht_cm = '';
        bmi_ht_ft = '';
        bmi_ht_in = '';
        bmi_wt_lbs = '';
        bmi_wt_kg = '';
    });
    /*waist 2 hip ends*/

    /*vo2 starts*/
    var vo2_mode = "metric";

    $("#vo2_radio_imperial").click(function () {
        //swal("ghhgh");

        $("#vo2_weight_disp_lbs").css("display", "inline");

        $("#vo2_weight_disp_kg").css("display", "none");

        vo2_mode = "imp";


        //swal("ft clicked");
        //gender="male";
    });


    $("#vo2_radio_metric").click(function () {

        //swal("hjhjh");
        bmi_mode = "metric";
        $("#vo2_weight_disp_kg").css("display", "inline");

        $("#vo2_weight_disp_lbs").css("display", "none");




        //swal("ft clicked");
        //gender="male";
    });

    $("#vo2_inner_button_cal").click(function () {

        //swal("hjhjh");
        var a;


        var age = $("#vo2_age").val();
        var weight;
        if (vo2_mode != "imp") {
            weight = $("#vo2_weight_disp_kg").val()
            weight = weight * 2.20462;
        }
        else {
            weight = $("#vo2_weight_disp_lbs").val()
        }

        var walk_time = $("#vo2_walk_time").val();
        var heart_rate = parseInt($("#vo2_heart_rate").val());
        var gen = $('input[name=vo2_radio_gender]:checked').val();


        if (weight == '' || walk_time == '' || heart_rate == '' || age == '') {
            swal("please fill all the fields");
        }
        else {
            if (gen == 'male')
                var vo2_max_cal = 132.853 - (0.0769 * weight) - (0.3877 * age) + (6.315) - (3.2649 * walk_time / 60) - (0.1565 * heart_rate);
            else
                var vo2_max_cal = 132.853 - (0.0769 * weight) - (0.3877 * age) - (3.2649 * walk_time / 60) - (0.1565 * heart_rate);
            console.log("weight " + weight);
            console.log("walk time " + walk_time);
            console.log("heart rate " + heart_rate);
            console.log("age " + age);
            console.log("gen " + gen);
            $("#vo2_disp").val("Your VO2 is " + vo2_max_cal.toFixed(2));
        }

    });

    $("#bmi_res_but").click(function () {
        bmi_age = '';
        bmi_ht_cm = '';
        bmi_ht_ft = '';
        bmi_ht_in = '';
        bmi_wt_lbs = '';
        bmi_wt_kg = '';
    });
    /*vo2 ends*/

    /*Ideal body starts*/
    var ideal_mode = "metric";

    $("#ideal_radio_imperial").click(function () {
        //swal("ghhgh");
        $("#ideal_height_disp_inch").css("display", "inline");

        $("#ideal_height_disp_feet").css("display", "inline");

        $("#ideal_weight_disp_lbs").css("display", "inline");

        $("#ideal_weight_disp_kg").css("display", "none");

        $("#ideal_height_disp_cms").css("display", "none");
        ideal_mode = "imp";


        //swal("ft clicked");
        //gender="male";
    });


    $("#ideal_radio_metric").click(function () {

        //swal("hjhjh");
        ideal_mode = "metric";
        $("#ideal_height_disp_inch").css("display", "none");

        $("#ideal_height_disp_feet").css("display", "none");
        $("#ideal_weight_disp_kg").css("display", "inline");

        $("#ideal_height_disp_cms").css("display", "inline");

        $("#ideal_weight_disp_lbs").css("display", "none");




        //swal("ft clicked");
        //gender="male";
    });

    $("#ideal_inner_button_cal").click(function () {

        //swal("hjhjh");
        var ideal_ht, ideal_weight, i_dif, ideal_min, ideal_max;


        var ideal_ht_in = 0;

        var ideal_ht_cm = $("#ideal_height_disp_cms").val();
        var ideal_ht_ft = $("#ideal_height_disp_feet").val();
        ideal_ht_in = parseInt($("#ideal_height_disp_inch").val());
        var gen = $('input[name=ideal_radio_gender]:checked').val();

        console.log("height inch" + ideal_ht_in);
        console.log("height feet" + ideal_ht_ft);
        console.log("height cm" + ideal_ht_cm);




        var bmi, tot_ht, flag = 0;;

        if (ideal_mode == "imp") {
            if (ideal_ht_ft == '') {
                swal("please enter valid heightt");
            }
            else {

                if (ideal_ht_ft >= 5) {
                    i_dif = ideal_ht_ft - 5;
                    i_dif = i_dif * 12 + ideal_ht_in;
                    if (gen == 'male') {
                        ideal_weight = 50 + i_dif * 2.3;
                    }
                    else {
                        ideal_weight = 45.5 + i_dif * 2.3;

                    }

                    ideal_min = ideal_weight - ideal_weight * (5 / 100);
                    ideal_max = ideal_weight + ideal_weight * (5 / 100);

                }
                else {
                    if (gen == 'male') {
                        ideal_min = 47.5;
                        ideal_max = 52.5;
                    }
                    else {
                        ideal_min = 43.25;
                        ideal_max = 47.75;
                    }
                }
                ideal_min = ideal_min * 2.20;
                ideal_max = ideal_max * 2.20;

                $("#ideal_disp").val("Min " + Math.floor(ideal_min) + "lb Max " + Math.floor(ideal_max) + "lb");

            }
        }
        else {
            if (ideal_ht_cm == '') {
                swal("please enter the valid height");
            }
            else {
                if (ideal_ht_cm >= 150) {
                    i_dif = ideal_ht_cm - 150;
                    if (gen == 'male') {
                        ideal_weight = 50 + i_dif * 0.9;
                    }
                    else {
                        ideal_weight = 45.5 + i_dif * 0.9;
                    }
                    ideal_min = ideal_weight - ideal_weight * (5 / 100);
                    ideal_max = ideal_weight + ideal_weight * (5 / 100);
                }
                else {
                    if (gen == 'male') {
                        ideal_min = 47.5;
                        ideal_max = 52.5;
                    }
                    else {
                        ideal_min = 43.25;
                        ideal_max = 47.75;
                    }
                }



            }
            $("#ideal_disp").val("Min " + Math.floor(ideal_min) + "kg  Max " + Math.floor(ideal_max) + "kg");
        }

    });

    $("#bmi_res_but").click(function () {
        bmi_age = '';
        bmi_ht_cm = '';
        bmi_ht_ft = '';
        bmi_ht_in = '';
        bmi_wt_lbs = '';
        bmi_wt_kg = '';
    });
    /*Ideal body ends*/


    /*leanbody starts*/
    var lean_mode = "metric";

    $("#lean_radio_imperial").click(function () {
        //swal("ghhgh");

        $("#lean_weight_disp_lbs").css("display", "inline");

        $("#lean_weight_disp_kg").css("display", "none");

        lean_mode = "imp";


        //swal("ft clicked");
        //gender="male";
    });


    $("#lean_radio_metric").click(function () {

        //swal("hjhjh");
        lean_mode = "metric";
        $("#lean_weight_disp_kg").css("display", "inline");

        $("#lean_weight_disp_lbs").css("display", "none");




        //swal("ft clicked");
        //gender="male";
    });




    $("#lean_inner_button_cal").click(function () {

        //swal("hjhjh");
        var a;


        var weight;


        var bodyfat = $("#lean_bodyfat").val();

        if (weight == '' || bodyfat == '') {
            swal("please fill all the fields");
        }
        else {
            if (lean_mode != "imp") {
                weight = $("#lean_weight_disp_kg").val()

            }
            else {
                weight = $("#lean_weight_disp_lbs").val()
            }

            console.log("hello " + bodyfat);
            var lean_tot = weight - (weight * bodyfat / 100);
            console.log("hello " + lean_tot);
            $("#lean_disp").val("Your Lean Body Mass is " + lean_tot.toFixed(1));

        }


    });

    $("#bmi_res_but").click(function () {
        bmi_age = '';
        bmi_ht_cm = '';
        bmi_ht_ft = '';
        bmi_ht_in = '';
        bmi_wt_lbs = '';
        bmi_wt_kg = '';
    });
    /*leanbody ends*/
    //calculator logic ends



});