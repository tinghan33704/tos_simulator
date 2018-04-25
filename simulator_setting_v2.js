/*  Last modified : 2018/4/19 19:56  */

/*
    Stone object : {
        attr        [ 0:N/A   1:water   2:fire   3:earth   4:light   5:dark   6:heart ],
        enchanted   [ 0:no   1:yes ],
        sp          [ 0:no   1:frozen   2:weathered   3:locked   4:petrified   5:undissolvable],
        undissolved [ 0:no   1:yes ],
        petrified   [ 1:layer-1   2:layer-2   3:layer-3],
        race        [ 0:N/A   1:god   2:beast   3:human   4:elf   5:dragon   6:demon ]
    }
*/
function Stone(attr, enchanted, sp, undissolved, petrified, race)
{
    this.attr=attr;
    this.enchanted=enchanted;
    this.sp=sp;
    this.undissolved=undissolved;
    this.petrified=petrified;
    this.race=race;
}

var stone=[];
var board=[];

/*
	-- Picture Source List --
	0       : empty
	1-6     : normal stone
	7-12    : enchanted stone
	13-18   : frozen stone
	19-24   : frozen enchanted stone
	25-30   : weathered stone
	31-36   : weathered enchanted stone
	37-42   : locked stone
	43      : undissolvable stone
	44-46   : petrified stone
	
*/
var stone_src=[    './img/stone_n.png',
				   './img/stone_w.png', './img/stone_f.png', './img/stone_e.png', './img/stone_l.png', './img/stone_d.png', './img/stone_h.png',
				   './img/stone_w_en.png', './img/stone_f_en.png', './img/stone_e_en.png', './img/stone_l_en.png', './img/stone_d_en.png', './img/stone_h_en.png',
				   './img/stone_w_fr.png', './img/stone_f_fr.png', './img/stone_e_fr.png', './img/stone_l_fr.png', './img/stone_d_fr.png', './img/stone_h_fr.png',
				   './img/stone_w_en_fr.png', './img/stone_f_en_fr.png', './img/stone_e_en_fr.png', './img/stone_l_en_fr.png', './img/stone_d_en_fr.png', './img/stone_h_en_fr.png',
				   './img/stone_w_wt.png', './img/stone_f_wt.png', './img/stone_e_wt.png', './img/stone_l_wt.png', './img/stone_d_wt.png', './img/stone_h_wt.png',
				   './img/stone_w_en_wt.png', './img/stone_f_en_wt.png', './img/stone_e_en_wt.png', './img/stone_l_en_wt.png', './img/stone_d_en_wt.png', './img/stone_h_en_wt.png',
				   './img/stone_w_lk.png', './img/stone_f_lk.png', './img/stone_e_lk.png', './img/stone_l_lk.png', './img/stone_d_lk.png', './img/stone_h_lk.png',
				   './img/frozen.png', './img/petrified_1.png', './img/petrified_2.png', './img/petrified_3.png',
                   
				   /* god rune */
				   './img/stone_w_g.png', './img/stone_f_g.png', './img/stone_e_g.png', './img/stone_l_g.png', './img/stone_d_g.png', './img/stone_h_g.png',
				   './img/stone_w_en_g.png', './img/stone_f_en_g.png', './img/stone_e_en_g.png', './img/stone_l_en_g.png', './img/stone_d_en_g.png', './img/stone_h_en_g.png',
				   './img/stone_w_g.png', './img/stone_f_g.png', './img/stone_e_g.png', './img/stone_l_g.png', './img/stone_d_g.png', './img/stone_h_g.png',
				   './img/stone_w_en_g.png', './img/stone_f_en_g.png', './img/stone_e_en_g.png', './img/stone_l_en_g.png', './img/stone_d_en_g.png', './img/stone_h_en_g.png',
				   './img/stone_w_g.png', './img/stone_f_g.png', './img/stone_e_g.png', './img/stone_l_g.png', './img/stone_d_g.png', './img/stone_h_g.png',
				   './img/stone_w_en_g.png', './img/stone_f_en_g.png', './img/stone_e_en_g.png', './img/stone_l_en_g.png', './img/stone_d_en_g.png', './img/stone_h_en_g.png',
				   './img/stone_w_g.png', './img/stone_f_g.png', './img/stone_e_g.png', './img/stone_l_g.png', './img/stone_d_g.png', './img/stone_h_g.png',
				   './img/frozen.png', './img/petrified_1.png', './img/petrified_2.png', './img/petrified_3.png',
                   
				   /* beast rune */
				   './img/stone_w_b.png', './img/stone_f_b.png', './img/stone_e_b.png', './img/stone_l_b.png', './img/stone_d_b.png', './img/stone_h_b.png',
				   './img/stone_w_en_b.png', './img/stone_f_en_b.png', './img/stone_e_en_b.png', './img/stone_l_en_b.png', './img/stone_d_en_b.png', './img/stone_h_en_b.png',
				   './img/stone_w_b.png', './img/stone_f_b.png', './img/stone_e_b.png', './img/stone_l_b.png', './img/stone_d_b.png', './img/stone_h_b.png',
				   './img/stone_w_en_b.png', './img/stone_f_en_b.png', './img/stone_e_en_b.png', './img/stone_l_en_b.png', './img/stone_d_en_b.png', './img/stone_h_en_b.png',
				   './img/stone_w_b.png', './img/stone_f_b.png', './img/stone_e_b.png', './img/stone_l_b.png', './img/stone_d_b.png', './img/stone_h_b.png',
				   './img/stone_w_en_b.png', './img/stone_f_en_b.png', './img/stone_e_en_b.png', './img/stone_l_en_b.png', './img/stone_d_en_b.png', './img/stone_h_en_b.png',
				   './img/stone_w_b.png', './img/stone_f_b.png', './img/stone_e_b.png', './img/stone_l_b.png', './img/stone_d_b.png', './img/stone_h_b.png',
				   './img/frozen.png', './img/petrified_1.png', './img/petrified_2.png', './img/petrified_3.png',
                   
				   /* human rune */
                   './img/stone_w_h.png', './img/stone_f_h.png', './img/stone_e_h.png', './img/stone_l_h.png', './img/stone_d_h.png', './img/stone_h_h.png',
				   './img/stone_w_en_h.png', './img/stone_f_en_h.png', './img/stone_e_en_h.png', './img/stone_l_en_h.png', './img/stone_d_en_h.png', './img/stone_h_en_h.png',
				   './img/stone_w_h.png', './img/stone_f_h.png', './img/stone_e_h.png', './img/stone_l_h.png', './img/stone_d_h.png', './img/stone_h_h.png',
				   './img/stone_w_en_h.png', './img/stone_f_en_h.png', './img/stone_e_en_h.png', './img/stone_l_en_h.png', './img/stone_d_en_h.png', './img/stone_h_en_h.png',
				   './img/stone_w_h.png', './img/stone_f_h.png', './img/stone_e_h.png', './img/stone_l_h.png', './img/stone_d_h.png', './img/stone_h_h.png',
				   './img/stone_w_en_h.png', './img/stone_f_en_h.png', './img/stone_e_en_h.png', './img/stone_l_en_h.png', './img/stone_d_en_h.png', './img/stone_h_en_h.png',
				   './img/stone_w_h.png', './img/stone_f_h.png', './img/stone_e_h.png', './img/stone_l_h.png', './img/stone_d_h.png', './img/stone_h_h.png',
				   './img/frozen.png', './img/petrified_1.png', './img/petrified_2.png', './img/petrified_3.png',
                   
				   /* elf rune */
                   './img/stone_w_e.png', './img/stone_f_e.png', './img/stone_e_e.png', './img/stone_l_e.png', './img/stone_d_e.png', './img/stone_h_e.png',
				   './img/stone_w_en_e.png', './img/stone_f_en_e.png', './img/stone_e_en_e.png', './img/stone_l_en_e.png', './img/stone_d_en_e.png', './img/stone_h_en_e.png',
				   './img/stone_w_e.png', './img/stone_f_e.png', './img/stone_e_e.png', './img/stone_l_e.png', './img/stone_d_e.png', './img/stone_h_e.png',
				   './img/stone_w_en_e.png', './img/stone_f_en_e.png', './img/stone_e_en_e.png', './img/stone_l_en_e.png', './img/stone_d_en_e.png', './img/stone_h_en_e.png',
				   './img/stone_w_e.png', './img/stone_f_e.png', './img/stone_e_e.png', './img/stone_l_e.png', './img/stone_d_e.png', './img/stone_h_e.png',
				   './img/stone_w_en_e.png', './img/stone_f_en_e.png', './img/stone_e_en_e.png', './img/stone_l_en_e.png', './img/stone_d_en_e.png', './img/stone_h_en_e.png',
				   './img/stone_w_e.png', './img/stone_f_e.png', './img/stone_e_e.png', './img/stone_l_e.png', './img/stone_d_e.png', './img/stone_h_e.png',
				   './img/frozen.png', './img/petrified_1.png', './img/petrified_2.png', './img/petrified_3.png',
                   
				   /* dragon rune */
                   './img/stone_w_dr.png', './img/stone_f_dr.png', './img/stone_e_dr.png', './img/stone_l_dr.png', './img/stone_d_dr.png', './img/stone_h_dr.png',
				   './img/stone_w_en_dr.png', './img/stone_f_en_dr.png', './img/stone_e_en_dr.png', './img/stone_l_en_dr.png', './img/stone_d_en_dr.png', './img/stone_h_en_dr.png',
				   './img/stone_w_dr.png', './img/stone_f_dr.png', './img/stone_e_dr.png', './img/stone_l_dr.png', './img/stone_d_dr.png', './img/stone_h_dr.png',
				   './img/stone_w_en_dr.png', './img/stone_f_en_dr.png', './img/stone_e_en_dr.png', './img/stone_l_en_dr.png', './img/stone_d_en_dr.png', './img/stone_h_en_dr.png',
				   './img/stone_w_dr.png', './img/stone_f_dr.png', './img/stone_e_dr.png', './img/stone_l_dr.png', './img/stone_d_dr.png', './img/stone_h_dr.png',
				   './img/stone_w_en_dr.png', './img/stone_f_en_dr.png', './img/stone_e_en_dr.png', './img/stone_l_en_dr.png', './img/stone_d_en_dr.png', './img/stone_h_en_dr.png',
				   './img/stone_w_dr.png', './img/stone_f_dr.png', './img/stone_e_dr.png', './img/stone_l_dr.png', './img/stone_d_dr.png', './img/stone_h_dr.png',
				   './img/frozen.png', './img/petrified_1.png', './img/petrified_2.png', './img/petrified_3.png',
                   
				   /* demon rune */
                   './img/stone_w_de.png', './img/stone_f_de.png', './img/stone_e_de.png', './img/stone_l_de.png', './img/stone_d_de.png', './img/stone_h_de.png',
				   './img/stone_w_en_de.png', './img/stone_f_en_de.png', './img/stone_e_en_de.png', './img/stone_l_en_de.png', './img/stone_d_en_de.png', './img/stone_h_en_de.png',
				   './img/stone_w_de.png', './img/stone_f_de.png', './img/stone_e_de.png', './img/stone_l_de.png', './img/stone_d_de.png', './img/stone_h_de.png',
				   './img/stone_w_en_de.png', './img/stone_f_en_de.png', './img/stone_e_en_de.png', './img/stone_l_en_de.png', './img/stone_d_en_de.png', './img/stone_h_en_de.png',
				   './img/stone_w_de.png', './img/stone_f_de.png', './img/stone_e_de.png', './img/stone_l_de.png', './img/stone_d_de.png', './img/stone_h_de.png',
				   './img/stone_w_en_de.png', './img/stone_f_en_de.png', './img/stone_e_en_de.png', './img/stone_l_en_de.png', './img/stone_d_en_de.png', './img/stone_h_en_de.png',
				   './img/stone_w_de.png', './img/stone_f_de.png', './img/stone_e_de.png', './img/stone_l_de.png', './img/stone_d_de.png', './img/stone_h_de.png',
				   './img/frozen.png', './img/petrified_1.png', './img/petrified_2.png', './img/petrified_3.png'];

var normal_list=[ 0,
                  1, 2, 3, 4, 5, 6,
                  7, 8, 9,10,11,12,
                 13,14,15,16,17,18,
                 19,20,21,22,23,24,
                 25,26,27,28,29,30,
                 31,32,33,34,35,36,
                 37,38,39,40,41,42,
                 37,38,39,40,41,42];
                   
var back_img=['./img/board_back_1.png', './img/board_back_2.png', './img/board_back_3.png', './img/board_back_4.png', './img/board_back_5.png',
              './img/board_back_6.png', './img/board_back_7.png', './img/board_back_8.png', './img/board_back_9.png', './img/board_back_10.png'];
var no_dissolve_img=['./img/nodis_h_icon.png', './img/nodis_w_icon.png', './img/nodis_f_icon.png', './img/nodis_e_icon.png', './img/nodis_l_icon.png', './img/nodis_d_icon.png'];
var break_img=['./img/no_heart.png', './img/no_water.png', './img/no_fire.png', './img/no_earth.png', './img/no_light.png', './img/no_dark.png', './img/break_x.png'];
var mode_s=0;		/* 0:move  1:edit */
var pre_pid=-1;
var step_cnt=0;
var start=0;
var move_time=5000;
var action_time=500;
var dissolve_time=500;
var time_left;
var timer, timer2, timer3, timer_d, timer_e=0, timer_r;
var combo_f=0, combo_n=0, combo=0;
var dissolve_n=0;
var dis_attr=new Array();
var dis_num=new Array();
var dissolve_mode=0;	/* 0:normal  1:three-dissolve  2:two-dissolve */
var edit_index=0;
var delay_flag=0;
var path_record=[];
var replay_step=0;
var move_mode=0;		/* 0:normal  1:free */
var crush=0;
var enemy_skill=0;
var corrosion=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
var fire=new Array();
var fire_trail=0;
var heal=new Array();
var heal_trail=0;
var fire_position=0;
var drop_set=0;
var drop_record_f=[];
var drop_record_n=[];
var drop_num_f=0;
var drop_num_n=0;
var undissolve=[0,0,0,0,0,0];
var break_stone=[0,0,0,0,0,0,0];
var esstr1='', esstr2=['', '', '', '', '', ''];
var psstr1=['', '', '', '', '', '', ''];
var model_page=1;
var eskill=[0,0,0,0,0,0,0,0,0,0,0,0];
var pskill=[0,0,0,0,0,0,0];
var estype1=0, estype2=0;
var pstype1=0, pstype2=0;
var break_x=0;
var round_petri=[];
var max_page=5;

/*----- pre-processing start -----*/

function preProcess()
{
    if(IsLoadBoard()) LoadURLCode();
    
    for(var i=0; i<30; i++) corrosion[i]=-1;
    for(var i=0; i<60; i++)
    {   
        drop_record_f[i]=new Stone(0, 0, 0, 0, 0, 0);
        drop_record_n[i]=new Stone(0, 0, 0, 0, 0, 0);
    }
    for(var i=0; i<6; i++) dis_attr[i]=0, dis_num[i]=0, fire[i]=-1;
    if(IsLoadPath()==false) path_record[0]=-1;
}

function IsLoadBoard()
{
	var str=location.search;
	return str.includes("bd");
}

