var attr=[0,0,0,0,0,0,
		  0,0,0,0,0,0,
		  0,0,0,0,0,0,
		  0,0,0,0,0,0,
		  0,0,0,0,0,0];
var board=[0,0,0,0,0,0,
		  0,0,0,0,0,0,
		  0,0,0,0,0,0,
		  0,0,0,0,0,0,
		  0,0,0,0,0,0];

/*
	-- Picture Source List --
	0       : empty
	1-6     : normal stone
	7-12    : enchanted stone
	13-18   : locked stone
	19-24   : frozen stone
	25-30   : frozen enchanted stone
	31-36   : undissolvable stone
	37-42   : weathered stone
	43-48   : weathered enchanted stone
	
	49-54   : normal stone (god)
	55-60   : enchanted stone (god)
	61-66   : locked stone (god)
	67-72   : frozen stone (god)
	73-78   : frozen enchanted stone (god)
	89-84   : --- N/A ---
	85-90   : weathered stone (god)
	91-96   : weathered enchanted stone (god)
	
	97-102  : normal stone (beast)
	103-108 : enchanted stone (beast)
	109-114 : locked stone (beast)
	115-120 : frozen stone (beast)
	121-126 : frozen enchanted stone (beast)
	127-132 : --- N/A ---
	133-138 : weathered stone (beast)
	139-144 : weathered enchanted stone (beast)
*/
var attribute_src=['./img/stone_n.png',
				   './img/stone_w.png', './img/stone_f.png', './img/stone_e.png', './img/stone_l.png', './img/stone_d.png', './img/stone_h.png',
				   './img/stone_w_en.png', './img/stone_f_en.png', './img/stone_e_en.png', './img/stone_l_en.png', './img/stone_d_en.png', './img/stone_h_en.png',
				   './img/stone_w_lk.png', './img/stone_f_lk.png', './img/stone_e_lk.png', './img/stone_l_lk.png', './img/stone_d_lk.png', './img/stone_h_lk.png',
				   './img/stone_w_fr.png', './img/stone_f_fr.png', './img/stone_e_fr.png', './img/stone_l_fr.png', './img/stone_d_fr.png', './img/stone_h_fr.png',
				   './img/stone_w_en_fr.png', './img/stone_f_en_fr.png', './img/stone_e_en_fr.png', './img/stone_l_en_fr.png', './img/stone_d_en_fr.png', './img/stone_h_en_fr.png',
				   './img/frozen.png','./img/frozen.png','./img/frozen.png','./img/frozen.png','./img/frozen.png','./img/frozen.png',
				   './img/stone_w_wt.png', './img/stone_f_wt.png', './img/stone_e_wt.png', './img/stone_l_wt.png', './img/stone_d_wt.png', './img/stone_h_wt.png',
				   './img/stone_w_en_wt.png', './img/stone_f_en_wt.png', './img/stone_e_en_wt.png', './img/stone_l_en_wt.png', './img/stone_d_en_wt.png', './img/stone_h_en_wt.png',
				   
				   './img/stone_w_g.png', './img/stone_f_g.png', './img/stone_e_g.png', './img/stone_l_g.png', './img/stone_d_g.png', './img/stone_h_g.png',
				   './img/stone_w_en_g.png', './img/stone_f_en_g.png', './img/stone_e_en_g.png', './img/stone_l_en_g.png', './img/stone_d_en_g.png', './img/stone_h_en_g.png',
				   './img/stone_w_lk_g.png', './img/stone_f_lk_g.png', './img/stone_e_lk_g.png', './img/stone_l_lk_g.png', './img/stone_d_lk_g.png', './img/stone_h_lk_g.png',
				   './img/stone_w_fr_g.png', './img/stone_f_fr_g.png', './img/stone_e_fr_g.png', './img/stone_l_fr_g.png', './img/stone_d_fr_g.png', './img/stone_h_fr_g.png',
				   './img/stone_w_en_fr_g.png', './img/stone_f_en_fr_g.png', './img/stone_e_en_fr_g.png', './img/stone_l_en_fr_g.png', './img/stone_d_en_fr_g.png', './img/stone_h_en_fr_g.png',
				   './img/frozen.png','./img/frozen.png','./img/frozen.png','./img/frozen.png','./img/frozen.png','./img/frozen.png',
				   './img/stone_w_wt_g.png', './img/stone_f_wt_g.png', './img/stone_e_wt_g.png', './img/stone_l_wt_g.png', './img/stone_d_wt_g.png', './img/stone_h_wt_g.png',
				   './img/stone_w_en_wt_g.png', './img/stone_f_en_wt_g.png', './img/stone_e_en_wt_g.png', './img/stone_l_en_wt_g.png', './img/stone_d_en_wt_g.png', './img/stone_h_en_wt_g.png',
				   
				   './img/stone_w_b.png', './img/stone_f_b.png', './img/stone_e_b.png', './img/stone_l_b.png', './img/stone_d_b.png', './img/stone_h_b.png',
				   './img/stone_w_en_b.png', './img/stone_f_en_b.png', './img/stone_e_en_b.png', './img/stone_l_en_b.png', './img/stone_d_en_b.png', './img/stone_h_en_b.png',
				   './img/stone_w_lk_b.png', './img/stone_f_lk_b.png', './img/stone_e_lk_b.png', './img/stone_l_lk_b.png', './img/stone_d_lk_b.png', './img/stone_h_lk_b.png',
				   './img/stone_w_fr_b.png', './img/stone_f_fr_b.png', './img/stone_e_fr_b.png', './img/stone_l_fr_b.png', './img/stone_d_fr_b.png', './img/stone_h_fr_b.png',
				   './img/stone_w_en_fr_b.png', './img/stone_f_en_fr_b.png', './img/stone_e_en_fr_b.png', './img/stone_l_en_fr_b.png', './img/stone_d_en_fr_b.png', './img/stone_h_en_fr_b.png',
				   './img/frozen.png','./img/frozen.png','./img/frozen.png','./img/frozen.png','./img/frozen.png','./img/frozen.png',
				   './img/stone_w_wt_b.png', './img/stone_f_wt_b.png', './img/stone_e_wt_b.png', './img/stone_l_wt_b.png', './img/stone_d_wt_b.png', './img/stone_h_wt_b.png',
				   './img/stone_w_en_wt_b.png', './img/stone_f_en_wt_b.png', './img/stone_e_en_wt_b.png', './img/stone_l_en_wt_b.png', './img/stone_d_en_wt_b.png', './img/stone_h_en_wt_b.png'];