function IsLoadPath()
{
	var str=location.search;
	return str.includes("stp") && str.includes("pth");
}

/*----- pre-processing end -----*/

function getStoneSrc(obj)
{
    if(obj.attr==0) return './img/stone_n.png';
    else if(obj.undissolved==1) return './img/frozen.png';
    else if(obj.petrified!=0) return './img/petrified_'+obj.petrified+'.png';
    else
    {
        return stone_src[normal_list[obj.attr+obj.enchanted*6+obj.sp*6*2]+46*obj.race];
    }
}

function copyObject(obj1, obj2)
{
    obj1=Object.assign(obj1, obj2);
}

function clearObject(obj)
{
    obj.attr=0;
    obj.enchanted=0;
    obj.sp=0;
    obj.undissolved=0;
    obj.petrified=0;
    obj.race=0;
}

function Init(id)
{
    document.getElementById('img'+id).onload=null;
    stone[id-1]=new Stone(1+parseInt(6*Math.random()), 0, 0, 0, 0, 0);
    board[id-1]=new Stone(0, 0, 0, 0, 0, 0);
    copyObject(board[id-1], stone[id-1]);
    document.getElementById('img'+id).src=getStoneSrc(board[id-1]);
}

function Drag(event){
	//event.preventDefault();
    event.dataTransfer.setData("text",event.currentTarget.id);
}

function StartMove(id)
{
	if(move_mode==0)
	{
		if(start==0 && mode_s==0) 
		{
			pre_pid=id;
			step_cnt=0;
			path_record[step_cnt]=id;
			start=1;
		}
	}
	else if(move_mode==1)
	{
		if(mode_s==0)
		{
			pre_pid=id;
			start=1;
			//for(var i=0; i<30; i++) corrosion[i]=-1;
			//for(var i=0; i<6; i++) fire[i]=-1;
			//for(var i=0; i<6; i++) heal[i]=-1;
		}
	}
	
}

function Release()
{
	if(start==1 && mode_s==0)
	{
		pre_pid=-1;
		start=0;
	}
}

function Change(pid)
{
    //console.log(pre_pid+' '+pid);
	if(start==1 && mode_s==0 && CheckLegality(pid, pre_pid)==1)
	{
		var pre=pre_pid;
		if(CheckCrush(board[pid-1].sp)==1) crush=1;
        //console.log(pre_pid+' '+pid);
		document.getElementById('img'+pre_pid).style.opacity=1;
		document.getElementById('img'+pid).style.opacity=0.5;
		document.getElementById('img'+pid).src=getStoneSrc(board[pre_pid-1]);
		document.getElementById('img'+pre_pid).src=getStoneSrc(board[pid-1]);
		var temp=new Stone(0, 0, 0, 0, 0, 0);
        copyObject(temp, board[pid-1]);
        copyObject(board[pid-1], board[pre_pid-1]);
        copyObject(board[pre_pid-1], temp);
		pre_pid=pid;
	
		if(pre!=pid) step_cnt++;
		document.getElementById("stepCount").innerHTML = '步數：'+step_cnt;
		path_record[step_cnt]=pid;
		
		if(enemy_skill==1)
		{
			for(var c=0; c<6; c++)
			{
				if(corrosion[c]==pid)
				{
					crush=1;
					break;
				}
			}
			corrosion[step_cnt%6]=pid;
			DrawCorrosion();
		}
		else if(enemy_skill==2)
		{
			for(var c=0; c<step_cnt-1; c++)
			{
				if(corrosion[c]==pid)
				{
					crush=1;
					break;
				}
			}
			corrosion[step_cnt]=pid;
			DrawCorrosion();
		}
		else if(enemy_skill==3)
		{
			for(var f=0; f<6; f++)
			{
				if(fire[f]==pid)
				{
					fire_trail++;
					document.getElementById("drf").innerHTML = fire_trail;
				}
			}
			fire[step_cnt%6]=pid;
			DrawFire();
		}
		else if(enemy_skill==4)
		{
			for(var h=0; h<6; h++)
			{
				if(heal[h]==pid)
				{
					heal_trail++;
					document.getElementById("drh").innerHTML = heal_trail;
				}
			}
			heal[step_cnt%6]=pid;
			DrawHeal();
		}
		else if(enemy_skill==5)
		{
			var arr=[1,6,8,11,15,16,20,23,25,30];
			for(var i=0; i<10; i++)
			{
				if(pid==arr[i])
				{
					fire_position++;
					document.getElementById("drf").innerHTML = fire_position;
				}
			}
		}
		
		if(timer_e==0)
		{
			timer_e=1;
			time_left=move_time;
			timer=setTimeout(function(){StopMove(pid);}, move_time);
			timer2=setInterval("ShowTimer()", 10);
		}
		if(crush) StopMove(pid);
	}
}

function CheckCrush(sp)
{
	if(sp==2) return 1;
	return 0;
}

function CheckLegality(id, p)
{
    if(p<1 || p>30 || id<1 || id>30) return 0;
	switch(id)
	{
		case 1:
			if(p==id+1 || p==id+6 || p==id+7) return 1;
			else return 0;
		break;
		case 2:
		case 3:
		case 4:
		case 5:
			if(p==id+1 || p==id-1 || p==id+6 || p==id+5 || p==id+7) return 1;
			else return 0;
		break;
		case 6:
			if(p==id-1 || p==id+6 || p==id+5) return 1;
			else return 0;
		break;
		case 7:
		case 13:
		case 19:
			if(p==id+1 || p==id+6 || p==id-6 || p==id+7 || p==id-5) return 1;
			else return 0;
		break;
		case 25:
			if(p==id+1 || p==id-6 || p==id-5) return 1;
			else return 0;
		break;
		case 12:
		case 18:
		case 24:
			if(p==id-1 || p==id+6 || p==id-6 || p==id+5 || p==id-7) return 1;
			else return 0;
		break;
		case 30:
			if(p==id-1 || p==id-6 || p==id-7) return 1;
			else return 0;
		break;
		default:
            if(p==id+1 || p==id-1 || p==id+6 || p==id-6 || p==id+7 || p==id-7 || p==id+5 || p==id-5) return 1;
			else return 0;
	}
	return 1;
}

function Change_out(pid)
{
	//console.log("out:"+pid);
}


function StopMove(pid)
{
	if(mode_s==0 && start==1 && move_mode==0)
	{
		start=2;
		//alert('stop');
		for(var i=1; i<=30; i++) document.getElementById('img'+i).draggable='false';
		if(time_left>0) clearTimeout(timer2);
		timer_d=setTimeout("Dissolve()", 500);
		if(pid>0) path_record[step_cnt+1]=pid;
		
		for(var i=1; i<=30; i++) document.getElementById('img'+i).style.opacity=1;
	}
	else if(mode_s==0 && start==1 && move_mode==1)
	{
		if(time_left<=0 || crush==1)
		{
			start=2;
			clearTimeout(timer2);
			timer_d=setTimeout("Dissolve()", 500);
			for(var i=1; i<=30; i++) document.getElementById('img'+i).draggable='false';
		}
		for(var i=1; i<=30; i++) document.getElementById('img'+i).style.opacity=1;
	}
	//for(var i=0; i<step_cnt+1; i++) console.log(i+':'+path_record[i]+' ');
}

function CheckNearDissolve(num, n1, n2, n3)
{
    if(num==2)
    {
        if(board[n1].attr!=0 && board[n2].attr!=0)
        {
            if(board[n1].undissolved==0 && board[n2].undissolved==0)
            {
                if(board[n1].petrified==0 && board[n2].petrified==0)
                {
                    if(board[n1].attr==board[n2].attr) return 1;
                    else return 0;
                }
                else return 0;
            }
            else return 0;
        }
        else return 0;
    }
    else if(num==3)
    {
        if(board[n1].attr!=0 && board[n2].attr!=0 && board[n3].attr!=0)
        {
            if(board[n1].undissolved==0 && board[n2].undissolved==0 && board[n3].undissolved==0)
            {
                if(board[n1].petrified==0 && board[n2].petrified==0 && board[n3].petrified==0)
                {
                    if(board[n1].attr==board[n2].attr && board[n1].attr==board[n3].attr) return 1;
                    else return 0;
                }
                else return 0;
            }
            else return 0;
        }
        else return 0;
    }
    else return 0;
}