var back_img=['./img/board_back_1.png', './img/board_back_2.png', './img/board_back_3.png', './img/board_back_4.png', './img/board_back_5.png'];
var no_dissolve_img=['./img/nodis_h_icon.png', './img/nodis_w_icon.png', './img/nodis_f_icon.png', './img/nodis_e_icon.png', './img/nodis_l_icon.png', './img/nodis_d_icon.png'];
var break_img=['./img/no_heart.png', './img/no_water.png', './img/no_fire.png', './img/no_earth.png', './img/no_light.png', './img/no_dark.png'];
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
var path_record=new Array();
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
var drop_record_f=new Array();
var drop_record_n=new Array();
var drop_num_f=0;
var drop_num_n=0;
var undissolve=[0,0,0,0,0,0];
var break_stone=[0,0,0,0,0,0];
var esstr1='', esstr2=['', '', '', '', '', ''];
var psstr1=['', '', '', '', '', ''];
var model_page=1;
var eskill=[0,0,0,0,0,0,0,0,0,0,0];
var pskill=[0,0,0,0,0,0];
var estype1=0, estype2=0;
var pstype1=0, pstype2=0;

/*----- pre-processing start -----*/
if(IsLoadBoard())
{
	//alert("load...");
	LoadURLCode();
}
else
{
	for(var i=0; i<30; i++) attr[i]=1+parseInt(6*Math.random());
}
for(var i=0; i<30; i++) board[i]=attr[i], corrosion[i]=-1;
for(var i=0; i<6; i++) dis_attr[i]=0, dis_num[i]=0, fire[i]=-1;
if(IsLoadPath()==false) path_record[0]=-1;

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

function IsLoadEnemySkill()
{
	var str=location.search;
	return str.includes("esk");
}

function IsLoadPlayerSkill()
{
	var str=location.search;
	return str.includes("psk");
}

/*----- pre-processing end -----*/