function Dissolve()
{
	if(enemy_skill!=5) BackReconstruct();
	if(dissolve_mode==0)		// normal mode
	{
		var visit=new Array();
		var queue=new Array();
		for(var i=0; i<30; i++) visit[i]=(board[i].undissolved==1)?99:0;
		
		for(var i=0; i<5; i++)
		{
			for(var j=0; j<4; j++)
			{
				if(CheckNearDissolve(3,i*6+j,i*6+j+1,i*6+j+2) && undissolve[board[i*6+j].attr%6]==0)
				{
					visit[i*6+j]=1, visit[i*6+j+1]=1, visit[i*6+j+2]=1;
				}
			}
		}
		for(var i=0; i<6; i++)
		{
			for(var j=0; j<3; j++)
			{
				if(CheckNearDissolve(3,j*6+i,j*6+i+6,j*6+i+12) && undissolve[board[j*6+i].attr%6]==0)
				{
					visit[j*6+i]=1, visit[j*6+i+6]=1, visit[j*6+i+12]=1;
				}
			}
		}
        
        
        
		var last=0, head=0;
		var set_dissolved=0;
		var d_index=3;
		var dissolved_stone=0;
		
		for(var j=0; j<30; j++)							// BFS
		{
			if(visit[j]==1 && board[j].attr!=0)
			{
				last=0, head=0;
				var count=0;
				count++;
				
				queue[last++]=j;
				while(head!=last)
				{
					visit[queue[head]]=2;
					if(queue[head]%6!=0 && board[queue[head]-1].attr!=0 && board[queue[head]-1].attr==board[queue[head]].attr && visit[queue[head]-1]==1)
					{
						visit[queue[head]-1]=2;
						queue[last++]=queue[head]-1;
						count++;
					}
					if(queue[head]%6!=5 && board[queue[head]+1].attr!=0 && board[queue[head]+1].attr==board[queue[head]].attr && visit[queue[head]+1]==1)
					{
						visit[queue[head]+1]=2;
						queue[last++]=queue[head]+1;
						count++;
					}
					if(queue[head]>=6 && board[queue[head]-6].attr!=0 && board[queue[head]-6].attr==board[queue[head]].attr && visit[queue[head]-6]==1)
					{
						visit[queue[head]-6]=2;
						queue[last++]=queue[head]-6;
						count++;
					}
					if(queue[head]<=23 && board[queue[head]+6].attr!=0 && board[queue[head]+6].attr==board[queue[head]].attr && visit[queue[head]+6]==1)
					{
						visit[queue[head]+6]=2;
						queue[last++]=queue[head]+6;
						count++;
					}
					head++;
				}
				
				for(var i=0; i<last; i++) visit[queue[i]]=d_index;
				d_index++;
				set_dissolved++;
			}
		}
		
		
		if(set_dissolved>0)
		{
			StoneDisappear(visit, d_index);
			dissolve_n++;
		}
		else BreakStone(set_dissolved);
	}
	else if(dissolve_mode==1)		// three-dissolve mode
	{
		var visit=new Array();
		var queue=new Array();
		for(var i=0; i<30; i++) visit[i]=(board[i].undissolved==1)?99:0;
		var last=0, head=0;
		var set_dissolved=0;
		var d_index=3;
		
		for(var j=0; j<30; j++)							// BFS
		{
			if(undissolve[board[j].attr%6]!=0) continue;
			
			if(visit[j]==0 && board[j].attr!=0)
			{
				last=0, head=0;
				var count=0;
				count++;
				queue[last++]=j;
				while(head!=last)
				{
					visit[queue[head]]=1;
					if(queue[head]%6!=0 && board[queue[head]-1].attr!=0 && board[queue[head]-1].attr==board[queue[head]].attr && visit[queue[head]-1]==0)
					{
						visit[queue[head]-1]=1;
						queue[last++]=queue[head]-1;
						count++;
					}
					if(queue[head]%6!=5 && board[queue[head]+1].attr!=0 && board[queue[head]+1].attr==board[queue[head]].attr && visit[queue[head]+1]==0)
					{
						visit[queue[head]+1]=1;
						queue[last++]=queue[head]+1;
						count++;
					}
					if(queue[head]>=6 && board[queue[head]-6].attr!=0 && board[queue[head]-6].attr==board[queue[head]].attr && visit[queue[head]-6]==0)
					{
						visit[queue[head]-6]=1;
						queue[last++]=queue[head]-6;
						count++;
					}
					if(queue[head]<=23 && board[queue[head]+6].attr!=0 && board[queue[head]+6].attr==board[queue[head]].attr && visit[queue[head]+6]==0)
					{
						visit[queue[head]+6]=1;
						queue[last++]=queue[head]+6;
						count++;
					}
					head++;
				}
				if(count>=3)
				{
					for(var i=0; i<last; i++) visit[queue[i]]=d_index;
					d_index++;
					set_dissolved++;
				}
			}
		}
		
		if(set_dissolved>0)
		{
			StoneDisappear(visit, d_index);
			dissolve_n++;
		}
		else BreakStone(set_dissolved);
	}
	else if(dissolve_mode==2)		// fire two-dissolve mode
	{
		var visit=new Array();
		var queue=new Array();
		for(var i=0; i<30; i++) visit[i]=(board[i].undissolved==1)?99:0;
		
		for(var i=0; i<5; i++)
		{
			for(var j=0; j<5; j++)
			{
				if(board[i*6+j].attr==2 || board[i*6+j].attr==6)
				{
					if(CheckNearDissolve(2,i*6+j,i*6+j+1,-1) && undissolve[board[i*6+j].attr%6]==0)
					{
						visit[i*6+j]=1, visit[i*6+j+1]=1;
					}
				}
				else if(j<4)
				{
					if(CheckNearDissolve(3,i*6+j,i*6+j+1,i*6+j+2) && undissolve[board[i*6+j].attr%6]==0)
					{
						visit[i*6+j]=1, visit[i*6+j+1]=1, visit[i*6+j+2]=1;
					}
				}
			}
			
		}
		for(var i=0; i<6; i++)
		{
			for(var j=0; j<4; j++)
			{
				if(board[j*6+i].attr==2 || board[j*6+i].attr==6)
				{
					if(CheckNearDissolve(2,j*6+i,j*6+i+6,-1) && undissolve[board[j*6+i].attr%6]==0)
					{
						visit[j*6+i]=1, visit[j*6+i+6]=1;
					}
				}
				else if(j<3)
				{
					if(CheckNearDissolve(3,j*6+i,j*6+i+6,j*6+i+12) && undissolve[board[j*6+i].attr%6]==0)
					{
						visit[j*6+i]=1, visit[j*6+i+6]=1, visit[j*6+i+12]=1;
					}
				}
			}
		}
		
		var last=0, head=0;
		var set_dissolved=0;
		var d_index=3;
		
		for(var j=0; j<30; j++)							// BFS
		{
			if(visit[j]==1 && board[j].attr!=0)
			{
				last=0, head=0;
				var count=0;
				count++;
				queue[last++]=j;
				while(head!=last)
				{
					visit[queue[head]]=2;
					if(queue[head]%6!=0 && board[queue[head]-1].attr!=0 && board[queue[head]-1].attr==board[queue[head]].attr && visit[queue[head]-1]==1)
					{
						visit[queue[head]-1]=2;
						queue[last++]=queue[head]-1;
						count++;
					}
					if(queue[head]%6!=5 && board[queue[head]+1].attr!=0 && board[queue[head]+1].attr==board[queue[head]].attr && visit[queue[head]+1]==1)
					{
						visit[queue[head]+1]=2;
						queue[last++]=queue[head]+1;
						count++;
					}
					if(queue[head]>=6 && board[queue[head]-6].attr!=0 && board[queue[head]-6].attr==board[queue[head]].attr && visit[queue[head]-6]==1)
					{
						visit[queue[head]-6]=2;
						queue[last++]=queue[head]-6;
						count++;
					}
					if(queue[head]<=23 && board[queue[head]+6].attr!=0 && board[queue[head]+6].attr==board[queue[head]].attr && visit[queue[head]+6]==1)
					{
						visit[queue[head]+6]=2;
						queue[last++]=queue[head]+6;
						count++;
					}
					head++;
				}
				
				for(var i=0; i<last; i++) visit[queue[i]]=d_index;
				d_index++;
				set_dissolved++;
			}
		}
		
		if(set_dissolved>0)
		{
			StoneDisappear(visit, d_index);
			dissolve_n++;
		}
		else BreakStone(set_dissolved);
	}
	else if(dissolve_mode==3)		// earth two-dissolve mode
	{
		var visit=new Array();
		var queue=new Array();
		for(var i=0; i<30; i++) visit[i]=(board[i].undissolved==1)?99:0;
		
		for(var i=0; i<5; i++)
		{
			for(var j=0; j<5; j++)
			{
				if(board[i*6+j].attr==3 || board[i*6+j].attr==6)
				{
					if(CheckNearDissolve(2,i*6+j,i*6+j+1,-1) && undissolve[board[i*6+j].attr%6]==0)
					{
						visit[i*6+j]=1, visit[i*6+j+1]=1;
					}
				}
				else if(j<4)
				{
					if(CheckNearDissolve(3,i*6+j,i*6+j+1,i*6+j+2) && undissolve[board[i*6+j].attr%6]==0)
					{
						visit[i*6+j]=1, visit[i*6+j+1]=1, visit[i*6+j+2]=1;
					}
				}
			}
			
		}
		for(var i=0; i<6; i++)
		{
			for(var j=0; j<4; j++)
			{
				if(board[j*6+i].attr==3 || board[j*6+i].attr==6)
				{
					if(CheckNearDissolve(2,j*6+i,j*6+i+6,-1) && undissolve[board[j*6+i].attr%6]==0)
					{
						visit[j*6+i]=1, visit[j*6+i+6]=1;
					}
				}
				else if(j<3)
				{
					if(CheckNearDissolve(3,j*6+i,j*6+i+6,j*6+i+12) && undissolve[board[j*6+i].attr%6]==0)
					{
						visit[j*6+i]=1, visit[j*6+i+6]=1, visit[j*6+i+12]=1;
					}
				}
			}
		}
		
		var last=0, head=0;
		var set_dissolved=0;
		var d_index=3;
		
		for(var j=0; j<30; j++)							// BFS
		{
			if(visit[j]==1 && board[j].attr!=0)
			{
				last=0, head=0;
				var count=0;
				count++;
				queue[last++]=j;
				while(head!=last)
				{
					visit[queue[head]]=2;
					if(queue[head]%6!=0 && board[queue[head]-1].attr!=0 && board[queue[head]-1].attr==board[queue[head]].attr && visit[queue[head]-1]==1)
					{
						visit[queue[head]-1]=2;
						queue[last++]=queue[head]-1;
						count++;
					}
					if(queue[head]%6!=5 && board[queue[head]+1].attr!=0 && board[queue[head]+1].attr==board[queue[head]].attr && visit[queue[head]+1]==1)
					{
						visit[queue[head]+1]=2;
						queue[last++]=queue[head]+1;
						count++;
					}
					if(queue[head]>=6 && board[queue[head]-6].attr!=0 && board[queue[head]-6].attr==board[queue[head]].attr && visit[queue[head]-6]==1)
					{
						visit[queue[head]-6]=2;
						queue[last++]=queue[head]-6;
						count++;
					}
					if(queue[head]<=23 && board[queue[head]+6].attr!=0 && board[queue[head]+6].attr==board[queue[head]].attr && visit[queue[head]+6]==1)
					{
						visit[queue[head]+6]=2;
						queue[last++]=queue[head]+6;
						count++;
					}
					head++;
				}
				
				for(var i=0; i<last; i++) visit[queue[i]]=d_index;
				d_index++;
				set_dissolved++;
			}
		}
		
		if(set_dissolved>0)
		{
			StoneDisappear(visit, d_index);
			dissolve_n++;
		}
		else BreakStone(set_dissolved);
	}
	else if(dissolve_mode==4)		// fire-earth two-dissolve mode
	{
		var visit=new Array();
		var queue=new Array();
		for(var i=0; i<30; i++) visit[i]=(board[i].undissolved==1)?99:0;
		
		for(var i=0; i<5; i++)
		{
			for(var j=0; j<5; j++)
			{
				if(board[i*6+j].attr==2 || board[i*6+j].attr==3 || board[i*6+j].attr==6)
				{
					if(CheckNearDissolve(2,i*6+j,i*6+j+1,-1) && undissolve[board[i*6+j].attr%6]==0)
					{
						visit[i*6+j]=1, visit[i*6+j+1]=1;
					}
				}
				else if(j<4)
				{
					if(CheckNearDissolve(3,i*6+j,i*6+j+1,i*6+j+2) && undissolve[board[i*6+j].attr%6]==0)
					{
						visit[i*6+j]=1, visit[i*6+j+1]=1, visit[i*6+j+2]=1;
					}
				}
			}
			
		}
		for(var i=0; i<6; i++)
		{
			for(var j=0; j<4; j++)
			{
				if(board[j*6+i].attr==2 || board[j*6+i].attr==3 || board[j*6+i].attr==6)
				{
					if(CheckNearDissolve(2,j*6+i,j*6+i+6,-1) && undissolve[board[j*6+i].attr%6]==0)
					{
						visit[j*6+i]=1, visit[j*6+i+6]=1;
					}
				}
				else if(j<3)
				{
					if(CheckNearDissolve(3,j*6+i,j*6+i+6,j*6+i+12) && undissolve[board[j*6+i].attr%6]==0)
					{
						visit[j*6+i]=1, visit[j*6+i+6]=1, visit[j*6+i+12]=1;
					}
				}
			}
		}
		
		var last=0, head=0;
		var set_dissolved=0;
		var d_index=3;
		
		for(var j=0; j<30; j++)							// BFS
		{
			if(visit[j]==1 && board[j].attr!=0)
			{
				last=0, head=0;
				var count=0;
				count++;
				queue[last++]=j;
				while(head!=last)
				{
					visit[queue[head]]=2;
					if(queue[head]%6!=0 && board[queue[head]-1].attr!=0 && board[queue[head]-1].attr==board[queue[head]].attr && visit[queue[head]-1]==1)
					{
						visit[queue[head]-1]=2;
						queue[last++]=queue[head]-1;
						count++;
					}
					if(queue[head]%6!=5 && board[queue[head]+1].attr!=0 && board[queue[head]+1].attr==board[queue[head]].attr && visit[queue[head]+1]==1)
					{
						visit[queue[head]+1]=2;
						queue[last++]=queue[head]+1;
						count++;
					}
					if(queue[head]>=6 && board[queue[head]-6].attr!=0 && board[queue[head]-6].attr==board[queue[head]].attr && visit[queue[head]-6]==1)
					{
						visit[queue[head]-6]=2;
						queue[last++]=queue[head]-6;
						count++;
					}
					if(queue[head]<=23 && board[queue[head]+6].attr!=0 && board[queue[head]+6].attr==board[queue[head]].attr && visit[queue[head]+6]==1)
					{
						visit[queue[head]+6]=2;
						queue[last++]=queue[head]+6;
						count++;
					}
					head++;
				}
				
				for(var i=0; i<last; i++) visit[queue[i]]=d_index;
				d_index++;
				set_dissolved++;
			}
		}
		
		if(set_dissolved>0)
		{
			StoneDisappear(visit, d_index);
			dissolve_n++;
		}
		else BreakStone(set_dissolved);
	}
    else if(dissolve_mode==5)		// two-dissolve mode
	{
		var visit=new Array();
		var queue=new Array();
		for(var i=0; i<30; i++) visit[i]=(board[i].undissolved==1)?99:0;
		
		for(var i=0; i<5; i++)
		{
			for(var j=0; j<5; j++)
			{
                if(CheckNearDissolve(2,i*6+j,i*6+j+1,-1) && undissolve[board[i*6+j].attr%6]==0)
                {
                    visit[i*6+j]=1, visit[i*6+j+1]=1;
                }
			}
			
		}
		for(var i=0; i<6; i++)
		{
			for(var j=0; j<4; j++)
			{
                if(CheckNearDissolve(2,j*6+i,j*6+i+6,-1) && undissolve[board[j*6+i].attr%6]==0)
                {
                    visit[j*6+i]=1, visit[j*6+i+6]=1;
                }
			}
		}
		
		var last=0, head=0;
		var set_dissolved=0;
		var d_index=3;
		
		for(var j=0; j<30; j++)							// BFS
		{
			if(visit[j]==1 && board[j].attr!=0)
			{
				last=0, head=0;
				var count=0;
				count++;
				queue[last++]=j;
				while(head!=last)
				{
					visit[queue[head]]=2;
					if(queue[head]%6!=0 && board[queue[head]-1].attr!=0 && board[queue[head]-1].attr==board[queue[head]].attr && visit[queue[head]-1]==1)
					{
						visit[queue[head]-1]=2;
						queue[last++]=queue[head]-1;
						count++;
					}
					if(queue[head]%6!=5 && board[queue[head]+1].attr!=0 && board[queue[head]+1].attr==board[queue[head]].attr && visit[queue[head]+1]==1)
					{
						visit[queue[head]+1]=2;
						queue[last++]=queue[head]+1;
						count++;
					}
					if(queue[head]>=6 && board[queue[head]-6].attr!=0 && board[queue[head]-6].attr==board[queue[head]].attr && visit[queue[head]-6]==1)
					{
						visit[queue[head]-6]=2;
						queue[last++]=queue[head]-6;
						count++;
					}
					if(queue[head]<=23 && board[queue[head]+6].attr!=0 && board[queue[head]+6].attr==board[queue[head]].attr && visit[queue[head]+6]==1)
					{
						visit[queue[head]+6]=2;
						queue[last++]=queue[head]+6;
						count++;
					}
					head++;
				}
				
				for(var i=0; i<last; i++) visit[queue[i]]=d_index;
				d_index++;
				set_dissolved++;
			}
		}
		
		if(set_dissolved>0)
		{
			StoneDisappear(visit, d_index);
			dissolve_n++;
		}
		else BreakStone(set_dissolved);
	}
    else if(dissolve_mode==6)		// four-dissolve mode
	{
		var visit=new Array();
		var queue=new Array();
		for(var i=0; i<30; i++) visit[i]=(board[i].undissolved==1)?99:0;
		var last=0, head=0;
		var set_dissolved=0;
		var d_index=3;
		
		for(var j=0; j<30; j++)							// BFS
		{
			if(undissolve[board[j].attr%6]!=0) continue;
			
			if(visit[j]==0 && board[j].attr!=0)
			{
				last=0, head=0;
				var count=0;
				count++;
				queue[last++]=j;
				while(head!=last)
				{
					visit[queue[head]]=1;
					if(queue[head]%6!=0 && board[queue[head]-1].attr!=0 && board[queue[head]-1].attr==board[queue[head]].attr && visit[queue[head]-1]==0)
					{
						visit[queue[head]-1]=1;
						queue[last++]=queue[head]-1;
						count++;
					}
					if(queue[head]%6!=5 && board[queue[head]+1].attr!=0 && board[queue[head]+1].attr==board[queue[head]].attr && visit[queue[head]+1]==0)
					{
						visit[queue[head]+1]=1;
						queue[last++]=queue[head]+1;
						count++;
					}
					if(queue[head]>=6 && board[queue[head]-6].attr!=0 && board[queue[head]-6].attr==board[queue[head]].attr && visit[queue[head]-6]==0)
					{
						visit[queue[head]-6]=1;
						queue[last++]=queue[head]-6;
						count++;
					}
					if(queue[head]<=23 && board[queue[head]+6].attr!=0 && board[queue[head]+6].attr==board[queue[head]].attr && visit[queue[head]+6]==0)
					{
						visit[queue[head]+6]=1;
						queue[last++]=queue[head]+6;
						count++;
					}
					head++;
				}
				if(count>=4)
				{
					for(var i=0; i<last; i++) visit[queue[i]]=d_index;
					d_index++;
					set_dissolved++;
				}
			}
		}
		
		if(set_dissolved>0)
		{
			StoneDisappear(visit, d_index);
			dissolve_n++;
		}
		else BreakStone(set_dissolved);
	}
	
	ResultDisplay();

	start=3;
}

function EliminatePetrify(id)
{
    if(round_petri[id]==0)
    {
        round_petri[id]=1;
        board[id].petrified--;
        
        if(board[id].petrified==0)
        {
            board[id].sp=0;
            document.getElementById('img'+(id+1)).src=getStoneSrc(board[id]);
        }
        else document.getElementById('img'+(id+1)).src=stone_src[43+board[id].petrified];
    }
}

function CheckPetrified(id, visit)
{
    if(id-1>=0 && id-1<30 && parseInt((id-1)/6)==parseInt(id/6) && board[id-1].sp==4) EliminatePetrify(id-1);
    if(id+1>=0 && id+1<30 && parseInt((id+1)/6)==parseInt(id/6) && board[id+1].sp==4) EliminatePetrify(id+1);
    if(id-6>=0 && id-6<30 && board[id-6].sp==4) EliminatePetrify(id-6);
    if(id+6>=0 && id+6<30 && board[id+6].sp==4) EliminatePetrify(id+6);
}

function StoneDisappear(v, d_index)
{
	var timers=new Array();
	var timers_petri=new Array();
	var timerd=new Array();
    
    for(var i=0; i<30; i++) round_petri[i]=0;
	for(j=3; j<d_index; j++)
	{
		var attr=-1;
		for(var i=0; i<30; i++)
		{
			if(v[i]==j)
			{
				attr=board[i].attr%6;
				if(dissolve_n==0) copyObject(drop_record_f[drop_num_f++], board[i]);
				else copyObject(drop_record_n[drop_num_n++], board[i]);
				timers[i]=setTimeout(BlankRune, dissolve_time*(j-3), i, attr);
                timers_petri[i]=setTimeout(CheckPetrified, dissolve_time*(j-3), i, v);
			}
		}
		if(dissolve_n==0) clearObject(drop_record_f[drop_num_f++]);
		else clearObject(drop_record_n[drop_num_n++]);
		timerd[j]=setTimeout(DissolveDisplay, dissolve_time*(j-3), attr, dissolve_n);
	}
	
	timer3=setTimeout("DropStone()", action_time+(d_index-4)*dissolve_time);
}

function BlankRune(id, attr)
{
	board[id].attr=0;
	dis_num[attr%6]++;
    for(var k=0; k<11; k++)
    {
        var timer_f=setTimeout(FadeStone, 10*k, id, 1-k*0.1);
    }
}

function FadeStone(id, opa)
{
    document.getElementById('img'+(id+1)).style.opacity=opa;
    if(opa==0)
    {
        document.getElementById('img'+(id+1)).src='./img/stone_n.png';
        document.getElementById('img'+(id+1)).style.opacity=1;
    }
}

function DissolveDisplay(attr, dis_n)
{
	dis_attr[attr]++;
	combo++;
	if(dis_n==0)
	{
		combo_f++;
		document.getElementById("combo_f").innerHTML = '首消 '+combo_f+' Combo';
	}
	else
	{
		combo_n++;
		document.getElementById("combo_n").innerHTML = '疊珠 '+combo_n+' Combo';
	}
	document.getElementById("combo").innerHTML = '合計 '+combo+' Combo';
	
	document.getElementById("dr"+attr).innerHTML = dis_attr[attr];
	document.getElementById("dn"+attr).innerHTML = dis_num[attr];
}

function DropStone()
{
	for(var i=0; i<6; i++)
	{
		for(var j=4; j>=0; j--)
		{
			if(board[j*6+i].attr!=0)
			{
				var drop_y=0;
				for(var k=j+1; k<5; k++)
				{
					if(board[k*6+i].attr==0) drop_y++;
				}
				if(drop_y>0)
				{
                    copyObject(board[(j+drop_y)*6+i], board[j*6+i]);
					clearObject(board[j*6+i]);
                    document.getElementById('img'+(j*6+i+1)).src=getStoneSrc(board[j*6+i]);
					document.getElementById('img'+((j+drop_y)*6+i+1)).src=getStoneSrc(board[(j+drop_y)*6+i]);
				}
				
			}
		}
	}
	
	timer3=setTimeout(BreakStone, action_time, 1000);
}

function BreakStone(set)
{
    var flag=0;
    if(set==0)
    {
        for(var i=0; i<30; i++)
        {
            if(board[i].attr!=0)
            {
                var id=board[i].attr%6;
                if(break_stone[id]==1)
                {
                    for(var k=0; k<11; k++)
                    {
                        var timer_f=setTimeout(FadeBreakStone, 10*k, i, 1-k*0.1);
                    }
                    flag=1;
                }
            }
        }
        if(break_stone[6]==1 && break_x==0)
        {
            var pos=[1,6,8,11,15,16,20,23,25,30];
            for(var i=0; i<10; i++)
            {
                if(board[pos[i]-1].attr!=0 && board[pos[i]-1].sp!=4 && board[pos[i]-1].sp!=5)
                {
                    for(var k=0; k<11; k++)
                    {
                        var timer_f=setTimeout(FadeBreakStone, 10*k, pos[i]-1, 1-k*0.1);
                    }
                    flag=1;
                }
            }
            break_x=1;
        }
        if(flag==1) timer3=setTimeout("DropStone()", action_time);
        else console.log("round end");
    }
    else Dissolve();
}

function FadeBreakStone(id, opa)
{
    document.getElementById('img'+(id+1)).style.opacity=opa;
    if(opa==0)
    {
        document.getElementById('img'+(id+1)).style.opacity=1;
        clearObject(board[id]);
        document.getElementById('img'+(id+1)).src=getStoneSrc(board[id]);
    }
}

function ShowTimer()
{
	if(time_left>0) time_left-=10;
	else
	{
		clearTimeout(timer2);
		StopMove(-1);
	}
	document.getElementById("time_prog").value=100*(time_left/move_time);
	document.getElementById("timer").innerHTML = '剩餘 '+(time_left/1000).toFixed(1)+' 秒';
	//console.log(time_left);
}

function Reset()
{
	clearTimeout(timer);
	clearTimeout(timer2);
	clearTimeout(timer3);
	clearTimeout(timer_d);
	clearTimeout(timer_e);
	clearTimeout(timer_r);

	pre_pid=0;
	step_cnt=0;
	start=0;
	time_left=move_time;
	timer_e=0;
	combo=0, combo_f=0, combo_n=0;
	dissolve_n=0;
	crush=0;
	for(var i=0; i<6; i++) dis_attr[i]=0, document.getElementById("dr"+i).innerHTML=0;
	for(var i=0; i<6; i++) dis_num[i]=0, document.getElementById("dn"+i).innerHTML=0;
	for(var i=0; i<30; i++)
    {
        copyObject(board[i], stone[i]);
        document.getElementById('img'+(i+1)).src=getStoneSrc(board[i]);
	}
    //console.log(stone);
    document.getElementById("timer").innerHTML = '剩餘 '+(time_left/1000).toFixed(1)+' 秒';
	document.getElementById("stepCount").innerHTML = '步數：'+step_cnt;
	document.getElementById("combo_f").innerHTML = '首消 '+combo_f+' Combo';
	document.getElementById("combo_n").innerHTML = '疊珠 '+combo_n+' Combo';
	document.getElementById("combo").innerHTML = '合計 '+combo+' Combo';
	for(var i=1; i<=30; i++) document.getElementById('img'+i).draggable='true';
	document.getElementById("time_prog").value=100;
	for(var i=1; i<=30; i++) document.getElementById('img'+i).style.opacity=1;
	
	document.getElementById('board_canvas').style.display='none';
	
	var c = document.getElementById("board_canvas");
	var ctx = c.getContext("2d");
	ctx.clearRect(0,0,492,430);
	
	for(var i=0; i<30; i++) corrosion[i]=-1;
	for(var i=0; i<6; i++) fire[i]=-1, heal[i]=-1;
	if(enemy_skill!=5) BackReconstruct();
	fire_trail=0;
	fire_position=0;
	document.getElementById("drf").innerHTML = 0;
	heal_trail=0;
	document.getElementById("drh").innerHTML = 0;
	
	drop_set=0;
	
	ClearResultDisplay();
    
    break_x=0;
    for(var i=0; i<30; i++) round_petri[i]=0;
}


function Replay()
{
	if(start==3 && move_mode==0)
	{
		ClearResultDisplay();
		replay_step=0;
		combo=0, combo_f=0, combo_n=0;
		dissolve_n=0;
		LayerDisplay();
		for(var i=0; i<6; i++) dis_attr[i]=0, document.getElementById("dr"+i).innerHTML = 0;
		for(var i=0; i<6; i++) dis_num[i]=0, document.getElementById("dn"+i).innerHTML = 0;
		document.getElementById("combo_f").innerHTML = '首消 '+combo_f+' Combo';
		document.getElementById("combo_n").innerHTML = '疊珠 '+combo_n+' Combo';
		document.getElementById("combo").innerHTML = '合計 '+combo+' Combo';
		for(var i=0; i<30; i++)
        {
            copyObject(board[i], stone[i]);
            document.getElementById('img'+(i+1)).src=getStoneSrc(board[i]);
        }
        for(var i=0; i<step_cnt; i++) timer_r=setTimeout("ReplayMove()", 400+400*i);
		timer_r=setTimeout(function(){
			document.getElementById('img'+path_record[step_cnt]).style.opacity=1;
		}, 400+400*(step_cnt+1));
		timer_r=setTimeout("Dissolve()", 400+400*(step_cnt+1));
        break_x=0;
        for(var i=0; i<30; i++) round_petri[i]=0;
	}
	
}

function ReplayMove()
{
	if(start==3)
	{
		var i=replay_step+1;
		document.getElementById('img'+path_record[i-1]).style.opacity=1;
		document.getElementById('img'+path_record[i]).style.opacity=0.5;
		document.getElementById('img'+path_record[i]).src=getStoneSrc(board[path_record[i-1]-1]);
		document.getElementById('img'+path_record[i-1]).src=getStoneSrc(board[path_record[i]-1]);
		var temp=new Stone(0, 0, 0, 0, 0, 0);
        copyObject(temp, board[path_record[i]-1]);
		copyObject(board[path_record[i]-1], board[path_record[i-1]-1]);
        copyObject(board[path_record[i-1]-1], temp);
		replay_step++;
	}
	else clearTimeout(timer_r);
}

function LayerDisplay()
{
	document.getElementById('board_canvas').style.display='block';
	for(var i=1; i<=step_cnt; i++)
	{
		var dx=41+82*parseInt((path_record[i]-1)%6);
		var dy=43+86*parseInt((path_record[i]-1)/6);
		var c = document.getElementById("board_canvas");
		var ctx = c.getContext("2d");
		ctx.beginPath();
		ctx.arc(dx,dy,10,0,360,false);
		ctx.fillStyle='#FFFFFF';
		ctx.fill();
		ctx.closePath();
	}
	
	for(var i=1; i<=step_cnt; i++)
	{
		var dx=41+82*parseInt((path_record[i]-1)%6);
		var dy=43+86*parseInt((path_record[i]-1)/6);
		var dpx=41+82*parseInt((path_record[i-1]-1)%6);
		var dpy=43+86*parseInt((path_record[i-1]-1)/6);
		var c = document.getElementById("board_canvas");
		var ctx = c.getContext("2d");
		ctx.moveTo(dpx,dpy);
		ctx.lineTo(dx,dy);
		ctx.strokeStyle='#FFFFFF';
		ctx.lineWidth=5;
		ctx.stroke();
	}
	
	var dx=41+82*parseInt((path_record[0]-1)%6)-25;
	var dy=43+86*parseInt((path_record[0]-1)/6)+25;
	var c = document.getElementById("board_canvas");
	var ctx = c.getContext("2d");
	
	ctx.lineWidth=3;
	ctx.fillStyle = '#FFFF00';
	ctx.strokeStyle = '#000000';

	ctx.font = '50pt Arial';
	ctx.fillText('S', dx, dy);
	ctx.strokeText('S', dx, dy);
	
}

function Edit(id)
{
	if(edit_index!=0 && mode_s==1)
	{
        if(edit_index>=1 && edit_index<=6)      // normal stone
		{
			board[id-1].attr=stone[id-1].attr=edit_index;
            board[id-1].enchanted=stone[id-1].enchanted=0;
			board[id-1].sp=stone[id-1].sp=0;
			board[id-1].undissolved=stone[id-1].undissolved=0;
			board[id-1].petrified=stone[id-1].petrified=0;
            board[id-1].race=stone[id-1].race=0;
			document.getElementById('img'+id).src=getStoneSrc(board[id-1]);
		}
        else if(edit_index==7)          // enchanted stone
		{
            board[id-1].enchanted=stone[id-1].enchanted=1;
			board[id-1].sp=stone[id-1].sp=0;
			board[id-1].undissolved=stone[id-1].undissolved=0;
			board[id-1].petrified=stone[id-1].petrified=0;
			document.getElementById('img'+id).src=getStoneSrc(board[id-1]);
		}
		else if(edit_index==8)			// weathered stone
		{
            board[id-1].sp=stone[id-1].sp=2;
			board[id-1].undissolved=stone[id-1].undissolved=0;
			board[id-1].petrified=stone[id-1].petrified=0;
            board[id-1].race=stone[id-1].race=0;
			document.getElementById('img'+id).src=getStoneSrc(board[id-1]);
		}
		else if(edit_index==9)		    // locked stone
		{
			board[id-1].sp=stone[id-1].sp=3;
			board[id-1].undissolved=stone[id-1].undissolved=0;
			board[id-1].petrified=stone[id-1].petrified=0;
            board[id-1].race=stone[id-1].race=0;
			document.getElementById('img'+id).src=getStoneSrc(board[id-1]);
		}
		else if(edit_index==10)		    // frozen stone
		{
			board[id-1].sp=stone[id-1].sp=1;
			board[id-1].undissolved=stone[id-1].undissolved=0;
			board[id-1].petrified=stone[id-1].petrified=0;
            board[id-1].race=stone[id-1].race=0;
			document.getElementById('img'+id).src=getStoneSrc(board[id-1]);
		}
		else if(edit_index==11)		    // undissolvable frozen stone
		{
			board[id-1].sp=stone[id-1].sp=5;
			board[id-1].undissolved=stone[id-1].undissolved=1;
			board[id-1].petrified=stone[id-1].petrified=0;
            board[id-1].race=stone[id-1].race=0;
			document.getElementById('img'+id).src=getStoneSrc(board[id-1]);
		}
        else if(edit_index==12)		    // petrified stone
		{
			board[id-1].sp=stone[id-1].sp=4;
			board[id-1].undissolved=stone[id-1].undissolved=0;
			board[id-1].petrified=stone[id-1].petrified=stone[id-1].petrified%3+1;
            board[id-1].race=stone[id-1].race=0;
			document.getElementById('img'+id).src=getStoneSrc(board[id-1]);
		}
		else if(edit_index>=13 && edit_index<=18)   // race stone
		{
			board[id-1].sp=stone[id-1].sp=0;
			board[id-1].undissolved=stone[id-1].undissolved=0;
			board[id-1].petrified=stone[id-1].petrified=0;
            board[id-1].race=stone[id-1].race=edit_index-12;
			document.getElementById('img'+id).src=getStoneSrc(board[id-1]);
		}
		
	}
}

function Random()
{
	for(var i=0; i<30; i++)
    {
        stone[i]={
            attr:1+parseInt(6*Math.random()),
            enchanted:0,
            sp:0,
            undissolved:0,
            petrified:0,
            race:0
        };
    }
	Reset();
}

function ChangeMode(mode)
{
	if(mode==0)
	{
		document.getElementById("movePanel").style.display='inline';
		document.getElementById("editPanel").style.display='none';
		document.getElementById("editSkill").style.display='none';
		document.getElementById("resultPanel").style.display='none';
		document.getElementById("moveMode").style.backgroundColor='#FF5511';
		document.getElementById("editMode1").style.backgroundColor='#D28EFF';
		document.getElementById("editMode2").style.backgroundColor='#D28EFF';
		document.getElementById("resultMode").style.backgroundColor='#FFBB66';
		document.getElementById("board").style.cursor='pointer';
		mode_s=0;
	}
	else if(mode==1)
	{
		document.getElementById("movePanel").style.display='none';
		document.getElementById("editPanel").style.display='inline';
		document.getElementById("editSkill").style.display='none';
		document.getElementById("resultPanel").style.display='none';
		document.getElementById("moveMode").style.backgroundColor='#FFBB66';
		document.getElementById("editMode1").style.backgroundColor='#7700BB';
		document.getElementById("editMode2").style.backgroundColor='#D28EFF';
		document.getElementById("resultMode").style.backgroundColor='#FFBB66';
		document.getElementById("board").style.cursor='not-allowed';
		Reset();
		mode_s=1;
	}
	else if(mode==2)
	{
		document.getElementById("movePanel").style.display='none';
		document.getElementById("editPanel").style.display='none';
		document.getElementById("editSkill").style.display='inline';
		document.getElementById("resultPanel").style.display='none';
		document.getElementById("moveMode").style.backgroundColor='#FFBB66';
		document.getElementById("editMode1").style.backgroundColor='#D28EFF';
		document.getElementById("editMode2").style.backgroundColor='#7700BB';
		document.getElementById("resultMode").style.backgroundColor='#FFBB66';
		document.getElementById("board").style.cursor='not-allowed';
		Reset();
		mode_s=1;
	}
	else if(mode==3)
	{
		document.getElementById("movePanel").style.display='none';
		document.getElementById("editPanel").style.display='none';
		document.getElementById("editSkill").style.display='none';
		document.getElementById("resultPanel").style.display='inline';
		document.getElementById("moveMode").style.backgroundColor='#FFBB66';
		document.getElementById("editMode1").style.backgroundColor='#D28EFF';
		document.getElementById("editMode2").style.backgroundColor='#D28EFF';
		document.getElementById("resultMode").style.backgroundColor='#FF5511';
		document.getElementById("board").style.cursor='not-allowed';
		mode_s=1;
	}
}