function Init(id)
{
	document.getElementById('img'+id).src=attribute_src[board[id-1]];
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
	if(start==1 && mode_s==0 && CheckLegality(pid)==1)
	{
		var pre=pre_pid;
		if(CheckCrush(board[pid-1])==1) crush=1;
        console.log(pre_pid+' '+pid);
		document.getElementById('img'+pre_pid).style.opacity=1;
		document.getElementById('img'+pid).style.opacity=0.5;
		document.getElementById('img'+pid).src=attribute_src[board[pre_pid-1]];
		document.getElementById('img'+pre_pid).src=attribute_src[board[pid-1]];
		var temp=board[pid-1];
		board[pid-1]=board[pre_pid-1];
		board[pre_pid-1]=temp;
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

function CheckCrush(id)
{
	if(id>36 && id<49) return 1;
	else if(id>84 && id<97) return 1;
	else if(id>132 && id<145) return 1;
	return 0;
}

function CheckLegality(id)
{
	var p=pre_pid;
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

function Dissolve()
{
	if(enemy_skill!=5) BackReconstruct();
	if(dissolve_mode==0)		// normal mode
	{
		var visit=new Array();
		var queue=new Array();
		for(var i=0; i<30; i++) visit[i]=(board[i]>=31 && board[i]<=36)?99:0;
		
		for(var i=0; i<5; i++)
		{
			for(var j=0; j<4; j++)
			{
				if(board[i*6+j]!=0 && board[i*6+j+1]!=0 && board[i*6+j+2]!=0 && (board[i*6+j]<31 || board[i*6+j]>36) && (board[i*6+j+1]<31 || board[i*6+j+1]>36) && (board[i*6+j+2]<31 || board[i*6+j+2]>36) && board[i*6+j+1]%6==board[i*6+j]%6 && board[i*6+j+2]%6==board[i*6+j]%6 && undissolve[board[i*6+j]%6]==0)
				{
					visit[i*6+j]=1, visit[i*6+j+1]=1, visit[i*6+j+2]=1;
				}
			}
		}
		for(var i=0; i<6; i++)
		{
			for(var j=0; j<3; j++)
			{
				if(board[j*6+i]!=0 && board[j*6+i+6]!=0 && board[j*6+i+12]!=0 && (board[j*6+i]<31 || board[j*6+i]>36) && (board[j*6+i+6]<31 || board[j*6+i+6]>36) && (board[j*6+i+12]<31 || board[j*6+i+12]>36) && board[j*6+i+6]%6==board[j*6+i]%6 && board[j*6+i+12]%6==board[j*6+i]%6 && undissolve[board[j*6+i]%6]==0)
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
			if(visit[j]==1 && board[j]!=0)
			{
				last=0, head=0;
				var count=0;
				count++;
				
				queue[last++]=j;
				while(head!=last)
				{
					visit[queue[head]]=2;
					if(queue[head]%6!=0 && board[queue[head]-1]!=0 && board[queue[head]-1]%6==board[queue[head]]%6 && visit[queue[head]-1]==1)
					{
						visit[queue[head]-1]=2;
						queue[last++]=queue[head]-1;
						count++;
					}
					if(queue[head]%6!=5 && board[queue[head]+1]!=0 && board[queue[head]+1]%6==board[queue[head]]%6 && visit[queue[head]+1]==1)
					{
						visit[queue[head]+1]=2;
						queue[last++]=queue[head]+1;
						count++;
					}
					if(queue[head]>=6 && board[queue[head]-6]!=0 && board[queue[head]-6]%6==board[queue[head]]%6 && visit[queue[head]-6]==1)
					{
						visit[queue[head]-6]=2;
						queue[last++]=queue[head]-6;
						count++;
					}
					if(queue[head]<=23 && board[queue[head]+6]!=0 && board[queue[head]+6]%6==board[queue[head]]%6 && visit[queue[head]+6]==1)
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
		else BreakStone();
	}
	else if(dissolve_mode==1)		// three-dissolve mode
	{
		var visit=new Array();
		var queue=new Array();
		for(var i=0; i<30; i++) visit[i]=(board[i]>=31 && board[i]<=36)?99:0;
		var last=0, head=0;
		var set_dissolved=0;
		var d_index=3;
		
		for(var j=0; j<30; j++)							// BFS
		{
			if(undissolve[board[j]%6]!=0) continue;
			
			if(visit[j]==0 && board[j]!=0)
			{
				last=0, head=0;
				var count=0;
				count++;
				queue[last++]=j;
				while(head!=last)
				{
					visit[queue[head]]=1;
					if(queue[head]%6!=0 && board[queue[head]-1]!=0 && board[queue[head]-1]%6==board[queue[head]]%6 && visit[queue[head]-1]==0)
					{
						visit[queue[head]-1]=1;
						queue[last++]=queue[head]-1;
						count++;
					}
					if(queue[head]%6!=5 && board[queue[head]+1]!=0 && board[queue[head]+1]%6==board[queue[head]]%6 && visit[queue[head]+1]==0)
					{
						visit[queue[head]+1]=1;
						queue[last++]=queue[head]+1;
						count++;
					}
					if(queue[head]>=6 && board[queue[head]-6]!=0 && board[queue[head]-6]%6==board[queue[head]]%6 && visit[queue[head]-6]==0)
					{
						visit[queue[head]-6]=1;
						queue[last++]=queue[head]-6;
						count++;
					}
					if(queue[head]<=23 && board[queue[head]+6]!=0 && board[queue[head]+6]%6==board[queue[head]]%6 && visit[queue[head]+6]==0)
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
		else BreakStone();
	}
	else if(dissolve_mode==2)		// fire two-dissolve mode
	{
		var visit=new Array();
		var queue=new Array();
		for(var i=0; i<30; i++) visit[i]=(board[i]>=31 && board[i]<=36)?99:0;
		
		for(var i=0; i<5; i++)
		{
			for(var j=0; j<5; j++)
			{
				if(board[i*6+j]%6==2 || (board[i*6+j]%6==0 && board[i*6+j]!=0))
				{
					if(board[i*6+j]!=0 && board[i*6+j+1]!=0 && (board[i*6+j]<31 || board[i*6+j]>36) && (board[i*6+j+1]<31 || board[i*6+j+1]>36) && board[i*6+j+1]%6==board[i*6+j]%6 && undissolve[board[i*6+j]%6]==0)
					{
						visit[i*6+j]=1, visit[i*6+j+1]=1;
					}
				}
				else if(j<4)
				{
					if(board[i*6+j]!=0 && board[i*6+j+1]!=0 && board[i*6+j+2]!=0 && (board[i*6+j]<31 || board[i*6+j]>36) && (board[i*6+j+1]<31 || board[i*6+j+1]>36) && (board[i*6+j+2]<31 || board[i*6+j+2]>36) && board[i*6+j+1]%6==board[i*6+j]%6 && board[i*6+j+2]%6==board[i*6+j]%6 && undissolve[board[i*6+j]%6]==0)
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
				if(board[j*6+i]%6==2 || (board[j*6+i]%6==0 && board[j*6+i]!=0))
				{
					if(board[j*6+i]!=0 && board[j*6+i+6]!=0 && (board[j*6+i]<31 || board[j*6+i]>36) && (board[j*6+i+6]<31 || board[j*6+i+6]>36) && board[j*6+i+6]%6==board[j*6+i]%6  && undissolve[board[j*6+i]%6]==0)
					{
						visit[j*6+i]=1, visit[j*6+i+6]=1;
					}
				}
				else if(j<3)
				{
					if(board[j*6+i]!=0 && board[j*6+i+6]!=0 && board[j*6+i+12]!=0 && (board[j*6+i]<31 || board[j*6+i]>36) && (board[j*6+i+6]<31 || board[j*6+i+6]>36) && (board[j*6+i+12]<31 || board[j*6+i+12]>36) && board[j*6+i+6]%6==board[j*6+i]%6 && board[j*6+i+12]%6==board[j*6+i]%6 && undissolve[board[j*6+i]%6]==0)
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
			if(visit[j]==1 && board[j]!=0)
			{
				last=0, head=0;
				var count=0;
				count++;
				queue[last++]=j;
				while(head!=last)
				{
					visit[queue[head]]=2;
					if(queue[head]%6!=0 && board[queue[head]-1]!=0 && board[queue[head]-1]%6==board[queue[head]]%6 && visit[queue[head]-1]==1)
					{
						visit[queue[head]-1]=2;
						queue[last++]=queue[head]-1;
						count++;
					}
					if(queue[head]%6!=5 && board[queue[head]+1]!=0 && board[queue[head]+1]%6==board[queue[head]]%6 && visit[queue[head]+1]==1)
					{
						visit[queue[head]+1]=2;
						queue[last++]=queue[head]+1;
						count++;
					}
					if(queue[head]>=6 && board[queue[head]-6]!=0 && board[queue[head]-6]%6==board[queue[head]]%6 && visit[queue[head]-6]==1)
					{
						visit[queue[head]-6]=2;
						queue[last++]=queue[head]-6;
						count++;
					}
					if(queue[head]<=23 && board[queue[head]+6]!=0 && board[queue[head]+6]%6==board[queue[head]]%6 && visit[queue[head]+6]==1)
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
		else BreakStone();
	}
	else if(dissolve_mode==3)		// earth two-dissolve mode
	{
		var visit=new Array();
		var queue=new Array();
		for(var i=0; i<30; i++) visit[i]=(board[i]>=31 && board[i]<=36)?99:0;
		
		for(var i=0; i<5; i++)
		{
			for(var j=0; j<5; j++)
			{
				if(board[i*6+j]%6==3 || (board[i*6+j]%6==0 && board[i*6+j]!=0))
				{
					if(board[i*6+j]!=0 && board[i*6+j+1]!=0 && (board[i*6+j]<31 || board[i*6+j]>36) && (board[i*6+j+1]<31 || board[i*6+j+1]>36) && board[i*6+j+1]%6==board[i*6+j]%6 && undissolve[board[i*6+j]%6]==0)
					{
						visit[i*6+j]=1, visit[i*6+j+1]=1;
					}
				}
				else if(j<4)
				{
					if(board[i*6+j]!=0 && board[i*6+j+1]!=0 && board[i*6+j+2]!=0 && (board[i*6+j]<31 || board[i*6+j]>36) && (board[i*6+j+1]<31 || board[i*6+j+1]>36) && (board[i*6+j+2]<31 || board[i*6+j+2]>36) && board[i*6+j+1]%6==board[i*6+j]%6 && board[i*6+j+2]%6==board[i*6+j]%6 && undissolve[board[i*6+j]%6]==0)
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
				if(board[j*6+i]%6==3 || (board[j*6+i]%6==0 && board[j*6+i]!=0))
				{
					if(board[j*6+i]!=0 && board[j*6+i+6]!=0 && (board[j*6+i]<31 || board[j*6+i]>36) && (board[j*6+i+6]<31 || board[j*6+i+6]>36) && board[j*6+i+6]%6==board[j*6+i]%6 && undissolve[board[j*6+i]%6]==0)
					{
						visit[j*6+i]=1, visit[j*6+i+6]=1;
					}
				}
				else if(j<3)
				{
					if(board[j*6+i]!=0 && board[j*6+i+6]!=0 && board[j*6+i+12]!=0 && (board[j*6+i]<31 || board[j*6+i]>36) && (board[j*6+i+6]<31 || board[j*6+i+6]>36) && (board[j*6+i+12]<31 || board[j*6+i+12]>36) && board[j*6+i+6]%6==board[j*6+i]%6 && board[j*6+i+12]%6==board[j*6+i]%6 && undissolve[board[j*6+i]%6]==0)
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
			if(visit[j]==1 && board[j]!=0)
			{
				last=0, head=0;
				var count=0;
				count++;
				queue[last++]=j;
				while(head!=last)
				{
					visit[queue[head]]=2;
					if(queue[head]%6!=0 && board[queue[head]-1]!=0 && board[queue[head]-1]%6==board[queue[head]]%6 && visit[queue[head]-1]==1)
					{
						visit[queue[head]-1]=2;
						queue[last++]=queue[head]-1;
						count++;
					}
					if(queue[head]%6!=5 && board[queue[head]+1]!=0 && board[queue[head]+1]%6==board[queue[head]]%6 && visit[queue[head]+1]==1)
					{
						visit[queue[head]+1]=2;
						queue[last++]=queue[head]+1;
						count++;
					}
					if(queue[head]>=6 && board[queue[head]-6]!=0 && board[queue[head]-6]%6==board[queue[head]]%6 && visit[queue[head]-6]==1)
					{
						visit[queue[head]-6]=2;
						queue[last++]=queue[head]-6;
						count++;
					}
					if(queue[head]<=23 && board[queue[head]+6]!=0 && board[queue[head]+6]%6==board[queue[head]]%6 && visit[queue[head]+6]==1)
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
		else BreakStone();
	}
	else if(dissolve_mode==4)		// fire-earth two-dissolve mode
	{
		var visit=new Array();
		var queue=new Array();
		for(var i=0; i<30; i++) visit[i]=(board[i]>=31 && board[i]<=36)?99:0;
		
		for(var i=0; i<5; i++)
		{
			for(var j=0; j<5; j++)
			{
				if(board[i*6+j]%6==2 || board[i*6+j]%6==3 || (board[i*6+j]%6==0 && board[i*6+j]!=0))
				{
					if(board[i*6+j]!=0 && board[i*6+j+1]!=0 && (board[i*6+j]<31 || board[i*6+j]>36) && (board[i*6+j+1]<31 || board[i*6+j+1]>36) && board[i*6+j+1]%6==board[i*6+j]%6 && undissolve[board[i*6+j]%6]==0)
					{
						visit[i*6+j]=1, visit[i*6+j+1]=1;
					}
				}
				else if(j<4)
				{
					if(board[i*6+j]!=0 && board[i*6+j+1]!=0 && board[i*6+j+2]!=0 && (board[i*6+j]<31 || board[i*6+j]>36) && (board[i*6+j+1]<31 || board[i*6+j+1]>36) && (board[i*6+j+2]<31 || board[i*6+j+2]>36) && board[i*6+j+1]%6==board[i*6+j]%6 && board[i*6+j+2]%6==board[i*6+j]%6 && undissolve[board[i*6+j]%6]==0)
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
				if(board[j*6+i]%6==2 || board[j*6+i]%6==3 || (board[j*6+i]%6==0 && board[j*6+i]!=0))
				{
					if(board[j*6+i]!=0 && board[j*6+i+6]!=0 && (board[j*6+i]<31 || board[j*6+i]>36) && (board[j*6+i+6]<31 || board[j*6+i+6]>36) && board[j*6+i+6]%6==board[j*6+i]%6 && undissolve[board[j*6+i]%6]==0)
					{
						visit[j*6+i]=1, visit[j*6+i+6]=1;
					}
				}
				else if(j<3)
				{
					if(board[j*6+i]!=0 && board[j*6+i+6]!=0 && board[j*6+i+12]!=0 && (board[j*6+i]<31 || board[j*6+i]>36) && (board[j*6+i+6]<31 || board[j*6+i+6]>36) && (board[j*6+i+12]<31 || board[j*6+i+12]>36) && board[j*6+i+6]%6==board[j*6+i]%6 && board[j*6+i+12]%6==board[j*6+i]%6 && undissolve[board[j*6+i]%6]==0)
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
			if(visit[j]==1 && board[j]!=0)
			{
				last=0, head=0;
				var count=0;
				count++;
				queue[last++]=j;
				while(head!=last)
				{
					visit[queue[head]]=2;
					if(queue[head]%6!=0 && board[queue[head]-1]!=0 && board[queue[head]-1]%6==board[queue[head]]%6 && visit[queue[head]-1]==1)
					{
						visit[queue[head]-1]=2;
						queue[last++]=queue[head]-1;
						count++;
					}
					if(queue[head]%6!=5 && board[queue[head]+1]!=0 && board[queue[head]+1]%6==board[queue[head]]%6 && visit[queue[head]+1]==1)
					{
						visit[queue[head]+1]=2;
						queue[last++]=queue[head]+1;
						count++;
					}
					if(queue[head]>=6 && board[queue[head]-6]!=0 && board[queue[head]-6]%6==board[queue[head]]%6 && visit[queue[head]-6]==1)
					{
						visit[queue[head]-6]=2;
						queue[last++]=queue[head]-6;
						count++;
					}
					if(queue[head]<=23 && board[queue[head]+6]!=0 && board[queue[head]+6]%6==board[queue[head]]%6 && visit[queue[head]+6]==1)
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
		else BreakStone();
	}
	
	ResultDisplay();

	start=3;
}

function StoneDisappear(v, d_index)
{
	var timers=new Array();
	var timerd=new Array();
	for(j=3; j<d_index; j++)
	{
		var attr=-1;
		for(var i=0; i<30; i++)
		{
			if(v[i]==j)
			{
				attr=board[i]%6;
				if(dissolve_n==0) drop_record_f[drop_num_f++]=board[i];
				else drop_record_n[drop_num_n++]=board[i];
				timers[i]=setTimeout(BlankRune, dissolve_time*(j-3), i, attr);
			}
		}
		if(dissolve_n==0) drop_record_f[drop_num_f++]=-1;
		else drop_record_n[drop_num_n++]=-1;
		timerd[j]=setTimeout(DissolveDisplay, dissolve_time*(j-3), attr, dissolve_n);
	}
	
	timer3=setTimeout("DropStone()", action_time+(d_index-4)*dissolve_time);
}

function BlankRune(id, attr)
{
	board[id]=0;
	dis_num[attr]++;
	document.getElementById('img'+(id+1)).src='./img/stone_n.png';
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
			if(board[j*6+i]!=0)
			{
				var drop_y=0;
				for(var k=j+1; k<5; k++)
				{
					if(board[k*6+i]==0) drop_y++;
				}
				if(drop_y>0)
				{
					board[(j+drop_y)*6+i]=board[j*6+i];
					board[j*6+i]=0;
					document.getElementById('img'+((j+drop_y)*6+i)).src=attribute_src[board[j*6+i]];
				}
				
			}
		}
	}
	
	timer3=setTimeout("BreakStone()", action_time);
}

function BreakStone()
{
	var flag=0;
	for(var i=0; i<30; i++)
	{
		if(board[i]!=0)
		{
			var id=board[i]%6;
			if(break_stone[id]==1)
			{
				board[i]=0;
				flag=1;
			}
		}
	}
	
	if(flag==1) timer3=setTimeout("DropStone()", action_time);
	else Dissolve();
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
	for(var i=0; i<6; i++) dis_attr[i]=0, document.getElementById("dr"+i).innerHTML = 0;
	for(var i=0; i<6; i++) dis_num[i]=0, document.getElementById("dn"+i).innerHTML = 0;
	for(var i=0; i<30; i++) board[i]=attr[i];
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
		for(var i=0; i<30; i++) board[i]=attr[i];
		for(var i=0; i<step_cnt; i++) timer_r=setTimeout("ReplayMove()", 400+400*i);
		timer_r=setTimeout(function(){
			document.getElementById('img'+path_record[step_cnt]).style.opacity=1;
		}, 400+400*(step_cnt+1));
		timer_r=setTimeout("Dissolve()", 400+400*(step_cnt+1));
	}
	
}

function ReplayMove()
{
	if(start==3)
	{
		var i=replay_step+1;
		document.getElementById('img'+path_record[i-1]).style.opacity=1;
		document.getElementById('img'+path_record[i]).style.opacity=0.5;
		document.getElementById('img'+path_record[i]).src=attribute_src[board[path_record[i-1]-1]];
		document.getElementById('img'+path_record[i-1]).src=attribute_src[board[path_record[i]-1]];
		var temp=board[path_record[i]-1];
		board[path_record[i]-1]=board[path_record[i-1]-1];
		board[path_record[i-1]-1]=temp;
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
		if(edit_index==13)			// weathered stone
		{
			var offset=(attr[id-1]>6 && attr[id-1]<13)?43:37;
			document.getElementById('img'+id).src=attribute_src[(board[id-1]-1)%6+offset];
			attr[id-1]=(board[id-1]-1)%6+offset;
			board[id-1]=(board[id-1]-1)%6+offset;
		}
		else if(edit_index==14)		// locked stone
		{
			document.getElementById('img'+id).src=attribute_src[(board[id-1]-1)%6+13];
			attr[id-1]=(board[id-1]-1)%6+13;
			board[id-1]=(board[id-1]-1)%6+13;
		}
		else if(edit_index==15)		// frozen stone
		{
			var offset=(attr[id-1]>6 && attr[id-1]<13)?25:19;
			document.getElementById('img'+id).src=attribute_src[(board[id-1]-1)%6+offset];
			attr[id-1]=(board[id-1]-1)%6+offset;
			board[id-1]=(board[id-1]-1)%6+offset;
		}
		else if(edit_index==16)		// undissolvable frozen stone
		{
			document.getElementById('img'+id).src=attribute_src[(board[id-1]-1)%6+31];
			attr[id-1]=(board[id-1]-1)%6+31;
			board[id-1]=(board[id-1]-1)%6+31;
		}
		
		else if(edit_index==17)		// god stone
		{
			if(board[id-1]<31 || board[id-1]>36)
			{
				document.getElementById('img'+id).src=attribute_src[(board[id-1]-1)%48+48+1];
				attr[id-1]=(board[id-1]-1)%48+48+1;
				board[id-1]=(board[id-1]-1)%48+48+1;
			}
		}
		else if(edit_index==18)		// beast stone
		{
			if(board[id-1]<31 || board[id-1]>36)
			{
				document.getElementById('img'+id).src=attribute_src[(board[id-1]-1)%48+48*2+1];
				attr[id-1]=(board[id-1]-1)%48+48*2+1;
				board[id-1]=(board[id-1]-1)%48+48*2+1;
			}
		}
		else
		{
			document.getElementById('img'+id).src=attribute_src[edit_index];
			attr[id-1]=edit_index;
			board[id-1]=edit_index;
		}
	}
}

function Random()
{
	for(var i=0; i<30; i++) attr[i]=1+parseInt(6*Math.random());
	for(var i=0; i<30; i++) board[i]=attr[i];
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
		document.getElementById("enchanted_stone").style.display='none';
		document.getElementById("editSkill").style.display='none';
		document.getElementById("special_stone").style.display='none';
		document.getElementById("race_stone").style.display='none';
		document.getElementById("stoneMode0").style.color='#FFFF00';
		document.getElementById("stoneMode1").style.color='#0044BB';
		document.getElementById("stoneMode2").style.color='#0044BB';
		document.getElementById("stoneMode3").style.color='#0044BB';
	}
	else if(smode==1)
	{
		document.getElementById("normal_stone").style.display='none';
		document.getElementById("enchanted_stone").style.display='block';
		document.getElementById("special_stone").style.display='none';
		document.getElementById("race_stone").style.display='none';
		document.getElementById("stoneMode0").style.color='#0044BB';
		document.getElementById("stoneMode1").style.color='#FFFF00';
		document.getElementById("stoneMode2").style.color='#0044BB';
		document.getElementById("stoneMode3").style.color='#0044BB';
	}
	else if(smode==2)
	{
		document.getElementById("normal_stone").style.display='none';
		document.getElementById("enchanted_stone").style.display='none';
		document.getElementById("special_stone").style.display='block';
		document.getElementById("race_stone").style.display='none';
		document.getElementById("stoneMode0").style.color='#0044BB';
		document.getElementById("stoneMode1").style.color='#0044BB';
		document.getElementById("stoneMode2").style.color='#FFFF00';
		document.getElementById("stoneMode3").style.color='#0044BB';
	}
	else if(smode==3)
	{
		document.getElementById("normal_stone").style.display='none';
		document.getElementById("enchanted_stone").style.display='none';
		document.getElementById("special_stone").style.display='none';
		document.getElementById("race_stone").style.display='block';
		document.getElementById("stoneMode0").style.color='#0044BB';
		document.getElementById("stoneMode1").style.color='#0044BB';
		document.getElementById("stoneMode2").style.color='#0044BB';
		document.getElementById("stoneMode3").style.color='#FFFF00';
	}
}

function SelectAttri(attr)
{
	if(mode_s==1) edit_index=attr;
}

function ModelPage()
{
	var max_page=3;
	var str='';
	
	model_page=(model_page<max_page)?model_page+1:1;
	for(var i=1; i<=max_page; i++)
	{
		str='model'+i;
		document.getElementById(str).style.display='none';
	}
	str='model'+model_page;
	document.getElementById(str).style.display='block';
}

function SelectModel(model)
{
	if(mode_s==1)
	{
		switch(model)
		{
			case 1:
				var pos=[0,1,6,7,4,5,10,11,18,19,24,25,22,23,28,29];
				var loc=[0,1,0,2,0,3,1,2,1,3,2,3];
				var ra=parseInt(6*Math.random());
				var corner1=loc[ra*2], corner2=loc[ra*2+1];
				for(var i=0; i<4; i++) attr[pos[corner1*4+i]]=(board[pos[corner1*4+i]]>6 && board[pos[corner1*4+i]]<13)?7:1;
				for(var i=0; i<4; i++) attr[pos[corner2*4+i]]=(board[pos[corner2*4+i]]>6 && board[pos[corner2*4+i]]<13)?7:1;
			break;
			case 2:
				var pos=[0,1,6,7,4,5,10,11,18,19,24,25,22,23,28,29];
				var loc=[0,1,0,2,0,3,1,2,1,3,2,3];
				var ra=parseInt(6*Math.random());
				var corner1=loc[ra*2], corner2=loc[ra*2+1];
				for(var i=0; i<4; i++) attr[pos[corner1*4+i]]=(board[pos[corner1*4+i]]>6 && board[pos[corner1*4+i]]<13)?11:5;
				for(var i=0; i<4; i++) attr[pos[corner2*4+i]]=(board[pos[corner2*4+i]]>6 && board[pos[corner2*4+i]]<13)?11:5;
			break;
			case 3:
				for(var i=0; i<19; i+=6) attr[i]=(board[i]>6 && board[i]<13)?12:6;
				for(var i=24; i<30; i++) attr[i]=(board[i]>6 && board[i]<13)?7:1;
			break;
			case 4:
				for(var i=0; i<30; i++) attr[i]=8;
				attr[3]=attr[4]=attr[6]=attr[7]=attr[9]=attr[10]=attr[19]=attr[20]=attr[22]=attr[23]=attr[25]=attr[26]=6;
			break;
			case 5:
				for(var i=0; i<30; i++) attr[i]=11;
				attr[3]=attr[4]=attr[6]=attr[7]=attr[9]=attr[10]=attr[19]=attr[20]=attr[22]=attr[23]=attr[25]=attr[26]=6;
			break;
			case 6:
				for(var i=0; i<30; i++) attr[i]=(board[i]>6 && board[i]<13)?11:5;
				var arr=[2,3,7,10,12,13,16,17,19,22,26,27];
				for(var i=0; i<12; i++) attr[arr[i]]=(board[arr[i]]>6 && board[arr[i]]<13)?12:6;
			break;
			case 7:
				var arr=[8,8,8,0,0,6];
				for(var i=0; i<30; i++)
				{
					var ok=0;
					while(!ok)
					{
						var ra=parseInt(6*Math.random());
						if(arr[ra]>0)
						{
							attr[i]=(board[i]>6 && board[i]<13)?ra+6+1:ra+1;
							arr[ra]--;
							ok=1;
						}
					}
				}
			break;
			case 8:
				var arr=[0,0,0,15,15,0];
				for(var i=0; i<30; i++)
				{
					var ok=0;
					while(!ok)
					{
						var ra=parseInt(6*Math.random());
						if(arr[ra]>0)
						{
							attr[i]=(board[i]>6 && board[i]<13)?ra+6+1:ra+1;
							arr[ra]--;
							ok=1;
						}
					}
				}
			break;
			case 9:
				var arr=[2,3,8,9,12,13,14,15,16,17,20,21,26,27];
				for(var i=0; i<14; i++) attr[arr[i]]=(board[arr[i]]>6 && board[arr[i]]<13)?10:4;
			break;
			case 10:
				var arr=[1,2,2,3,6];
				for(var i=0; i<30; i++)
				{
					var ra=parseInt(5*Math.random());
					attr[i]=(board[i]>6 && board[i]<13)?arr[ra]+6:arr[ra];
				}
				for(var i=0; i<30; i++) attr[i]=(attr[i]!=2)?attr[i]:(attr[i]+6);
			break;
			case 11:
				var arr=[0,3,7,10,14,17,18,21,25,28];
				for(var i=0; i<10; i++)
				{
					if(attr[arr[i]]==2) attr[arr[i]]=8;
					else if(board[arr[i]]>6 && board[arr[i]]<13) attr[arr[i]]=8;
					else attr[arr[i]]=2;
				}
			break;
			case 12:
				var arr=[6,6,6,6,6,0];
				for(var i=0; i<30; i++)
				{
					var ok=0;
					while(!ok)
					{
						var ra=parseInt(6*Math.random());
						if(arr[ra]>0)
						{
							attr[i]=(board[i]>6 && board[i]<13)?ra+6+1:ra+1;
							arr[ra]--;
							ok=1;
						}
					}
				}
			break;
			case 13:
				for(var i=0; i<5; i++) attr[i*6]=(board[i*6]>6 && board[i*6]<13)?7:1, attr[i*6+5]=(board[i*6+5]>6 && board[i*6+5]<13)?10:4;
			break;
			case 14:
				var arr=[1,2,11,12,17,18,27,28];
				for(var i=0; i<8; i++) attr[arr[i]]=(board[arr[i]]>6 && board[arr[i]]<13)?8:2;
			break;
			case 15:
				var arr=[0,0,0,0,15,15];
				for(var i=0; i<30; i++)
				{
					var ok=0;
					while(!ok)
					{
						var ra=parseInt(6*Math.random());
						if(arr[ra]>0)
						{
							attr[i]=(board[i]>6 && board[i]<13)?ra+6+1:ra+1;
							arr[ra]--;
							ok=1;
						}
					}
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
					if(arr[i]!=0) attr[i]=(board[i]>6 && board[i]<13)?arr[i]+6:arr[i];
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
					if(arr[i]!=0) attr[i]=(board[i]>6 && board[i]<13)?arr[i]+6:arr[i];
				}
			break;
			case 18:
				for(i=0; i<30; i++)
				{
					if(attr[i]%6==4) attr[i]=(board[i]>6 && board[i]<13)?7:1;
					else if(attr[i]%6==5) attr[i]=(board[i]>6 && board[i]<13)?8:2;
					else if(attr[i]%6==0) attr[i]=(board[i]>6 && board[i]<13)?9:3;
				}
			break;
			case 19:
				for(i=0; i<30; i++)
				{
					if(attr[i]%6==1) attr[i]=(board[i]>6 && board[i]<13)?10:4;
					else if(attr[i]%6==2) attr[i]=(board[i]>6 && board[i]<13)?11:5;
					else if(attr[i]%6==3) attr[i]=(board[i]>6 && board[i]<13)?12:6;
				}
			break;
			case 20:
				var arr=[9,9,6,6,9,9,
						 6,6,9,9,6,6,
						 9,9,6,6,9,9,
						 6,6,9,9,6,6,
						 9,9,6,6,9,9];
				for(i=0; i<30; i++)
				{
					if(arr[i]==9) attr[i]=arr[i];
					else attr[i]=(board[i]>6 && board[i]<13)?arr[i]+6:arr[i];
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
					if(board[arr[i]]>6 && board[arr[i]]<13) attr[arr[i]]=model-14;
					else attr[arr[i]]=model-20;
				}
			break;
			case 26:
				for(i=0; i<30; i++)
				{
					if(attr[i]%6==0) attr[i]=12;
					else attr[i]=10;
				}
			break;
			case 27:
				var pos=[0,1,6,7,4,5,10,11,18,19,24,25,22,23,28,29];
				var loc=[0,1,0,2,0,3,1,2,1,3,2,3];
				var ra=parseInt(6*Math.random());
				var corner1=loc[ra*2], corner2=loc[ra*2+1];
				for(var i=0; i<4; i++) attr[pos[corner1*4+i]]=(board[pos[corner1*4+i]]>6 && board[pos[corner1*4+i]]<13)?9:3;
				for(var i=0; i<4; i++) attr[pos[corner2*4+i]]=(board[pos[corner2*4+i]]>6 && board[pos[corner2*4+i]]<13)?9:3;
			break;
			case 28:
				var arr=[0,5,24,29];
				for(var i=0; i<4; i++) attr[arr[i]]=(board[arr[i]]>6 && board[arr[i]]<13)?8:2;
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
                    for(var j=0; j<3; j++) attr[corner[i*3+j]]=comb[col*3+poi];
                    poi++;
                }
            break;
            case 30:
				var arr=[10,0,0,10,0,10];
				for(var i=0; i<30; i++)
				{
					var ok=0;
					while(!ok)
					{
						var ra=parseInt(6*Math.random());
						if(arr[ra]>0)
						{
							attr[i]=ra+6+1;
							arr[ra]--;
							ok=1;
						}
					}
				}
			break;
            case 31:
				for(var i=0; i<30; i++)
                {
                    if(attr[i]%6==4 || attr[i]%6==5) attr[i]=(board[i]>6 && board[i]<13)?56:50;
                    else if(attr[i]%6==1 || attr[i]%6==3) attr[i]=(board[i]>6 && board[i]<13)?12:6;
                }
			break;
		}
		Reset();
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

function EnemySkillControl(skill)
{
	if(skill>=0 && skill<=5)
	{
		enemy_skill=skill;
		for(var i=0; i<5; i++) eskill[i]=0;
		eskill[skill-1]=1;
	}
	else eskill[skill-1]=(eskill[skill-1]==0)?1:0;
	if(skill==0)
	{
		BackReconstruct();
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
	
	var str2_all='';
	for(var i=0; i<6; i++) str2_all+=esstr2[i];
	
	document.getElementById("skillSpanE").innerHTML = (estype1==0 && estype2==0)?'敵方技能：<font style="color:#FFFFFF;">無</font><br>':'敵方技能：'+esstr1+str2_all+'<br>';
	document.getElementById("enemy_hint").innerHTML = (estype1==0 && estype2==0)?'':esstr1+str2_all;
}

function PlayerSkillControl(skill)
{
	if(skill>=0 && skill<=5) pskill[skill]=(pskill[skill]==0)?1:0;
	
	if(skill>=0 && skill<=5)
	{
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
	
	var str1_all='';
	for(var i=0; i<6; i++) str1_all+=psstr1[i];
	
	document.getElementById("skillSpanP").innerHTML = (pstype1==0)?'隊伍技能：<font style="color:#FFFFFF;">無</font><br>':'隊伍技能：'+str1_all+'<br>';
	document.getElementById("player_hint").innerHTML = (pstype1==0)?'':str1_all;
}

function BackReconstruct()
{
	for(var i=0; i<30; i++)
	{
		if(i==0 || i==2 || i==4 || i==7 || i==9 || i==11 || i==12 || i==14 || i==16 || i==19 || i==21 || i==23 || i==24 || i==26 || i==28) document.getElementById('p'+(i+1)).style.backgroundImage='url('+back_img[0]+')';
		else document.getElementById('p'+(i+1)).style.backgroundImage='url('+back_img[1]+')';
	}
}

function DrawCorrosion()
{
	BackReconstruct();
	if(enemy_skill==1)
	{
		for(var i=0; i<6; i++)
		{
			if(corrosion[i]>0) document.getElementById('p'+corrosion[i]).style.backgroundImage='url('+back_img[2]+')';
		}
	}
	else
	{
		for(var i=0; i<step_cnt; i++)
		{
			if(corrosion[i]>0) document.getElementById('p'+corrosion[i]).style.backgroundImage='url('+back_img[2]+')';
		}
	}
}

function DrawFire()
{
	BackReconstruct();
	for(var i=0; i<6; i++)
	{
		if(fire[i]>0) document.getElementById('p'+fire[i]).style.backgroundImage='url('+back_img[3]+')';
	}
}

function DrawHeal()
{
	BackReconstruct();
	for(var i=0; i<6; i++)
	{
		if(heal[i]>0) document.getElementById('p'+heal[i]).style.backgroundImage='url('+back_img[4]+')';
	}
}

function DrawXFire()
{
	BackReconstruct();
	var arr=[1,6,8,11,15,16,20,23,25,30];
	for(var i=0; i<10; i++)
	{
		document.getElementById('p'+arr[i]).style.backgroundImage='url('+back_img[3]+')';
	}
}

function ResultDisplay()
{
	var str='';
	for(var i=0; i<drop_num_f-1; i++)
	{
		if(drop_record_f[i]==-1) str+='<hr style="border:1px dotted #FFF; height:1px "/>';
		else str+='<img src="'+attribute_src[drop_record_f[i]]+'" style="width:60pt;">';
	}
	document.getElementById("result_f_combo").innerHTML = str;
	
	var str='';
	for(var i=0; i<drop_num_n-1; i++)
	{
		if(drop_record_n[i]==-1) str+='<hr style="border:1px dotted #FFF"; height:1px />';
		else str+='<img src="'+attribute_src[drop_record_n[i]]+'" style="width:60pt;">';
	}
	document.getElementById("result_n_combo").innerHTML = str;
}

function ClearResultDisplay()
{
	document.getElementById("result_f_combo").innerHTML = '';
	document.getElementById("result_n_combo").innerHTML = '';
	drop_record_f=new Array();
	drop_record_n=new Array();
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
		document.getElementById("enemyType1").style.color='#000088';
		document.getElementById("enemyType2").style.color='#AA0000';
	}
	else if(type==1)
	{
		document.getElementById("enemyT1").style.display='none';
		document.getElementById("enemyT2").style.display='block';
		document.getElementById("enemyType1").style.color='#AA0000';
		document.getElementById("enemyType2").style.color='#000088';
	}
}

function PlayerSkillType(type)
{
	if(type==0)
	{
		document.getElementById("playerT1").style.display='block';
		//document.getElementById("playerT2").style.display='none';
		document.getElementById("playerType1").style.color='#000088';
		//document.getElementById("playerType2").style.color='#AA0000';
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
	for(var i=0; i<6; i++)
	{
		if(pskill[i]==1) PlayerSkillControl(i);
	}
}


function GetURLCode()
{
	var str="";
	str=str.concat(location.protocol+"//"+location.hostname+location.pathname);
	
	str=str.concat("?bd=");
	for(var i=0; i<15; i++)
	{
		var ss=GetAttrCode((attr[i*2]-1)%6, (attr[i*2+1]-1)%6);
		str=str.concat(ss);
	}
	
	str=str.concat("&sp=");
	for(var i=0; i<30; i++)
	{
		var ss=GetSpCode(Math.floor((attr[i]-1)/6));
		str=str.concat(ss);
	}
	
	if(path_record[0]!=-1)
	{
		var step_s=step_cnt.toString();
		str=str.concat("&stp=");
		str=str.concat(step_s);
		str=str.concat("&pth=");
		var path_s=GetPathCode();
		str=str.concat(path_s);
	}
	
	str=str.concat("&esk=");
	for(var i=0; i<11; i++)
	{
		var ss=GetEnemySkill(i);
		str=str.concat(ss);
	}
	
	str=str.concat("&psk=");
	for(var i=0; i<6; i++)
	{
		var ss=GetPlayerSkill(i);
		str=str.concat(ss);
	}
	
	console.log(str);
	document.getElementById('URLtext').style.display='inline';
	document.getElementById('URLtext').value=str;
}

function LoadURLCode()
{
	var str=location.href;
	var res=str.split("&");
	//alert(res[1]);
	
	var ss=res[1].slice(3, 33);
	for(var i=0; i<30; i++)
	{
		var idx=GetSpIndex(ss[i]);
		attr[i]=Math.floor(idx)*6;
	}
	
	var res=str.split("?");
	var ss=res[1].slice(3, 18);
	for(var i=0; i<15; i++)
	{
		var idx=GetAttrIndex(ss[i]);
		attr[i*2]+=Math.floor(idx/6)+1;
		attr[i*2+1]+=idx%6+1;
		//console.log(idx);
	}
	//alert("board");
	
	var str=location.href;
	var res=str.split("&");
	//alert(res[1]);
	
	if(IsLoadPath())
	{
		var ss=res[2].slice(4, res[2].length);
		step_cnt=parseInt(ss);
		
		//alert(ss);
		if(isNaN(step_cnt)) alert("[ERROR]步數資訊異常，請確認提供的網址是否有誤");
		var ss=res[3].slice(4, res[3].length);
		if(step_cnt!=(res[3].length-5)) alert("[ERROR]路徑資訊異常，請確認提供的網址是否有誤");
		for(var i=0; i<step_cnt+1; i++)
		{
			var idx=GetAttrIndex(ss[i])+1;
			path_record[i]=idx;
			//console.log(path_record[i]);
		}
		
		start=3;
	}
	//alert(res[1].charAt(0));
	if(IsLoadEnemySkill())
	{
		for(var j=2; j<6; j++)
		{
			if(res[j].charAt(0)=='e' && res[j].charAt(1)=='s')
			{
				var ss=res[j].slice(4, res[j].length);
				for(var i=0; i<5; i++)
				{
					if(ss.charAt(i)=='1')
					{
						eskill[i]=1;
						enemy_skill=i+1;
						//EnemySkillControl(enemy_skill);
						break;
					}
				}
				for(var i=5; i<11; i++)
				{
					if(ss.charAt(i)=='1')
					{
						eskill[i]=1;
						undissolve[(i-4)%6]=1;
						//EnemySkillControl(i);
					}
				}
				break;
			}
		}
	}
	
	if(IsLoadPlayerSkill())
	{
		for(var j=2; j<6; j++)
		{
			if(res[j].charAt(0)=='p' && res[j].charAt(1)=='s')
			{
				var ss=res[j].slice(4, res[j].length);
				for(var i=0; i<6; i++)
				{
					if(ss.charAt(i)=='1')
					{
						pskill[i]=1;
						break_stone[i]=1;
						//PlayerSkillControl(i);
					}
				}
				break;
			}
		}
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

function GetSpCode(sp)
{
	var arr=["0","1","2","3","4","5","6","7","8","9",
			 "a","b","c","d","e","f","g","h","i","j",
			 "k","l","m","n","o","p","q","r","s","t",
			 "u","v","w","x","y","z","A","B","C","D",
			 "E","F","G","H","I","J","K","L","M","N",
			 "O","P","Q","R","S","T"];
	return arr[sp];
}

function GetSpIndex(ch)
{
	var arr=["0","1","2","3","4","5","6","7","8","9",
			 "a","b","c","d","e","f","g","h","i","j",
			 "k","l","m","n","o","p","q","r","s","t",
			 "u","v","w","x","y","z","A","B","C","D",
			 "E","F","G","H","I","J","K","L","M","N",
			 "O","P","Q","R","S","T"];
	for(var i=0; i<56; i++)
	{
		if(ch==arr[i]) return i;
	}
	alert("[ERROR]盤面資訊異常，請確認提供的網址是否有誤");
}

function GetEnemySkill(id)
{
	return eskill[id];
}

function GetPlayerSkill(id)
{
	return pskill[id];
}