function StoneMode(smode)
{
	if(smode==0)
	{
		document.getElementById("normal_stone").style.display='block';
		document.getElementById("editSkill").style.display='none';
		document.getElementById("special_stone").style.display='none';
		document.getElementById("race_stone").style.display='none';
		document.getElementById("stoneMode0").style.color='#FFFF00';
		document.getElementById("stoneMode1").style.color='#0044BB';
		document.getElementById("stoneMode2").style.color='#0044BB';
	}
	else if(smode==1)
	{
		document.getElementById("normal_stone").style.display='none';
		document.getElementById("special_stone").style.display='block';
		document.getElementById("race_stone").style.display='none';
		document.getElementById("stoneMode0").style.color='#0044BB';
		document.getElementById("stoneMode1").style.color='#FFFF00';
		document.getElementById("stoneMode2").style.color='#0044BB';
	}
	else if(smode==2)
	{
		document.getElementById("normal_stone").style.display='none';
		document.getElementById("special_stone").style.display='none';
		document.getElementById("race_stone").style.display='block';
		document.getElementById("stoneMode0").style.color='#0044BB';
		document.getElementById("stoneMode1").style.color='#0044BB';
		document.getElementById("stoneMode2").style.color='#FFFF00';
	}
}

function SelectAttri(attr)
{
	if(mode_s==1)
    {
        if(edit_index>0) document.getElementById("e"+edit_index).style.backgroundColor='transparent';
        edit_index=attr;
        document.getElementById("e"+attr).style.backgroundColor='rgba(255, 136, 0, 0.6)';
    }
}

function InitModelPage()
{
    document.getElementById("modelPageText").value=model_page+' / '+max_page;
}

function ModelPage()
{
	var str='';
	
	model_page=(model_page<max_page)?model_page+1:1;
	for(var i=1; i<=max_page; i++)
	{
		str='model'+i;
		document.getElementById(str).style.display='none';
	}
	str='model'+model_page;
	document.getElementById(str).style.display='block';
    document.getElementById("modelPageText").value=model_page+' / '+max_page;
}

function SelectModel(model)         // active skill model
{
	if(mode_s==1)
	{
		switch(model)
		{
			case 1:
            case 1.1:
				var pos=[0,1,6,7,4,5,10,11,18,19,24,25,22,23,28,29];
				var loc=[0,1,0,2,0,3,1,2,1,3,2,3];
				var ra=parseInt(6*Math.random());
				var corner1=loc[ra*2], corner2=loc[ra*2+1];
				for(var i=0; i<4; i++)
                {
                    stone[pos[corner1*4+i]].attr=1;
                    stone[pos[corner2*4+i]].attr=1;
                    stone[pos[corner1*4+i]].sp=0;
                    stone[pos[corner2*4+i]].sp=0;
                    stone[pos[corner1*4+i]].undissolved=0;
                    stone[pos[corner2*4+i]].undissolved=0;
                    stone[pos[corner1*4+i]].petrified=0;
                    stone[pos[corner2*4+i]].petrified=0;
                    stone[pos[corner1*4+i]].race=(model==1)?stone[pos[corner1*4+i]].race:1;
                    stone[pos[corner2*4+i]].race=(model==1)?stone[pos[corner2*4+i]].race:1;
				}
			break;
			case 2:
			case 2.1:
				var pos=[0,1,6,7,4,5,10,11,18,19,24,25,22,23,28,29];
				var loc=[0,1,0,2,0,3,1,2,1,3,2,3];
				var ra=parseInt(6*Math.random());
				var corner1=loc[ra*2], corner2=loc[ra*2+1];
				for(var i=0; i<4; i++)
                {
                    stone[pos[corner1*4+i]].attr=5;
                    stone[pos[corner2*4+i]].attr=5;
                    stone[pos[corner1*4+i]].sp=0;
                    stone[pos[corner2*4+i]].sp=0;
                    stone[pos[corner1*4+i]].undissolved=0;
                    stone[pos[corner2*4+i]].undissolved=0;
                    stone[pos[corner1*4+i]].petrified=0;
                    stone[pos[corner2*4+i]].petrified=0;
                    stone[pos[corner1*4+i]].race=(model==2)?stone[pos[corner1*4+i]].race:1;
                    stone[pos[corner2*4+i]].race=(model==2)?stone[pos[corner2*4+i]].race:1;
				}
			break;
			case 3:
				for(var i=0; i<19; i+=6)
                {
                    stone[i].attr=6;
                    stone[i].sp=0;
                    stone[i].undissolved=0;
                    stone[i].petrified=0;
				}
                for(var i=24; i<30; i++)
                {
                    stone[i].attr=1;
                    stone[i].sp=0;
                    stone[i].undissolved=0;
                    stone[i].petrified=0;
				}
			break;
			case 4:
                var arr1=[3,4,6,7,9,10,19,20,22,23,25,26];
				for(var i=0; i<12; i++)
                {
                    stone[arr1[i]].attr=6;
                    stone[arr1[i]].sp=0;
                    stone[arr1[i]].undissolved=0;
                    stone[arr1[i]].petrified=0;
                }
                var arr2=[0,1,2,5,8,11,12,13,14,15,16,17,18,21,24,27,28,29];
                for(var i=0; i<18; i++)
                {
                    stone[arr2[i]].attr=2;
                    stone[arr2[i]].enchanted=1;
                    stone[arr2[i]].sp=0;
                    stone[arr2[i]].undissolved=0;
                    stone[arr2[i]].petrified=0;
				}
			break;
			case 5:
				var arr1=[3,4,6,7,9,10,19,20,22,23,25,26];
				for(var i=0; i<12; i++)
                {
                    stone[arr1[i]].attr=6;
                    stone[arr1[i]].sp=0;
                    stone[arr1[i]].undissolved=0;
                    stone[arr1[i]].petrified=0;
                }
                var arr2=[0,1,2,5,8,11,12,13,14,15,16,17,18,21,24,27,28,29];
                for(var i=0; i<18; i++)
                {
                    stone[arr2[i]].attr=5;
                    stone[arr2[i]].enchanted=1;
                    stone[arr2[i]].sp=0;
                    stone[arr2[i]].undissolved=0;
                    stone[arr2[i]].petrified=0;
				}
			break;
			case 6:
				var arr1=[2,3,7,10,12,13,16,17,19,22,26,27];
				for(var i=0; i<12; i++)
                {
                    stone[arr1[i]].attr=6;
                    stone[arr1[i]].sp=0;
                    stone[arr1[i]].undissolved=0;
                    stone[arr1[i]].petrified=0;
                }
                var arr2=[0,1,4,5,6,8,9,11,14,15,18,20,21,23,24,25,28,29];
                for(var i=0; i<18; i++)
                {
                    stone[arr2[i]].attr=5;
                    stone[arr2[i]].sp=0;
                    stone[arr2[i]].undissolved=0;
                    stone[arr2[i]].petrified=0;
				}
			break;
			case 7:
				var num=[8,8,8,0,0,6];
                var arr=[], attr=[];
                for(var i=0; i<30; i++) arr.push(i);
                for(var i=0; i<6; i++)
                {
                    for(var j=0; j<num[i]; j++) attr.push(i+1);
                }
                
                arr=randomGenerator(arr, 30);
                for(var i=0; i<arr.length; i++)
                {
                    stone[arr[i]].attr=attr[i];
                    stone[arr[i]].sp=0;
                    stone[arr[i]].undissolved=0;
                    stone[arr[i]].petrified=0;
                }
			break;
			case 8:
				var num=[0,0,0,15,15,0];
                var arr=[], attr=[];
                for(var i=0; i<30; i++) arr.push(i);
                for(var i=0; i<6; i++)
                {
                    for(var j=0; j<num[i]; j++) attr.push(i+1);
                }
                
                arr=randomGenerator(arr, 30);
                for(var i=0; i<arr.length; i++)
                {
                    stone[arr[i]].attr=attr[i];
                    stone[arr[i]].sp=0;
                    stone[arr[i]].undissolved=0;
                    stone[arr[i]].petrified=0;
                }
			break;
			case 9:
                var arr=[2,3,8,9,12,13,14,15,16,17,20,21,26,27];
				for(var i=0; i<14; i++)
                {
                    stone[arr[i]].attr=4;
                    stone[arr[i]].sp=0;
                    stone[arr[i]].undissolved=0;
                    stone[i].petrified=0;
                }
			break;
			case 10:
				var arr=[1,2,2,3,6];
				for(var i=0; i<30; i++)
				{
					var ra=parseInt(5*Math.random());
                    stone[i].attr=arr[ra];
                    stone[i].enchanted=(stone[i].attr==2)?1:stone[i].enchanted;
                    stone[i].sp=0;
                    stone[i].undissolved=0;
                    stone[i].petrified=0;
				}
			break;
			case 11:
				var arr=[0,3,7,10,14,17,18,21,25,28];
				for(var i=0; i<10; i++)
                {
                    stone[arr[i]].enchanted=(stone[arr[i]].attr==2)?1:stone[arr[i]].enchanted;
                    stone[arr[i]].attr=2;
                    stone[arr[i]].sp=0;
                    stone[arr[i]].undissolved=0;
                    stone[arr[i]].petrified=0;
                }
			break;
			case 12:
			case 12.1:
				var arr=[6,6,6,6,6,0];
				for(var i=0; i<30; i++)
				{
					var ok=0;
					while(!ok)
					{
						var ra=parseInt(6*Math.random());
						if(arr[ra]>0)
						{
							stone[i].attr=ra+1;
                            stone[i].sp=0;
                            stone[i].enchanted=(model==12)?stone[i].enchanted:1;
                            stone[i].undissolved=0;
                            stone[i].petrified=0;
							arr[ra]--;
							ok=1;
						}
					}
				}
			break;
			case 13:
				for(var i=0; i<5; i++)
                {
                    stone[i*6].attr=1;
                    stone[i*6].sp=0;
                    stone[i*6].undissolved=0;
                    stone[i*6].petrified=0;
                    stone[i*6+5].attr=4;
                    stone[i*6+5].sp=0;
                    stone[i*6+5].undissolved=0;
                    stone[i*6+5].petrified=0;
                }
            break;
			case 14:
				var arr=[1,2,11,12,17,18,27,28];
				for(var i=0; i<8; i++)
                {
                    stone[arr[i]].attr=2;
                    stone[arr[i]].sp=0;
                    stone[arr[i]].undissolved=0;
                    stone[arr[i]].petrified=0;
                }
			break;
			case 15:
				var num=[0,0,0,0,15,15];
                var arr=[], attr=[];
                for(var i=0; i<30; i++) arr.push(i);
                for(var i=0; i<6; i++)
                {
                    for(var j=0; j<num[i]; j++) attr.push(i+1);
                }
                
                arr=randomGenerator(arr, 30);
                for(var i=0; i<arr.length; i++)
                {
                    stone[arr[i]].attr=attr[i];
                    stone[arr[i]].sp=0;
                    stone[arr[i]].undissolved=0;
                    stone[arr[i]].petrified=0;
                }
			break;
			case 16:
				var arr=[3,6,3,0,0,0,
						 6,3,6,0,0,0,
						 6,3,3,0,0,0,
						 2,6,3,0,0,0,
						 2,2,6,0,0,0];
				for(i=0; i<30; i++)
				{
					if(arr[i]!=0)
                    {
                        stone[i].attr=arr[i];
                        stone[i].sp=0;
                        stone[i].undissolved=0;
                        stone[i].petrified=0;
                    }
                }
			break;
			case 17:
				var arr=[0,0,0,1,6,1,
						 0,0,0,6,1,6,
						 0,0,0,1,1,6,
						 0,0,0,1,6,2,
						 0,0,0,6,2,2];
				for(i=0; i<30; i++)
				{
					if(arr[i]!=0)
                    {
                        stone[i].attr=arr[i];
                        stone[i].sp=0;
                        stone[i].undissolved=0;
                        stone[i].petrified=0;
                    }
                }
			break;
			case 18:
				for(i=0; i<30; i++)
				{
					if(stone[i].attr==4)
                    {
                        stone[i].attr=1;
                        stone[i].sp=0;
                        stone[i].undissolved=0;
                        stone[i].petrified=0;
                    }
					else if(stone[i].attr==5)
                    {
                        stone[i].attr=2;
                        stone[i].sp=0;
                        stone[i].undissolved=0;
                        stone[i].petrified=0;
                    }
					else if(stone[i].attr==6)
                    {
                        stone[i].attr=3;
                        stone[i].sp=0;
                        stone[i].undissolved=0;
                        stone[i].petrified=0;
                    }
				}
			break;
			case 19:
				for(i=0; i<30; i++)
				{
					if(stone[i].attr==1)
                    {
                        stone[i].attr=4;
                        stone[i].sp=0;
                        stone[i].undissolved=0;
                        stone[i].petrified=0;
                    }
					else if(stone[i].attr==2)
                    {
                        stone[i].attr=5;
                        stone[i].sp=0;
                        stone[i].undissolved=0;
                        stone[i].petrified=0;
                    }
					else if(stone[i].attr==3)
                    {
                        stone[i].attr=6;
                        stone[i].sp=0;
                        stone[i].undissolved=0;
                        stone[i].petrified=0;
                    }
				}
			break;
			case 20:
				var arr=[3,3,6,6,3,3,
						 6,6,3,3,6,6,
						 3,3,6,6,3,3,
						 6,6,3,3,6,6,
						 3,3,6,6,3,3];
				for(i=0; i<30; i++)
				{
					stone[i].attr=arr[i];
                    stone[i].enchanted=(stone[i].attr==3)?1:stone[i].enchanted;
                    stone[i].sp=0;
                    stone[i].undissolved=0;
                    stone[i].petrified=0;
				}
			break;
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
				var arr=[0,1,4,5,6,11,18,23,24,25,28,29];
				for(i=0; i<12; i++)
				{
                    stone[arr[i]].attr=model-20;
                    stone[arr[i]].sp=0;
                    stone[arr[i]].undissolved=0;
                    stone[arr[i]].petrified=0;
				}
			break;
			case 26:
				for(i=0; i<30; i++)
				{
					stone[i].attr=(stone[i].attr==6)?6:4;
                    stone[i].enchanted=1;
                    stone[i].sp=0;
                    stone[i].undissolved=0;
                    stone[i].petrified=0;
				}
			break;
			case 27:
				var pos=[0,1,6,7,4,5,10,11,18,19,24,25,22,23,28,29];
				var loc=[0,1,0,2,0,3,1,2,1,3,2,3];
				var ra=parseInt(6*Math.random());
				var corner1=loc[ra*2], corner2=loc[ra*2+1];
				for(var i=0; i<4; i++)
                {
                    stone[pos[corner1*4+i]].attr=3;
                    stone[pos[corner2*4+i]].attr=3;
                    stone[pos[corner1*4+i]].sp=0;
                    stone[pos[corner2*4+i]].sp=0;
                    stone[pos[corner1*4+i]].undissolved=0;
                    stone[pos[corner2*4+i]].undissolved=0;
                    stone[pos[corner1*4+i]].petrified=0;
                    stone[pos[corner2*4+i]].petrified=0;
				}
			break;
			case 28:
				var arr=[0,5,24,29];
				for(i=0; i<4; i++)
				{
					stone[arr[i]].attr=2;
                    stone[arr[i]].sp=0;
                    stone[arr[i]].undissolved=0;
                    stone[arr[i]].petrified=0;
				}
                for(i=0; i<30; i++)
				{
					if(stone[i].attr==3)
                    {
                        stone[i].attr=2;
                        stone[i].enchanted=1;
                        stone[i].sp=0;
                        stone[i].undissolved=0;
                        stone[i].petrified=0;
                    }
                }
			break;
            case 29:
                var corner=[0,1,6,4,5,11,18,24,25,23,28,29];
                var comb=[1,4,6,1,6,4,4,1,6,4,6,1,6,1,4,6,4,1];
                var vac=parseInt(4*Math.random());
                var col=parseInt(6*Math.random());
                var poi=0;
                for(var i=0; i<4; i++)
                {
                    if(vac==i) continue;
                    for(var j=0; j<3; j++)
                    {
                        stone[corner[i*3+j]].attr=comb[col*3+poi];
                        stone[corner[i*3+j]].sp=0;
                        stone[corner[i*3+j]].undissolved=0;
                        stone[corner[i*3+j]].petrified=0;
                    }
                    poi++;
                }
            break;
            case 30:
				var num=[10,0,0,10,0,10];
                var arr=[], attr=[];
                for(var i=0; i<30; i++) arr.push(i);
                for(var i=0; i<6; i++)
                {
                    for(var j=0; j<num[i]; j++) attr.push(i+1);
                }
                
                arr=randomGenerator(arr, 30);
                for(var i=0; i<arr.length; i++)
                {
                    stone[arr[i]].attr=attr[i];
                    stone[arr[i]].enchanted=1;
                    stone[arr[i]].sp=0;
                    stone[arr[i]].undissolved=0;
                    stone[arr[i]].petrified=0;
                }
			break;
            case 31:
				for(var i=0; i<30; i++)
                {
                    if(stone[i].attr==4 || stone[i].attr==5)
                    {
                        stone[i].attr=2;
                        stone[i].sp=0;
                        stone[i].undissolved=0;
                        stone[i].petrified=0;
                        stone[i].race=1;
                    }
                    else if(stone[i].attr==1 || stone[i].attr==3)
                    {
                        stone[i].attr=6;
                        stone[i].sp=0;
                        stone[i].undissolved=0;
                        stone[i].petrified=0;
                    }
                }
			break;
            case 32:
                var arr=[1,1,1,1,1,0];
                var left=25;
                for(var i=0; i<4; i++) arr[i]+=parseInt(left*Math.random());
                arr[4]+=left;
                
				for(var i=0; i<30; i++)
				{
					var ok=0;
					while(!ok)
					{
						var ra=parseInt(6*Math.random());
						if(arr[ra]>0)
						{
							stone[i].attr=ra+1;
                            stone[i].sp=0;
                            stone[i].undissolved=0;
                            stone[i].petrified=0;
							arr[ra]--;
							ok=1;
						}
					}
				}
			break;
			case 33:
				var num=[0,8,8,0,8,6];
                var arr=[], attr=[];
                for(var i=0; i<30; i++) arr.push(i);
                for(var i=0; i<6; i++)
                {
                    for(var j=0; j<num[i]; j++) attr.push(i+1);
                }
                
                arr=randomGenerator(arr, 30);
                for(var i=0; i<arr.length; i++)
                {
                    stone[arr[i]].attr=attr[i];
                    stone[arr[i]].enchanted=1;
                    stone[arr[i]].sp=0;
                    stone[arr[i]].undissolved=0;
                    stone[arr[i]].petrified=0;
                }
			break;
			case 34:
				var arr=[6,6,6,2,3,5,
						 2,3,5,2,3,5,
						 2,3,5,2,3,5,
						 2,3,5,2,3,5,
						 2,3,5,6,6,6];
				for(i=0; i<30; i++)
				{
					stone[i].attr=arr[i];
                    stone[i].enchanted=1;
                    stone[i].sp=0;
                    stone[i].undissolved=0;
                    stone[i].petrified=0;
				}
			break;
			case 35:
				for(i=0; i<30; i++)
				{
					if(stone[i].attr==1 || stone[i].attr==4 || stone[i].attr==5)
                    {
                        stone[i].attr=6;
                        stone[i].enchanted=1;
                        stone[i].sp=0;
                        stone[i].undissolved=0;
                        stone[i].petrified=0;
                    }
				}
			break;
			case 36:
				var arr=[0,5,6,11,12,17,19,22,26,27];
				for(i=0; i<10; i++)
				{
                    stone[arr[i]].attr=1;
                    stone[arr[i]].sp=0;
                    stone[arr[i]].undissolved=0;
                    stone[arr[i]].petrified=0;
				}
			break;
            case 37:
                var arr1=[3,4,6,7,9,10,19,20,22,23,25,26];
				for(var i=0; i<12; i++)
                {
                    stone[arr1[i]].attr=6;
                    stone[arr1[i]].sp=0;
                    stone[arr1[i]].undissolved=0;
                    stone[arr1[i]].petrified=0;
                }
                var arr2=[0,1,2,5,8,11,12,13,14,15,16,17,18,21,24,27,28,29];
                for(var i=0; i<18; i++)
                {
                    stone[arr2[i]].attr=1;
                    stone[arr2[i]].enchanted=1;
                    stone[arr2[i]].sp=0;
                    stone[arr2[i]].undissolved=0;
                    stone[arr2[i]].petrified=0;
				}
			break;
            case 38:
                for(var i=0; i<30; i++)
                {
                    if(stone[i].attr==4 || stone[i].attr==5)
                    {
                        stone[i].attr=2;
                        stone[i].enchanted=1;
                        stone[i].sp=0;
                        stone[i].undissolved=0;
                        stone[i].petrified=0;
                    }
                }
            break;
            case 39:
                var arr=[];
                for(var i=0; i<30; i++) arr.push(i);
                arr=randomGenerator(arr, 6);
                for(var i=0; i<arr.length; i++) stone[arr[i]].attr=1, stone[arr[i]].sp=0, stone[arr[i]].race=3;
            break;
            case 40:
                for(var i=0; i<30; i++)
                {
                    if(stone[i].attr==6)
                    {
                        stone[i].attr=3;
                        stone[i].enchanted=1;
                        stone[i].sp=0;
                        stone[i].undissolved=0;
                        stone[i].petrified=0;
                    }
                }
            break;
            case 41:
                for(var i=0; i<30; i++)
                {
                    if(stone[i].sp==5)
                    {
                        stone[i].sp=1;
                        stone[i].undissolved=0;
                    }
                }
            break;
            case 42:
                for(var i=0; i<30; i++)
                {
                    if(stone[i].attr==1)
                    {
                        stone[i].attr=2;
                        stone[i].enchanted=1;
                        stone[i].sp=0;
                        stone[i].undissolved=0;
                        stone[i].petrified=0;
                    }
                }
            break;
            case 43:
                for(var i=0; i<30; i++)
                {
                    if(stone[i].attr==4 || stone[i].attr==6)
                    {
                        stone[i].attr=1;
                        stone[i].sp=0;
                        stone[i].undissolved=0;
                        stone[i].petrified=0;
                    }
                }
            break;
            case 43.1:
                for(var i=0; i<30; i++)
                {
                    if(stone[i].attr==5 || stone[i].attr==6)
                    {
                        stone[i].attr=1;
                        stone[i].enchanted=1;
                        stone[i].sp=0;
                        stone[i].undissolved=0;
                        stone[i].petrified=0;
                    }
                }
            break;
            case 44:
            case 45:
                for(var i=0; i<30; i++)
                {
                    if(stone[i].attr==model-42)
                    {
                        stone[i].race=1;
                        stone[i].sp=0;
                        stone[i].undissolved=0;
                        stone[i].petrified=0;
                    }
                }
            break;
            case 46:
                var cnt=0;
                var arr=[];
                for(var i=0; i<30; i++)
                {
                    if(stone[i].attr!=1 || stone[i].enchanted!=1) arr.push(i);
                    else cnt++;
                }
                arr=randomGenerator(arr, Math.max(0, 20-cnt));
                for(var i=0; i<Math.max(0, 20-cnt); i++)
                {
                    stone[arr[i]].attr=1;
                    stone[arr[i]].enchanted=1;
                }
            break;
            case 47:
                for(var i=0; i<30; i++)
                {
                    if(stone[i].attr==3)
                    {
                        stone[i].attr=4;
                        stone[i].enchanted=1;
                        stone[i].sp=0;
                        stone[i].undissolved=0;
                        stone[i].petrified=0;
                    }
                }
            break;
            case 48:
                var cnt=0;
                var arr=[];
                for(var i=0; i<30; i++)
                {
                    if(stone[i].attr!=6) arr.push(i), cnt++;
                }
                arr=randomGenerator(arr, Math.min(cnt, 8));
                for(var i=0; i<Math.min(cnt, 8); i++)
                {
                    stone[arr[i]].attr=6;
                    stone[arr[i]].enchanted=1;
                }
            break;
            case 49:
                for(var i=0; i<30; i++)
                {
                    if(stone[i].attr==1 || stone[i].attr==2 || stone[i].attr==3)
                    {
                        stone[i].attr=6;
                        stone[i].enchanted=1;
                        stone[i].sp=0;
                        stone[i].undissolved=0;
                        stone[i].petrified=0;
                    }
                    else if(stone[i].attr==5)
                    {
                        stone[i].attr=4;
                        stone[i].sp=0;
                        stone[i].undissolved=0;
                        stone[i].petrified=0;
                    }
                }
            break;
            case 50:
                for(var i=0; i<30; i++)
                {
                    if(stone[i].attr==2)
                    {
                        stone[i].attr=3;
                        stone[i].sp=0;
                        stone[i].undissolved=0;
                        stone[i].petrified=0;
                    }
                    else if(stone[i].attr==1)
                    {
                        stone[i].attr=4;
                        stone[i].sp=0;
                        stone[i].undissolved=0;
                        stone[i].petrified=0;
                    }
                }
            break;
            case 51:
                for(var i=0; i<30; i++)
                {
                    if(stone[i].attr==2 || stone[i].attr==3)
                    {
                        stone[i].attr=1;
                        stone[i].sp=0;
                        stone[i].undissolved=0;
                        stone[i].petrified=0;
                    }
                }
            break;
            case 52:
                for(var i=0; i<30; i++)
                {
                    if(stone[i].attr==3 || stone[i].attr==4)
                    {
                        stone[i].attr=1;
                        stone[i].enchanted=1;
                        stone[i].sp=0;
                        stone[i].undissolved=0;
                        stone[i].petrified=0;
                    }
                    else if(stone[i].attr==5 || stone[i].attr==6)
                    {
                        stone[i].attr=2;
                        stone[i].enchanted=1;
                        stone[i].sp=0;
                        stone[i].undissolved=0;
                        stone[i].petrified=0;
                    }
                }
            break;
		}
		Reset();
	}
}

function shuffle(array)
{
    var tmp, current, top=array.length;
    if(top)
    {
        while(--top)
        {
            current=Math.floor(Math.random()*(top+1));
            tmp=array[current];
            array[current]=array[top], array[top]=tmp;
        }
    }
    return array;
}

function randomGenerator(array, num)
{
    var arr=[], res=[];
    arr=shuffle(array);
    for(var i=0; i<num; i++) res[i]=arr[i];
    return res;
}

function ChangeCharacter(id)
{
    switch(id)
    {
        case 1:
            document.getElementById("char1").style.display="none";
            document.getElementById("char1.1").style.display="inline";
            document.getElementById("change1").style.display="none";
            document.getElementById("change1.1").style.display="inline";
        break;
        case 1.1:
            document.getElementById("char1.1").style.display="none";
            document.getElementById("char1").style.display="inline";
            document.getElementById("change1.1").style.display="none";
            document.getElementById("change1").style.display="inline";
        break;
        case 2:
            document.getElementById("char2").style.display="none";
            document.getElementById("char2.1").style.display="inline";
            document.getElementById("change2").style.display="none";
            document.getElementById("change2.1").style.display="inline";
        break;
        case 2.1:
            document.getElementById("char2.1").style.display="none";
            document.getElementById("char2").style.display="inline";
            document.getElementById("change2.1").style.display="none";
            document.getElementById("change2").style.display="inline";
        break;
        case 12:
            document.getElementById("char12").style.display="none";
            document.getElementById("char12.1").style.display="inline";
            document.getElementById("change12").style.display="none";
            document.getElementById("change12.1").style.display="inline";
        break;
        case 12.1:
            document.getElementById("char12.1").style.display="none";
            document.getElementById("char12").style.display="inline";
            document.getElementById("change12.1").style.display="none";
            document.getElementById("change12").style.display="inline";
        break;
        case 43:
            document.getElementById("char43").style.display="none";
            document.getElementById("char43.1").style.display="inline";
            document.getElementById("change43").style.display="none";
            document.getElementById("change43.1").style.display="inline";
        break;
        case 43.1:
            document.getElementById("char43.1").style.display="none";
            document.getElementById("char43").style.display="inline";
            document.getElementById("change43.1").style.display="none";
            document.getElementById("change43").style.display="inline";
        break;
    }
}

function MoveTimeControl(time)
{
	move_time=time*1000;
	document.getElementById("timeSpan").innerHTML = '轉珠時間：'+time+' 秒';
	Reset();
}

function DissolveModeControl(mode)
{
	dissolve_mode=mode;
	var str;
	if(mode==0) str='一般';
	else if(mode==1) str='三消';
	else if(mode==2) str='火二消';
	else if(mode==3) str='木二消';
	else if(mode==4) str='火木二消';
	else if(mode==5) str='二消';
	else if(mode==6) str='四消';
	document.getElementById("dissolveSpan").innerHTML = '消除模式：'+str;
	Reset();
}

function MoveModeControl(mode)
{
	move_mode=mode;
	var str;
	if(mode==0) str='一般';
	else if(mode==1) str='排珠';
	document.getElementById("moveSpan").innerHTML = '轉珠模式：'+str;
	Reset();
}

function BoardSkillReset()
{
    for(var i=0; i<30; i++)
    {
        board[i].sp=stone[i].sp=0;
        board[i].undissolved=stone[i].undissolved=0;
        board[i].petrified=stone[i].petrified=0;
        board[i].race=stone[i].race=0;
    }
}

function RefreshBoard()
{
    for(var i=0; i<30; i++) document.getElementById('img'+(i+1)).src=getStoneSrc(board[i]);
}

function EnemySkillControl(skill)
{
	if(skill>=0 && skill<=5)
	{
        var bgcolor=['#888888', '#00AA00', '#00AA00',
                     '#CC0000', '#FF0088', '#CC0000'];
        var txcolor=['#DDDDDD', '#00FF00', '#00FF00',
                     '#FF0000', '#FF88C2', '#FF0000'];
        
        document.getElementById("et1_"+enemy_skill).style.backgroundColor='transparent';
        document.getElementById("et1_"+enemy_skill).style.color=txcolor[enemy_skill];
        
		enemy_skill=skill;
		for(var i=0; i<=5; i++) eskill[i]=0;
		eskill[skill]=1;
        
        document.getElementById("et1_"+skill).style.backgroundColor=bgcolor[skill];
        document.getElementById("et1_"+skill).style.color='#FFFFFF';
	}
	else if(skill>=6 && skill<=11)
    {
        var bgcolor=['#0066FF', '#CC0000', '#00AA00',
                     '#FFBB00', '#7700FF', '#FF0088'];
        var txcolor=['#00FFFF', '#FF0000', '#00FF00',
                     '#FFFF00', '#9955FF', '#FF88C2'];
        
        eskill[skill]=(eskill[skill]==0)?1:0;
        
        document.getElementById("et3_"+(skill-6)).style.backgroundColor=(eskill[skill]==1)?bgcolor[skill-6]:'transparent';
        document.getElementById("et3_"+(skill-6)).style.color=(eskill[skill]==1)?'#FFFFFF':txcolor[skill-6];
    }
	if(skill==0)
	{
		if(pskill[6]==0) BackReconstruct();
        else if(pskill[6]==1) DrawXExplode();
		document.getElementById("fire_icon").style.display='none';
		document.getElementById("drf").style.display='none';
		document.getElementById("heal_icon").style.display='none';
		document.getElementById("drh").style.display='none';
		document.getElementById("ftd").style.display='none';
		document.getElementById("htd").style.display='none';
		esstr1='';
		estype1=0;
	}
	else if(skill==1 || skill==2)
	{
		BackReconstruct();
		document.getElementById("fire_icon").style.display='none';
		document.getElementById("drf").style.display='none';
		document.getElementById("heal_icon").style.display='none';
		document.getElementById("drh").style.display='none';
		document.getElementById("ftd").style.display='none';
		document.getElementById("htd").style.display='none';
		esstr1='<img src="./img/corrosion_icon.png" style="width:25pt;">';
		estype1=1;
	}
	else if(skill==3)
	{
		BackReconstruct();
		document.getElementById("fire_icon").style.display='block';
		document.getElementById("drf").style.display='block';
		document.getElementById("heal_icon").style.display='none';
		document.getElementById("drh").style.display='none';
		document.getElementById("ftd").style.display='block';
		document.getElementById("htd").style.display='none';
		esstr1='<img src="./img/fire_icon.png" style="width:25pt;">';
		estype1=1;
	}
	else if(skill==4)
	{
		BackReconstruct();
		document.getElementById("heal_icon").style.display='block';
		document.getElementById("drh").style.display='block';
		document.getElementById("fire_icon").style.display='none';
		document.getElementById("drf").style.display='none';
		document.getElementById("htd").style.display='block';
		document.getElementById("ftd").style.display='none';
		esstr1='<img src="./img/heal_icon.png" style="width:25pt;">';
		estype1=1;
	}
	else if(skill==5)
	{
		DrawXFire();
		document.getElementById("fire_icon").style.display='block';
		document.getElementById("drf").style.display='block';
		document.getElementById("heal_icon").style.display='none';
		document.getElementById("drh").style.display='none';
		document.getElementById("ftd").style.display='block';
		document.getElementById("htd").style.display='none';
		esstr1='<img src="./img/fire_icon.png" style="width:25pt;">';
		estype1=1;
	}
	else if(skill>=6 && skill<=11)
	{
		var id=(skill-5)%6;
		undissolve[id]=(undissolve[id]==0)?1:0;
		if(undissolve[id]==1)
		{
			esstr2[id]='<img src="'+no_dissolve_img[id]+'" style="width:25pt;">';
			estype2++;
		}
		else
		{
			esstr2[id]='';
			estype2--;
		}
	}
    else if(skill==12)          // all-rune locked
    {
        BoardSkillReset();
        for(var i=0; i<30; i++) board[i].sp=stone[i].sp=3;
        RefreshBoard();
    }
    else if(skill==13)          // all-rune frozen
    {
        BoardSkillReset();
        for(var i=0; i<30; i++) board[i].sp=stone[i].sp=1;
        RefreshBoard();
    }
    else if(skill==14)          // all-rune frozen (undissolvable)
    {
        BoardSkillReset();
        for(var i=0; i<30; i++) board[i].sp=stone[i].sp=5, board[i].undissolved=stone[i].undissolved=1;
        RefreshBoard();
    }
    else if(skill==15)          // bottom horizontal weathered
    {
        BoardSkillReset();
        for(var i=24; i<30; i++) board[i].sp=stone[i].sp=2;
        RefreshBoard();
    }
    else if(skill==16)          // left and right weathered
    {
        BoardSkillReset();
        for(var i=0; i<30; i++)
        {
            if(i%6==0 || i%6==5) board[i].sp=stone[i].sp=2;
        }
        RefreshBoard();
    }
    else if(skill==17)          // X-shaped weathered
    {
        BoardSkillReset();
        var pos=[0,5,7,10,14,15,19,22,24,29];
        for(var i=0; i<10; i++) board[pos[i]].sp=stone[pos[i]].sp=2;
        RefreshBoard();
    }
	else if(skill==18)          // middle horizontal weathered
    {
        BoardSkillReset();
        for(var i=12; i<18; i++) board[i].sp=stone[i].sp=2;
        RefreshBoard();
    }
	else if(skill==19)          // bottom horizontal frozen
    {
        BoardSkillReset();
        for(var i=24; i<30; i++) board[i].sp=stone[i].sp=1;
        RefreshBoard();
    }
	else if(skill==20)          // snow-flake-shape frozen (undissolvable)
    {
        BoardSkillReset();
        var rand=parseInt(2*Math.random());
        var pos=[0,2,4,7,8,9,12,13,15,16,19,20,21,24,26,28];
        for(var i=0; i<16; i++) board[pos[i]+rand].sp=stone[pos[i]+rand].sp=1;
        RefreshBoard();
    }
	else if(skill==21)          // snow-flake-shape frozen
    {
        BoardSkillReset();
        var rand=parseInt(2*Math.random());
        var pos=[0,2,4,7,8,9,12,13,15,16,19,20,21,24,26,28];
        for(var i=0; i<16; i++) board[pos[i]+rand].sp=stone[pos[i]+rand].sp=5, board[pos[i]+rand].undissolved=stone[pos[i]+rand].undissolved=1;
        RefreshBoard();
    }
	var str2_all='';
	for(var i=0; i<6; i++) str2_all+=esstr2[i];
	
	document.getElementById("skillSpanE").innerHTML = (estype1==0 && estype2==0)?'敵方技能：<font style="color:#FFFFFF;">無</font><br>':'敵方技能：'+esstr1+str2_all+'<br>';
	document.getElementById("enemy_hint").innerHTML = (estype1==0 && estype2==0)?'':esstr1+str2_all;
}

function PlayerSkillControl(skill)
{
	if(skill>=0 && skill<=5)    // break runes
	{
        pskill[skill]=(pskill[skill]==0)?1:0;
		var id=skill%6;
		break_stone[id]=(break_stone[id]==0)?1:0;
		if(break_stone[id]==1)
		{
			psstr1[id]='<img src="'+break_img[id]+'" style="width:25pt;">';
			pstype1++;
		}
		else
		{
			psstr1[id]='';
			pstype1--;
		}
	}
    else if(skill==6)           // X-shaped break runes
    {
        pskill[6]=(pskill[6]==0)?1:0;
        break_stone[6]=(break_stone[6]==0)?1:0;
        if(break_stone[6]==1)
		{
            DrawXExplode();
			psstr1[6]='<img src="'+break_img[6]+'" style="width:25pt;">';
			pstype1++;
		}
		else
		{
            if(eskill[5]==0) BackReconstruct();
            else if(eskill[5]==1) DrawXFire();
			psstr1[6]='';
			pstype1--;
            
		}
    }
    else if(skill==7)           // all-rune enchanted
    {
        BoardSkillReset();
        for(var i=0; i<30; i++)board[i].enchanted=stone[i].enchanted=1;
        RefreshBoard();
    }
    else if(skill==8)           // all-rune normalized
    {
        BoardSkillReset();
        for(var i=0; i<30; i++) board[i].enchanted=stone[i].enchanted=0;
        RefreshBoard();
    }
    else if(skill>=9 && skill<=14)      // all-rune change attribute
    {
        BoardSkillReset();
        for(var i=0; i<30; i++) board[i].attr=stone[i].attr=skill-8;
        RefreshBoard();
    }
	
	var str1_all='';
	for(var i=0; i<7; i++) str1_all+=psstr1[i];
    
    if(skill>=0 && skill<=6)
    {
        var bgcolor=['#FF0088', '#0066FF', '#CC0000',
                     '#00AA00', '#FFBB00', '#7700FF',
                     '#888888'];
        var txcolor=['#FF88C2', '#00FFFF', '#FF0000',
                     '#00FF00', '#FFFF00', '#9955FF',
                     '#AAAAAA'];
        
        document.getElementById("pt1_"+skill).style.backgroundColor=(pskill[skill]==1)?bgcolor[skill]:'transparent';
        document.getElementById("pt1_"+skill).style.color=(pskill[skill]==1)?'#FFFFFF':txcolor[skill];
    }
	
	document.getElementById("skillSpanP").innerHTML = (pstype1==0)?'隊伍技能：<font style="color:#FFFFFF;">無</font><br>':'隊伍技能：'+str1_all+'<br>';
	document.getElementById("player_hint").innerHTML = (pstype1==0)?'':str1_all;
}

function BackReconstruct()
{
	for(var i=0; i<30; i++)
	{
        if(i==0 || i==2 || i==4 || i==7 || i==9 || i==11 || i==12 || i==14 || i==16 || i==19 || i==21 || i==23 || i==24 || i==26 || i==28) document.getElementById('p'+(i+1)).style.backgroundImage='url('+back_img[0]+')';
        else document.getElementById('p'+(i+1)).style.backgroundImage='url('+back_img[1]+')';
        
        if(pskill[6]==1)
        {
            var arr=[1,6,8,11,15,16,20,23,25,30];
            for(var j=0; j<10; j++)
            {
                document.getElementById('p'+arr[j]).style.backgroundImage='url('+back_img[(5+(j%2))]+')';
            }
        }
    }
}

function DrawCorrosion()
{
	BackReconstruct();
	if(enemy_skill==1)
	{
		for(var i=0; i<6; i++)
		{
			if(corrosion[i]>0)
            {
                var arr=[1,6,8,11,15,16,20,23,25,30];
                if(pskill[6]==1 && arr.indexOf(corrosion[i])!=-1)
                {
                    document.getElementById('p'+corrosion[i]).style.backgroundImage='url('+back_img[7]+')';
                }
                else document.getElementById('p'+corrosion[i]).style.backgroundImage='url('+back_img[2]+')';
            }
        }
	}
	else
	{
		for(var i=0; i<step_cnt; i++)
		{
			if(corrosion[i]>0)
            {
                var arr=[1,6,8,11,15,16,20,23,25,30];
                if(pskill[6]==1 && arr.indexOf(corrosion[i])!=-1)
                {
                    document.getElementById('p'+corrosion[i]).style.backgroundImage='url('+back_img[7]+')';
                }
                else document.getElementById('p'+corrosion[i]).style.backgroundImage='url('+back_img[2]+')';
            }
        }
	}
}

function DrawFire()
{
	BackReconstruct();
	for(var i=0; i<6; i++)
	{
		if(fire[i]>0)
        {
            var arr=[1,6,8,11,15,16,20,23,25,30];
            if(pskill[6]==1 && arr.indexOf(fire[i])!=-1)
            {
                document.getElementById('p'+fire[i]).style.backgroundImage='url('+back_img[8]+')';
            }
            else document.getElementById('p'+fire[i]).style.backgroundImage='url('+back_img[3]+')';
        }
    }
}

function DrawHeal()
{
	BackReconstruct();
	for(var i=0; i<6; i++)
	{
		if(heal[i]>0)
        {
            var arr=[1,6,8,11,15,16,20,23,25,30];
            if(pskill[6]==1 && arr.indexOf(heal[i])!=-1)
            {
                document.getElementById('p'+heal[i]).style.backgroundImage='url('+back_img[9]+')';
            }
            else document.getElementById('p'+heal[i]).style.backgroundImage='url('+back_img[4]+')';
        }
    }
}

function DrawXFire()
{
	BackReconstruct();
	var arr=[1,6,8,11,15,16,20,23,25,30];
	for(var i=0; i<10; i++)
	{
		if(pskill[6]==0) document.getElementById('p'+arr[i]).style.backgroundImage='url('+back_img[3]+')';
        else document.getElementById('p'+arr[i]).style.backgroundImage='url('+back_img[8]+')';
	}
}

function DrawXExplode()
{
    BackReconstruct();
    var arr=[1,6,8,11,15,16,20,23,25,30];
    for(var i=0; i<10; i++)
    {
        if(eskill[5]==0) document.getElementById('p'+arr[i]).style.backgroundImage='url('+back_img[5+(i%2)]+')';
        else document.getElementById('p'+arr[i]).style.backgroundImage='url('+back_img[8]+')';
    }
}

function ResultDisplay()
{
	var str='';
	for(var i=0; i<drop_num_f-1; i++)
	{
		if(drop_record_f[i].attr==0) str+='<hr style="border:1px dotted #FFF; height:1px "/>';
		else str+='<img src="'+getStoneSrc(drop_record_f[i])+'" style="width:60pt;">';
	}
	document.getElementById("result_f_combo").innerHTML = str;
	
	var str='';
	for(var i=0; i<drop_num_n-1; i++)
	{
		if(drop_record_n[i].attr==0) str+='<hr style="border:1px dotted #FFF"; height:1px />';
		else str+='<img src="'+getStoneSrc(drop_record_n[i])+'" style="width:60pt;">';
	}
	document.getElementById("result_n_combo").innerHTML = str;
}

function ClearResultDisplay()
{
	document.getElementById("result_f_combo").innerHTML = '';
	document.getElementById("result_n_combo").innerHTML = '';
	for(var i=0; i<60; i++)
    {   
        drop_record_f[i]=new Stone(0, 0, 0, 0, 0, 0);
        drop_record_n[i]=new Stone(0, 0, 0, 0, 0, 0);
    }
	drop_num_f=0;
	drop_num_n=0;
}

function SkillMode(skill_mode)
{
	if(skill_mode==0)
	{
		document.getElementById("enemySkill").style.display='inline';
		document.getElementById("playerSkill").style.display='none';
		document.getElementById("skillEnemy").style.color='#FFFF00';
		document.getElementById("skillPlayer").style.color='#0044BB';
	}
	else if(skill_mode==1)
	{
		document.getElementById("enemySkill").style.display='none';
		document.getElementById("playerSkill").style.display='inline';
		document.getElementById("skillEnemy").style.color='#0044BB';
		document.getElementById("skillPlayer").style.color='#FFFF00';
	}
}

function EnemySkillType(type)
{
	if(type==0)
	{
		document.getElementById("enemyT1").style.display='block';
		document.getElementById("enemyT2").style.display='none';
		document.getElementById("enemyT3").style.display='none';
		document.getElementById("enemyType1").style.color='#000088';
		document.getElementById("enemyType2").style.color='#AA0000';
		document.getElementById("enemyType3").style.color='#AA0000';
	}
	else if(type==1)
	{
		document.getElementById("enemyT1").style.display='none';
		document.getElementById("enemyT2").style.display='block';
		document.getElementById("enemyT3").style.display='none';
		document.getElementById("enemyType1").style.color='#AA0000';
		document.getElementById("enemyType2").style.color='#000088';
		document.getElementById("enemyType3").style.color='#AA0000';
	}
    else if(type==2)
	{
		document.getElementById("enemyT1").style.display='none';
		document.getElementById("enemyT2").style.display='none';
		document.getElementById("enemyT3").style.display='block';
		document.getElementById("enemyType1").style.color='#AA0000';
		document.getElementById("enemyType2").style.color='#AA0000';
		document.getElementById("enemyType3").style.color='#000088';
	}
}

function PlayerSkillType(type)
{
	if(type==0)
	{
		document.getElementById("playerT1").style.display='block';
		document.getElementById("playerT2").style.display='none';
		document.getElementById("playerType1").style.color='#AA0000';
		document.getElementById("playerType2").style.color='#000088';
	}
    else if(type==1)
	{
		document.getElementById("playerT1").style.display='none';
		document.getElementById("playerT2").style.display='block';
		document.getElementById("playerType1").style.color='#000088';
		document.getElementById("playerType2").style.color='#AA0000';
	}
}

function InitSkill()
{
	InitEnemySkill();
	InitPlayerSkill();
}

function InitEnemySkill()
{
	for(var i=0; i<11; i++)
	{
		if(eskill[i]==1) EnemySkillControl(i+1);
	}
}

function InitPlayerSkill()
{
	for(var i=0; i<7; i++)
	{
		if(pskill[i]==1) PlayerSkillControl(i);
	}
}


function GetURLCode()
{
	var str="";
	str=str.concat(location.protocol+"//"+location.hostname+location.pathname);
	
	str=str.concat("?bd=");         // attr
	for(var i=0; i<15; i++)
	{
		var ss=GetAttrCode(stone[i*2].attr-1, stone[i*2+1].attr-1);
		str=str.concat(ss);
	}
	
	str=str.concat("&sp=");         // sp
	for(var i=0; i<15; i++)
	{
		var ss=GetSpCode(stone[i*2].sp, stone[i*2+1].sp);
		str=str.concat(ss);
	}
    
    str=str.concat("&en=");         // enchanted
	for(var i=0; i<6; i++)
	{
		var ss=GetEnchantedCode(stone[i*5].enchanted, stone[i*5+1].enchanted, stone[i*5+2].enchanted, stone[i*5+3].enchanted, stone[i*5+4].enchanted);
		str=str.concat(ss);
	}
    
    str=str.concat("&pe=");         // petrified
	for(var i=0; i<10; i++)
	{
		var ss=GetPetrifiedCode(stone[i*3].petrified, stone[i*3+1].petrified, stone[i*3+2].petrified);
		str=str.concat(ss);
	}
    
    str=str.concat("&rc=");         // race
	for(var i=0; i<15; i++)
	{
		var ss=GetRaceCode(stone[i*2].race, stone[i*2+1].race);
		str=str.concat(ss);
	}
	
	str=str.concat("&es=");         // enemy skill
    var route_esk_flag=0;
	for(var i=0; i<6; i++)
    {
        if(eskill[i]==1)
        {
            str=str.concat(i);
            route_esk_flag=1;
            break;
        }
    }
    if(route_esk_flag==0) str=str.concat('0');
    var eneskl_s=GetEnemySkillCode(eskill[6], eskill[7], eskill[8], eskill[9], eskill[10], eskill[11]);
	str=str.concat(eneskl_s);
    
    str=str.concat("&ps=");         // player skill
    for(var i=0; i<7; i++) str=str.concat(pskill[i]);
    
    str=str.concat("&set=");         // setting
    str=str.concat(parseInt((move_time/1000)/10));
    str=str.concat(parseInt((move_time/1000)%10));
    str=str.concat(dissolve_mode);
    str=str.concat(move_mode);
    
    if(path_record[0]!=-1)          // path record read
	{
		var step_s=step_cnt.toString();
		str=str.concat("&stp=");
		str=str.concat(step_s);
		str=str.concat("&pth=");
		var path_s=GetPathCode();
		str=str.concat(path_s);
	}
	
	document.getElementById('URLtext').style.display='inline';
	document.getElementById('URLtext').value=str;
}

function LoadURLCode()
{
	var str=location.search;
	var res=str.split("&");
	
	var ss=res[0].slice(4, 19);         // attr
	for(var i=0; i<15; i++)
	{
		var idx=GetAttrIndex(ss[i]);
		board[i*2].attr=stone[i*2].attr=Math.floor(idx/6)+1;
		board[i*2+1].attr=stone[i*2+1].attr=idx%6+1;
	}
    
	var ss=res[1].slice(3, 18);         // sp
	for(var i=0; i<15; i++)
	{
		var idx=GetSpIndex(ss[i]);
        board[i*2].sp=stone[i*2].sp=Math.floor(idx/6);
		board[i*2+1].sp=stone[i*2+1].sp=idx%6;
        
        if(stone[i*2].sp==5) board[i*2].undissolved=stone[i*2].undissolved=1;
        if(stone[i*2+1].sp==5) board[i*2+1].undissolved=stone[i*2+1].undissolved=1;
	}
    
    var ss=res[2].slice(3, 9);          // enchanted
	for(var i=0; i<6; i++)
	{
		var idx=GetEnchantedIndex(ss[i]);
        board[i*5].enchanted=stone[i*5].enchanted=Math.floor(idx/16)%2;
		board[i*5+1].enchanted=stone[i*5+1].enchanted=Math.floor(idx/8)%2;
		board[i*5+2].enchanted=stone[i*5+2].enchanted=Math.floor(idx/4)%2;
		board[i*5+3].enchanted=stone[i*5+3].enchanted=Math.floor(idx/2)%2;
		board[i*5+4].enchanted=stone[i*5+4].enchanted=idx%2;
	}
    
    var ss=res[3].slice(3, 13);          // petrified
	for(var i=0; i<10; i++)
	{
		var idx=GetPetrifiedIndex(ss[i]);
		board[i*3].petrified=stone[i*3].petrified=Math.floor(idx/16)%4;
		board[i*3+1].petrified=stone[i*3+1].petrified=Math.floor(idx/4)%4;
		board[i*3+2].petrified=stone[i*3+2].petrified=idx%4;
	}
    
    var ss=res[4].slice(3, 18);          // race
	for(var i=0; i<15; i++)
	{
		var idx=GetRaceIndex(ss[i]);
		board[i*2].race=stone[i*2].race=Math.floor(idx/7);
		board[i*2+1].race=stone[i*2+1].race=idx%7;
	}
    
    LoadEnemySkill();
    LoadPlayerSkill();
    LoadSetting();
	
	if(IsLoadPath())
	{
		var ss=res[8].slice(4, res[8].length);      // step count
		step_cnt=parseInt(ss);
		if(isNaN(step_cnt)) alert("[ERROR]步數資訊異常，請確認提供的網址是否有誤");
        
		var ss=res[9].slice(4, res[9].length);      // path info
		if(step_cnt!=(res[9].length-5)) alert("[ERROR]路徑資訊異常，請確認提供的網址是否有誤");
		for(var i=0; i<step_cnt+1; i++)
		{
			var idx=GetAttrIndex(ss[i])+1;
			path_record[i]=idx;
		}
		start=3;
	}
}

function LoadEnemySkill()
{
    var str=location.search;
	var res=str.split("&");
    
    var ss=res[5].slice(3, 5);
    EnemySkillControl(parseInt(ss[0]));
    var idx=GetEnemySkillIndex(ss[1]);
    for(var j=0; j<6; j++)
    {
        if(idx%2==1) EnemySkillControl(11-j);
        idx=Math.floor(idx/2);
    }
}

function LoadPlayerSkill()
{
    var str=location.search;
	var res=str.split("&");
    var ss=res[6].slice(3, 10);
    for(var j=0; j<7; j++)
    {
        if(parseInt(ss.charAt(j))==1) PlayerSkillControl(j);
    }
}

function LoadSetting()
{
    var str=location.search;
	var res=str.split("&");
    
    var ss=res[7].slice(4, 8);
    var time_c=parseInt(ss.charAt(0))*10+parseInt(ss.charAt(1));
    var dis_c=parseInt(ss.charAt(2));
    var move_c=parseInt(ss.charAt(3));
    if(time_c<=0 || time_c>30 || dis_c<0 || dis_c>5 || move_c<0 || move_c>1)
    {
        alert("[ERROR]設定資訊異常，請確認提供的網址是否有誤");
    }
    else
    {
        MoveTimeControl(time_c);
        document.getElementById("timeSlider").value=time_c;
        DissolveModeControl(dis_c);
        document.getElementById("dissolveSelector").selectedIndex=dis_c;
        MoveModeControl(move_c);
        document.getElementById("moveSelector").selectedIndex=move_c;
    }
}

function GetAttrCode(at1, at2)
{
	var arr=["0","1","2","3","4","5","6","7","8","9",
			 "a","b","c","d","e","f","g","h","i","j",
			 "k","l","m","n","o","p","q","r","s","t",
			 "u","v","w","x","y","z"];
	return arr[at1*6+at2];
}

function GetAttrIndex(ch)
{
	var arr=["0","1","2","3","4","5","6","7","8","9",
			 "a","b","c","d","e","f","g","h","i","j",
			 "k","l","m","n","o","p","q","r","s","t",
			 "u","v","w","x","y","z"];
	for(var i=0; i<36; i++)
	{
		if(ch==arr[i]) return i;
	}
	alert("[ERROR]盤面資訊異常，請確認提供的網址是否有誤");
}

function GetPathCode()
{
	var arr=["0","1","2","3","4","5","6","7","8","9",
			 "a","b","c","d","e","f","g","h","i","j",
			 "k","l","m","n","o","p","q","r","s","t"];
	var str="";
	for(var i=0; i<step_cnt+1; i++)
	{
		str=str.concat(arr[path_record[i]-1]);
	}
	return str;
}

function GetSpCode(at1, at2)
{
	var arr=["0","1","2","3","4","5","6","7","8","9",
			 "a","b","c","d","e","f","g","h","i","j",
			 "k","l","m","n","o","p","q","r","s","t",
			 "u","v","w","x","y","z"];
	return arr[at1*6+at2];
}

function GetSpIndex(ch)
{
	var arr=["0","1","2","3","4","5","6","7","8","9",
			 "a","b","c","d","e","f","g","h","i","j",
			 "k","l","m","n","o","p","q","r","s","t",
			 "u","v","w","x","y","z"];
	for(var i=0; i<36; i++)
	{
		if(ch==arr[i]) return i;
	}
	alert("[ERROR]盤面資訊異常，請確認提供的網址是否有誤");
}

function GetEnchantedCode(at1, at2, at3, at4, at5)
{
	var arr=["0","1","2","3","4","5","6","7","8","9",
			 "a","b","c","d","e","f","g","h","i","j",
			 "k","l","m","n","o","p","q","r","s","t",
			 "u","v"];
	return arr[at1*16+at2*8+at3*4+at4*2+at5];
}

function GetEnchantedIndex(ch)
{
    var arr=["0","1","2","3","4","5","6","7","8","9",
			 "a","b","c","d","e","f","g","h","i","j",
			 "k","l","m","n","o","p","q","r","s","t",
			 "u","v"];
	for(var i=0; i<32; i++)
	{
		if(ch==arr[i]) return i;
	}
	alert("[ERROR]盤面資訊異常，請確認提供的網址是否有誤");
}

function GetPetrifiedCode(at1, at2, at3)
{
	var arr=["0","1","2","3","4","5","6","7","8","9",
			 "a","b","c","d","e","f","g","h","i","j",
			 "k","l","m","n","o","p","q","r","s","t",
			 "u","v","w","x","y","z","A","B","C","D",
             "E","F","G","H","I","J","K","L","M","N",
             "O","P","Q","R","S","T","U","V","W","X",
             "Y","Z","+","-"];
	return arr[at1*16+at2*4+at3];
}

function GetPetrifiedIndex(ch)
{
    var arr=["0","1","2","3","4","5","6","7","8","9",
			 "a","b","c","d","e","f","g","h","i","j",
			 "k","l","m","n","o","p","q","r","s","t",
			 "u","v","w","x","y","z","A","B","C","D",
             "E","F","G","H","I","J","K","L","M","N",
             "O","P","Q","R","S","T","U","V","W","X",
             "Y","Z","+","-"];
	for(var i=0; i<64; i++)
	{
		if(ch==arr[i]) return i;
	}
	alert("[ERROR]盤面資訊異常，請確認提供的網址是否有誤");
}

function GetRaceCode(at1, at2)
{
	var arr=["0","1","2","3","4","5","6","7","8","9",
			 "a","b","c","d","e","f","g","h","i","j",
			 "k","l","m","n","o","p","q","r","s","t",
			 "u","v","w","x","y","z","A","B","C","D",
             "E","F","G","H","I","J","K","L","M"];
	return arr[at1*7+at2];
}

function GetRaceIndex(ch)
{
    var arr=["0","1","2","3","4","5","6","7","8","9",
			 "a","b","c","d","e","f","g","h","i","j",
			 "k","l","m","n","o","p","q","r","s","t",
			 "u","v","w","x","y","z","A","B","C","D",
             "E","F","G","H","I","J","K","L","M"];
	for(var i=0; i<49; i++)
	{
		if(ch==arr[i]) return i;
	}
	alert("[ERROR]盤面資訊異常，請確認提供的網址是否有誤");
}

function GetEnemySkillCode(at1, at2, at3, at4, at5, at6)
{
    var arr=["0","1","2","3","4","5","6","7","8","9",
			 "a","b","c","d","e","f","g","h","i","j",
			 "k","l","m","n","o","p","q","r","s","t",
			 "u","v","w","x","y","z","A","B","C","D",
             "E","F","G","H","I","J","K","L","M","N",
             "O","P","Q","R","S","T","U","V","W","X",
             "Y","Z","+","-"];
    return arr[at1*32+at2*16+at3*8+at4*4+at5*2+at6];
}

function GetEnemySkillIndex(ch)
{
	var arr=["0","1","2","3","4","5","6","7","8","9",
			 "a","b","c","d","e","f","g","h","i","j",
			 "k","l","m","n","o","p","q","r","s","t",
			 "u","v","w","x","y","z","A","B","C","D",
             "E","F","G","H","I","J","K","L","M","N",
             "O","P","Q","R","S","T","U","V","W","X",
             "Y","Z","+","-"];
	for(var i=0; i<64; i++)
	{
		if(ch==arr[i]) return i;
	}
	alert("[ERROR]盤面資訊異常，請確認提供的網址是否有誤");
}
