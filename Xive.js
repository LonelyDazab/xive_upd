//made by: VeroXCode | LetsBeastHunter | Maxi | Dazab

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var Button = android.widget.Button;
var LinearLayout = android.widget.LinearLayout;
var RelativeLayout = android.widget.RelativeLayout;
var TableLayout = android.widget.TableLayout;
var PopupWindow = android.widget.PopupWindow;
var ScrollView = android.widget.ScrollView;
var TextView = android.widget.TextView;
var CheckBox = android.widget.CheckBox;
var Switch = android.widget.Switch;
var Toast = android.widget.Toast;
var Runnable = java.lang.Runnable;
var View = android.view.View;
var ColorDrawable = android.graphics.drawable.ColorDrawable;
var Color = android.graphics.Color;
var Gravity = android.view.Gravity;
var bg = new android.graphics.drawable.GradientDrawable();
bg.setColor(android.graphics.Color.BLACK);
bg.setStroke(4, android.graphics.Color.WHITE);
bg.setCornerRadius(40); 
var bg2 = new android.graphics.drawable.GradientDrawable(); //Für Buttons
bg2.setColor(android.graphics.Color.BLACK);

var Team = "Xive - Client Team";
var time = 18;
var time2 = 10;
var stripe = "----------------";
var gravity = -0.07840000092983246;
var Client = "§7[§aXive§7] ";
var friends = new Array();

var bypsed = false;
var bpasssw = false;

var gtbped = false;
var gtbypass = false;

var mbbped = false;
var mbbypass = false;

var mxbped = false;
var mxbypass = false;

var sped = false;
var speed = false;
var mxspeed = false;
var vspeed = false;
var gtspeed = false;
var mbspeed = false;
var smotion = 1.0;

var spned = true;
var normalsp = true;

var spcted = false;

var ctspeed = false;
var velct = 0;
var timerct = 20;
var motionct = 1.0;
var jumpct = false;
var jumpct1 = true;
var groundct = true;

var eaet = false;
var uspe = 2;

var non = false;
var nock = false;

var bfed = false;
var bouncefly = false;
var bouncedelay = 9;
var bouncevel = 0.33;
var bouncespeed = 1.08;

var gmed = false;

var aimed = false;
var aim = false;
var maxr = 8;
var naim = true;
var naimed = true;
var raim = false;
var raimed = false;

var mobaimed = true;
var playaimed = true;

var towed = false;
var tower = false;

var jptwed = false;
var jumptower = false;

var extwed = false;
var exptower = false;

var autos = false;
var autosed = false;

var jesus = false;
var jesused = false;
var jesusn = true;
var jesush = false;
var jesushed = false;
var jesuss = false; 
var jesussed = false;
var jened = true;

var glded = false;
var glide = false;
var gdown = 0.1;
var gspeed = 1.0;

var health = 20;
var aimlen = 0;

var steped = false;
var step = false;

var laimed = false;
var lockaim = false;

var spammer = false;
var spamtime = 3*20;
var spamspeed = 3*20;
var state = 0;
var spammes = Client;

var multijump = false;
var longjump = false;
var jumpboost = 1.05;

var ported = false;

var menuScroll = null;

var Utils = {

 Text: {
		clean: function (text) {
			var allColor = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "k", "l", "m", "n", "o", "r"];

			if(text != null) {

				allColor.forEach(function (entry) {
					text = text.replace(new RegExp("\u00A7" + entry, 'g'), "");
				});
				return text;
			} else
				return "";
		}
	},

Friends: {
  
  isFriend: function(entity) {
  var nof = true;
  
  for(i = 0;i < friends.length;i++) {
  var centity = Utils.Text.clean(Entity.getNameTag(entity));
  if(centity == friends[i]) {
  nof = false;
  }
  }
   return nof;
  }

},
 

Block: {
		isLiquid: function(id) {
			if (id >= 8 && id <= 11) return true;
			return false;
		},
		isLadder: function(id) {
			if (id = 65) return true;
			return false;
		},
		isWeb: function(id) {
			if (id = 30) return true;
			return false;
		},
		isIce: function(id) {
		if (id = 79 && id = 174) return true;
		return false;
		}
	},
	Player: {
		isInWater: function(){
			if(Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 0.01, getPlayerZ())))return true;
			return false;
		},
		isOnWater: function(){
		if(Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.3, getPlayerZ())))return true;
		return false;
		},
		isOnIce: function(){
		if(Utils.Block.isIce(getTile(getPlayerX(), getPlayerY() - 0.1, getPlayerZ())))return true;
		return false;
		},
		isOnLadder: function(){
		if(Utils.Block.isLadder(getTile(getPlayerX(), getPlayerY() + 0.1, getPlayerZ())))return true;
		return false;
		},
		onGround: function() {
			var y = getPlayerY();
			while (y > 1) y -= 1;

			if (Math.round(y * 100) == 62 && getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) return true;
			if (Math.round(y * 100) == 12 && getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) return true;
			return false;
		},
		overGround: function() {
			var y = getPlayerY();
			while (y > 2) y -= 2;

			if (Math.round(y * 100) == 62 && getTile(getPlayerX(), getPlayerY() - 2.15, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 2.15, getPlayerZ()))) return true;
			if (Math.round(y * 100) == 12 && getTile(getPlayerX(), getPlayerY() - 2.15, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 2.15, getPlayerZ()))) return true;
			return false;
		},
		isCollidedHorizontally: function() {
			var x = getPlayerX();
			var z = getPlayerZ();
			var blockX = Math.round(x - 0.5);
			var blockZ = Math.round(z - 0.5);
			while (x < 1) x += 1;
			while (z < 1) z += 1;
			while (x > 1) x -= 1;
			while (z > 1) z -= 1;

			if (Math.round(x * 100) == 31) x -= 0.01;
			if (Math.round(z * 100) == 31) z -= 0.01;
			if (Math.round(x * 100) == 69) x += 0.01;
			if (Math.round(z * 100) == 69) z += 0.01;
			if (Math.round(x * 100) == 30) blockX--;
			if (Math.round(z * 100) == 30) blockZ--;
			if (Math.round(x * 100) == 70) blockX++;
			if (Math.round(z * 100) == 70) blockZ++;
			//clientMessage(blockX+";"+blockZ);
			if (getTile(blockX, getPlayerY(), blockZ) == 0 && getTile(blockX, getPlayerY() - 1, blockZ) == 0) return false;

			if (Block.getDestroyTime(getTile(blockX, getPlayerY() - 1, blockZ)) <= 0.1 && Block.getDestroyTime(getTile(blockX, getPlayerY(), blockZ)) <= 0.1) return false;

			if (Math.round(x * 100) == 30 || Math.round(x * 100) == 70) return true;
			if (Math.round(z * 100) == 30 || Math.round(z * 100) == 70) return true;
			return false;
		},
		
		isFalling: function() {
		var velo = gravity;
		if(!Utils.Player.onGround() && Entity.getVelY(Player.getEntity()) < velo) return true;
		return false;
		}
	},
	
	   Entity: {
	   
	     calculateDist: function(ent, maxdist) {
	     	var x = Entity.getX(ent) - getPlayerX();
								var y = Entity.getY(ent) - getPlayerY();
								var z = Entity.getZ(ent) - getPlayerZ();
								var dist = Math.sqrt(Math.pow(x,2) + Math.pow(y,2) + Math.pow(z,2));
						if(dist <= maxdist) return true;
						return false;
								
	     },
    
      nextEnt: function() {
var mobs = Entity.getAll();
							var players = Server.getAllPlayers();
							var small = maxr;
							var ent = null;
							for (var i = 0; i < mobs.length; i++) {
								var x = Entity.getX(mobs[i]) - getPlayerX();
								var y = Entity.getY(mobs[i]) - getPlayerY();
								var z = Entity.getZ(mobs[i]) - getPlayerZ();
								var dist = Math.sqrt(Math.pow(x,2) + Math.pow(y,2) + Math.pow(z,2));
								if(dist < small && dist > 0 && Entity.getEntityTypeId(mobs[i]) <= 63 && Entity.getHealth(mobs[i]) >= 1){
							
							
if(mobaimed == true) {	if(Utils.Friends.isFriend(ent)) {
									small = dist;
						     ent = mobs[i]
						    }else {
									continue;
									}
						     }
							}
							}
							
		
							
							for (var i = 0; i < players.length; i++) {
								var x = Entity.getX(players[i]) - getPlayerX();
								var y = Entity.getY(players[i]) - getPlayerY();
								var z = Entity.getZ(players[i]) - getPlayerZ();
								var dist = Math.sqrt(Math.pow(x,2) + Math.pow(y,2) + Math.pow(z,2));
								if(dist < small && dist > 0 && Entity.getHealth(players[i]) >= 1){
						
						
if(playaimed == true) {	if(Utils.Friends.isFriend(ent)) {
									small = dist;
									ent = players[i];

									}else {
									continue;
									}
									}
									
								}
							}
							
							if(Utils.Friends.isFriend(ent)) {
							return ent;
							
							}
							
							},
							
						aimAtEnt: function(ent) {
							if(ent != null){
								var x = Entity.getX(ent) - getPlayerX();
								var y = Entity.getY(ent) - getPlayerY();
								var z = Entity.getZ(ent) - getPlayerZ();
								if(Entity.getEntityTypeId(ent) != 63)
									y += 0.5;
								var a = 0.5 + Entity.getX(ent);
								var b = Entity.getY(ent);
								var c = 0.5 + Entity.getZ(ent);
								var len = Math.sqrt(x * x + y * y + z * z);
								var y = y / len;
								var pitch = Math.asin(y);
								pitch = pitch * 180.0 / Math.PI;
								pitch = -pitch;
								if (pitch < 90 && pitch > -90) {										
									Entity.setRot(Player.getEntity(), -Math.atan2(a - (Player.getX() + 0.5), c - (Player.getZ() + 0.5)) * (180 / Math.PI), pitch);
								}
       }
   
   }
   
   },
	
	Vel: {
		lastX: 0,
		lastY: 0,
		lastZ: 0,
		calculateSpeed: function() {
			return Math.sqrt(Math.pow(Entity.getVelX(getPlayerEnt()), 2) + Math.pow(Entity.getVelZ(getPlayerEnt()), 2));
		}
	}
}



function dip2px(dips){
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

ctx.runOnUiThread(new Runnable({ run: function(){
	try{
		var layout = new LinearLayout(ctx);
		layout.setOrientation(1);
		var menuBtn = new Button(ctx);
		menuBtn.setText('Xive');
		menuBtn.setTextColor(Color.BLACK);
		menuBtn.getBackground().setAlpha(100);
		menuBtn.setOnClickListener(new View.OnClickListener({
			onClick: function(viewarg){
			if(menuScroll == null) {
				Hub();
				Hubext();
				}
			}
		}));
		layout.addView(menuBtn);
		
		GUI = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
		GUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
		GUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 160, 0);
		}catch(err){
			Toast.makeText(ctx, "An error occured: " + err, 1).show();
		}
	}}));
	
	function Hub(){
	
	
	
	ctx.runOnUiThread(new Runnable({ run: function(){
		try{
		
		
	var hub1 = new LinearLayout(ctx);
	hub1.setOrientation(1);
	menuScroll = new ScrollView(ctx);
	
	var hub2 = new LinearLayout(ctx);
	hub2.setOrientation(1);
	
	menuScroll.addView(hub1);
	hub2.addView(menuScroll);
	hub2.setBackground(bg);
	hub2.getBackground().setAlpha(100);
	
	var name = new TextView(ctx);
			name.setTextSize(22);
			name.setText("Xive");
			name.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			name.setGravity(Gravity.CENTER);
			hub1.addView(name);
			
      var sett = new Button(ctx);
			sett.setText("Settings");
			sett.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			sett.setPadding(25, 2, 2, 2);
			sett.setBackground(bg2);
			sett.getBackground().setAlpha(100);
			sett.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
						settingWindow();
						settingExit();
						menu.dismiss();
						exitUI.dismiss();
						menuScroll = null;
					}
			}));
			hub1.addView(sett);
			
			
			var info = new Button(ctx);
			info.setText("Info");
			info.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			info.setPadding(25, 2, 2, 2);
			info.setBackground(bg2);
			info.getBackground().setAlpha(100);
			info.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
				clientMessage(Client+"§aChangelog:");
				clientMessage(Client+"§aadded Custom-Speed + Settings");
				clientMessage(Client+"§aadded Step");
				clientMessage(Client+"§aadded FriendSystem");
				clientMessage(Client+"§aadded more Settings");
				clientMessage(Client+"§aadded Teleport");
				clientMessage(" ");
				clientMessage(Client+"§aType .help for Commands");
					}
			}));
			hub1.addView(info);
				
      
      sp = new Switch(ctx);
			sp.setText("Speed");
			sp.setTextColor(android.graphics.Color.rgb(255, 255, 255));
    sp.setPadding(10, 1, 1, 1);
    sp.setTextSize(14);
			sp.setChecked(sped);
			sp.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!sped){
						sped = true;
					}else{
					ModPE.setGameSpeed(20);
						sped = false;
					}
				 sp.setChecked(sped);
				}
			}));
			hub1.addView(sp);
			
			
			      eat = new Switch(ctx);
			eat.setText("FastEat");
			eat.setTextColor(android.graphics.Color.rgb(255, 255, 255));
    eat.setPadding(10, 1, 1, 1);
    eat.setTextSize(14);
			eat.setChecked(eaet);
			eat.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!eaet){
						eaet = true;
						fastEatOn(256);
					}else{
						eaet = false;
						fastEatOff(256);
					}
				 eat.setChecked(eaet);
				}
			}));
			hub1.addView(eat);
			
      
			
						      nnock = new Switch(ctx);
			nnock.setText("NoKnockback");
			nnock.setTextColor(android.graphics.Color.rgb(255, 255, 255));
    nnock.setPadding(10, 1, 1, 1);
    nnock.setTextSize(14);
			nnock.setChecked(non);
			nnock.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!non){
						non = true;
						nock = true;
					}else{
						non = false;
						nock = false;
					}
				 nnock.setChecked(non);
				}
			}));
			hub1.addView(nnock);
			
			bf = new Switch(ctx);
			bf.setText("BounceFly");
			bf.setTextColor(android.graphics.Color.rgb(255, 255, 255));
    bf.setPadding(10, 1, 1, 1);
    bf.setTextSize(14);
			bf.setChecked(bfed);
			bf.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!bfed){
						bfed = true;
						bouncefly = true;
					}else{
						bfed = false;
						bouncefly = false;
					}
				 bf.setChecked(bfed);
				}
			}));
			hub1.addView(bf);
      
			gm = new Switch(ctx);
			gm.setText("Creative");
			gm.setTextColor(android.graphics.Color.rgb(255, 255, 255));
    gm.setPadding(10, 1, 1, 1);
    gm.setTextSize(14);
			gm.setChecked(gmed);
			gm.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!gmed){
						gmed = true;
						Level.setGameMode(1);
					}else{
						gmed = false;
						Level.setGameMode(0);
					}
				 gm.setChecked(gmed);
				}
			}));
			hub1.addView(gm);
			
			
			ai = new Switch(ctx);
			ai.setText("AimAura");
			ai.setTextColor(android.graphics.Color.rgb(255, 255, 255));
    ai.setPadding(10, 1, 1, 1);
    ai.setTextSize(14);
			ai.setChecked(aimed);
			ai.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(!aimed){
						aimed = true;
						aim = true;
					}else{
						aimed = false;
						aim = false;
					}
				 ai.setChecked(aimed);
				}
			}));
			hub1.addView(ai);
			
			var tow = new Switch(ctx);
      tow.setText("Tower");
      tow.setTextColor(android.graphics.Color.rgb(255, 255, 255));
      tow.setPadding(10, 1, 1, 1);
      tow.setTextSize(14);
      tow.setChecked(towed);
      tow.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!towed){
      towed = true;
      tower = true;
      }else{
      towed = false;
      tower = false;
      }
      tow.setChecked(towed);
      }
      }));
      hub1.addView(tow);
      
  
  			var ato = new Switch(ctx);
      ato.setText("autoSword");
      ato.setTextColor(android.graphics.Color.rgb(255, 255, 255));
      ato.setPadding(10, 1, 1, 1);
      ato.setTextSize(14);
      ato.setChecked(autosed);
      ato.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!autosed){
      autosed = true;
      autos = true;
      }else{
      autosed = false;
      autos = false;
      }
      ato.setChecked(autosed);
      }
      }));
      hub1.addView(ato);
      
      
      
        			var jeo = new Switch(ctx);
      jeo.setText("Jesus");
      jeo.setTextColor(android.graphics.Color.rgb(255, 255, 255));
      jeo.setPadding(10, 1, 1, 1);
      jeo.setTextSize(14);
      jeo.setChecked(jesused);
      jeo.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!jesused){
      jesused = true;
      jesus = true;
      }else{
      jesused = false;
      jesus = false;
      }
      jeo.setChecked(jesused);
      }
      }));
      hub1.addView(jeo);
      
      var gld = new Switch(ctx);
      gld.setText("Glide");
      gld.setTextColor(android.graphics.Color.rgb(255, 255, 255));
      gld.setPadding(10, 1, 1, 1);
      gld.setTextSize(14);
      gld.setChecked(glded);
      gld.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!glded){
      glded = true;
      glide = true;
      }else{
      glded = false;
      glide = false;
      }
      gld.setChecked(glded);
      }
      }));
      hub1.addView(gld);
      
      
      	         var pets = new Switch(ctx);
      pets.setText("Step");
      pets.setTextColor(android.graphics.Color.rgb(255, 255, 255));
      pets.setPadding(10, 1, 1, 1);
      pets.setTextSize(14);
      pets.setChecked(steped);
      pets.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!steped){
      steped = true;
      step = true;
      }else{
      steped = false;
      step = false;
      }
      pets.setChecked(steped);
      }
      }));
      hub1.addView(pets);
      
      var tport = new Switch(ctx);
      tport.setText("Teleport");
      tport.setTextColor(android.graphics.Color.rgb(255, 255, 255));
      tport.setPadding(10, 1, 1, 1);
      tport.setTextSize(14);
      tport.setChecked(ported);
      tport.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!ported){
      ported = true;
      }else{
      ported = false;
      }
      tport.setChecked(ported);
      }
      }));
      hub1.addView(tport);
      
    var spam = new Switch(ctx);
      spam.setText("Spammer");
      spam.setTextColor(android.graphics.Color.rgb(255, 255, 255));
      spam.setPadding(10, 1, 1, 1);
      spam.setTextSize(14);
      spam.setChecked(spammer);
      spam.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!spammer){
      spammer = true;
      }else{
      spammer = false;
      }
      spam.setChecked(spammer);
      }
      }));
      hub1.addView(spam);
      
      var mjump = new Switch(ctx);
      mjump.setText("DoubleJump");
      mjump.setTextColor(android.graphics.Color.rgb(255, 255, 255));
      mjump.setPadding(10, 1, 1, 1);
      mjump.setTextSize(14);
      mjump.setChecked(multijump);
      mjump.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!multijump){
      multijump = true;
      }else{
      multijump = false;
      }
      mjump.setChecked(multijump);
      }
      }));
      hub1.addView(mjump);
      
      var ljump = new Switch(ctx);
      ljump.setText("LongJump");
      ljump.setTextColor(android.graphics.Color.rgb(255, 255, 255));
      ljump.setPadding(10, 1, 1, 1);
      ljump.setTextSize(14);
      ljump.setChecked(longjump);
      ljump.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!longjump){
      longjump = true;
      }else{
      longjump = false;
      }
      ljump.setChecked(longjump);
      }
      }));
      hub1.addView(ljump);


			
			menu = new PopupWindow(hub2, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
			menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
			}catch(error){
				Toast.makeText(ctx, "An error occured: " + error, 1).show();
			}
	}}));
}

function Hubext(){
	ctx.runOnUiThread(new Runnable({ run: function(){
		try{
			var xLayout = new LinearLayout(ctx);
			var xButton = new Button(ctx);
			xButton.setText('X');
			xButton.setTextColor(Color.BLACK);
			xButton.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
				if(menuScroll != null) {
					exitUI.dismiss();
					menu.dismiss();
					menuScroll = null;
					}
				}
			}));
			xLayout.addView(xButton);
			
			exitUI = new PopupWindow(xLayout, dip2px(40), dip2px(40));
			exitUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
			exitUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 0);
			}catch(exception){
				Toast.makeText(ctx, exception, 1).show();
			}
	}}));
}

function settingWindow(){
ctx.runOnUiThread(new Runnable({ run: function(){
		try{
		
		
		
		var screen = new LinearLayout(ctx);
		
		screen.setOrientation(1);
		var ScrollView2 = new ScrollView(ctx);
		
		var screen2 = new LinearLayout(ctx);
		screen2.setOrientation(1);
	
		ScrollView2.addView(screen);
		screen2.addView(ScrollView2);
		
		screen2.setBackground(bg);
		
		var settname = new TextView(ctx);
		settname.setText("Client Settings");
		settname.setTextColor(android.graphics.Color.rgb(255, 255, 255));
		settname.setTextSize(16);
		settname.setGravity(Gravity.CENTER);
  screen.addView(settname);
  
  var trn = new TextView(ctx);
		trn.setText(stripe);
		trn.setTextColor(android.graphics.Color.rgb(255, 255, 255));
		trn.setTextSize(16);
		trn.setGravity(Gravity.CENTER);
  screen.addView(trn);
      
      var settname3 = new TextView(ctx);
		settname3.setText("Tower");
		settname3.setTextColor(android.graphics.Color.rgb(255, 255, 255));
		settname3.setTextSize(16);
		settname3.setGravity(Gravity.CENTER);
  screen.addView(settname3);
  
  var jptw = new CheckBox(ctx);
  jptw.setText("Jump");
  jptw.setTextColor(android.graphics.Color.rgb(255, 255, 255));
  jptw.setChecked(jptwed);
  jptw.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!jptwed){
      jptwed = true;
      jumptower = true;
      }else{
      jptwed = false;
      jumptower = false;
      }
      jptw.setChecked(jptwed);
      }
      }));
      screen.addView(jptw);
      
      var extw = new CheckBox(ctx);
  extw.setText("Experimental");
  extw.setTextColor(android.graphics.Color.rgb(255, 255, 255));
  extw.setChecked(extwed);
  extw.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!extwed){
      extwed = true;
      exptower = true;
      }else{
      extwed = false;
      exptower = false;
      }
      extw.setChecked(extwed);
      }
      }));
      screen.addView(extw);
      
            var je1s = new TextView(ctx);
		je1s.setText(stripe);
		je1s.setTextColor(android.graphics.Color.rgb(255, 255, 255));
		je1s.setTextSize(16);
		je1s.setGravity(Gravity.CENTER);
  screen.addView(je1s);
  
  
  
  var je2s = new TextView(ctx);
		je2s.setText("Jesus");
		je2s.setTextColor(android.graphics.Color.rgb(255, 255, 255));
		je2s.setTextSize(16);
		je2s.setGravity(Gravity.CENTER);
  screen.addView(je2s);
  
  
  

      var je1 = new CheckBox(ctx);
 je1.setText("normal");
  je1.setTextColor(android.graphics.Color.rgb(255, 255, 255));
  je1.setChecked(jened);
  je1.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!jesusn){
      jesusn = true;
      jened = true;
      }else{
      jesusn = false;
      jened = false;
      }
      je1.setChecked(jened);
      }
      }));
      screen.addView(je1);
      


      var je2 = new CheckBox(ctx);
  je2.setText("hop");
  je2.setTextColor(android.graphics.Color.rgb(255, 255, 255));
  je2.setChecked(jesushed);
  je2.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!jesushed){
      jesushed = true;
      jesush = true;
      }else{
      jesushed = false;
      jesush = false;
      }
      je2.setChecked(jesushed);
      }
      }));
      screen.addView(je2);

      var je3 = new CheckBox(ctx);
  je3.setText("speed");
  je3.setTextColor(android.graphics.Color.rgb(255, 255, 255));
  je3.setChecked(jesussed);
  je3.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!jesussed){
      jesuss = true;
      jesussed = true;
      }else{
      jesussed = false;
      jesuss = false;
      }
      je3.setChecked(jesussed);
      }
      }));
      screen.addView(je3);
      
      
      
      
                  var ai1s = new TextView(ctx);
		ai1s.setText(stripe);
		ai1s.setTextColor(android.graphics.Color.rgb(255, 255, 255));
		ai1s.setTextSize(16);
		ai1s.setGravity(Gravity.CENTER);
  screen.addView(ai1s);
  
  
  
  var ai2s = new TextView(ctx);
		ai2s.setText("Aim/Targets");
		ai2s.setTextColor(android.graphics.Color.rgb(255, 255, 255));
		ai2s.setTextSize(16);
		ai2s.setGravity(Gravity.CENTER);
  screen.addView(ai2s);
  
  
  
  var mobaim = new CheckBox(ctx);
  mobaim.setText("Mobs");
  mobaim.setTextColor(android.graphics.Color.rgb(255, 255, 255));
  mobaim.setChecked(mobaimed);
  mobaim.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!mobaimed){
      mobaimed = true;
      }else{
      mobaimed = false;
      }
      mobaim.setChecked(mobaimed);
      }
      }));
      screen.addView(mobaim);
      

  
  var playai = new CheckBox(ctx);
  playai.setText("Player");
  playai.setTextColor(android.graphics.Color.rgb(255, 255, 255));
  playai.setChecked(playaimed);
  playai.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!playaimed){
      playaimed = true;
      }else{
      playaimed = false;
      }
      playai.setChecked(playaimed);
      }
      }));
      screen.addView(playai);
      


var aimn = new CheckBox(ctx);
  aimn.setText("normal");
  aimn.setTextColor(android.graphics.Color.rgb(255, 255, 255));
  aimn.setChecked(naimed);
  aimn.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!naimed){
      naim = true;
      naimed = true;
      }else{
      naimed = false;
      naim = false;
      }
      aimn.setChecked(naimed);
      }
      }));
      screen.addView(aimn);
      
      
      
      var aimr = new CheckBox(ctx);
  aimr.setText("ReactionAim");
  aimr.setTextColor(android.graphics.Color.rgb(255, 255, 255));
  aimr.setChecked(raimed);
  aimr.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!raimed){
      raim = true;
      raimed = true;
      }else{
      raimed = false;
      raim = false;
      }
      aimr.setChecked(raimed);
      }
      }));
      screen.addView(aimr);
      
      var sps = new TextView(ctx);
		sps.setText(stripe);
		sps.setTextColor(android.graphics.Color.rgb(255, 255, 255));
		sps.setTextSize(16);
		sps.setGravity(Gravity.CENTER);
  screen.addView(sps);
      
      var sps2 = new TextView(ctx);
		sps2.setText("Speed/Mode");
		sps2.setTextColor(android.graphics.Color.rgb(255, 255, 255));
		sps2.setTextSize(16);
		sps2.setGravity(Gravity.CENTER);
  screen.addView(sps2);
  
  


var spn = new CheckBox(ctx);
  spn.setText("Motion");
  spn.setTextColor(android.graphics.Color.rgb(255, 255, 255));
  spn.setChecked(spned);
  spn.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!spned){
      normalsp = true;
      spned = true;
      }else{
      spned = false;
      normalsp = false;
      }
      spn.setChecked(spned);
      }
      }));
      screen.addView(spn);
      
      var spct = new CheckBox(ctx);
  spct.setText("Custom");
  spct.setTextColor(android.graphics.Color.rgb(255, 255, 255));
  spct.setChecked(spcted);
  spct.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!spcted){
      ctspeed = true;
      spcted = true;
      }else{
      spcted = false;
      ctspeed = false;
      }
      spct.setChecked(spcted);
      }
      }));
      screen.addView(spct);
      
      
      
  
  
      
 smenu = new PopupWindow(screen2, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight()/1);
			smenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
			}catch(error){
				Toast.makeText(ctx, "An error occured: " + error, 1).show();
			}
	}}));
}
      
 function settingExit(){
	ctx.runOnUiThread(new Runnable({ run: function(){
		try{
			var sxLayout = new LinearLayout(ctx);
			var sxButton = new Button(ctx);
			sxButton.setText('X');
			sxButton.setTextColor(Color.BLACK);
			sxButton.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					sexitUI.dismiss();
					smenu.dismiss();
				}
			}));
			sxLayout.addView(sxButton);
			
			sexitUI = new PopupWindow(sxLayout, dip2px(40), dip2px(40));
			sexitUI.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
			sexitUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 0);
			}catch(exception){
				Toast.makeText(ctx, exception, 1).show();
			}
	}}));
}

function modTick()
{




if(friends[0] == null) {
friends.push("LonelyDazab");
}
var x = Player.getX();
var y = Player.getX();
var z = Player.getZ();


if(spammer == true) {
if(spamtime != 0) {
spamtime--;
}else {
spamtime = spamspeed;
Server.sendChat(state+"*"+spammes+"*"+state);
state += 1;
}
}

if(step == true) {
	if(Utils.Player.isCollidedHorizontally()) {
		setPositionRelative(getPlayerEnt(), 0, 1.4, 0);
	}
		
}


if(gtspeed && bpasssw && gtbypass){
if(Utils.Player.overGround())
setVelY(getPlayerEnt(), -0.1);
setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*1.03);
setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*1.03);
if(Utils.Player.onGround())
setVelY(getPlayerEnt(), 0.3);
vspeed = false;
 }
if(mbspeed && bpasssw && mbbypass){
if(Utils.Player.onGround())
setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*1.08);
if(Utils.Player.onGround())
setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*1.08);
if(Utils.Player.onGround())
setVelY(getPlayerEnt(), 0.2);
vspeed = false;
 }
if(sped == true && ctspeed == true && groundct == false){
setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*motionct);
setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*motionct);
jumpct1 = true;
ModPE.setGameSpeed(timerct);
 }
if(sped == true && ctspeed == true && groundct == true){
if(Utils.Player.onGround())
setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*motionct);
if(Utils.Player.onGround())
setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*motionct);
jumpct1 = true;
ModPE.setGameSpeed(timerct);
 }
if(multijump){
if(Utils.Player.overGround())
setVelY(getPlayerEnt(), 0.6);
 }
if(longjump){
if(getTile(getPlayerX(), getPlayerY() - 2, getPlayerZ()) == 0){
setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*jumpboost);
setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*jumpboost);
 }}
if(jumpct1 == true && jumpct == true && ctspeed == true && sped == true){
if(Utils.Player.onGround())
setVelY(getPlayerEnt(), velct);
 }
if(glide){
setVelY(getPlayerEnt(), -gdown);
setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*gspeed);
setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*gspeed);
}
if(mxspeed && bpasssw && mxbypass){
if(time !== 0) {
time--;
}
if(time == 0) {
time = 4;
if(Utils.Player.onGround())
setVelY(getPlayerEnt(), 0.001);
if(Utils.Player.onGround())
setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*1.18);
if(Utils.Player.onGround())
setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*1.18);
 }}
if(normalsp && sped){
if(Utils.Player.onGround())
setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*smotion);
if(Utils.Player.onGround())
setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*smotion);
 }
 
 if(nock == true) {
 this.tick = 0;

if(this.health > Entity.getHealth(getPlayerEnt()) ) {
this.tick = 5;
Entity.setImmobile(getPlayerEnt(), true);
}
if(this.tick == 0) {

Entity.setImmobile(getPlayerEnt(), false);

}

this.health = Entity.getHealth(getPlayerEnt());

if(this.tick != 0) {

tick--;

}
 }
if(tower == true){
if(time !== 0) {
time--;
}
if(time == 0) {
time = 3;
setVelY(getPlayerEnt(),  0.2);
 }}
 
var autotar = Utils.Entity.nextEnt();
if(autos == true) {
if(autotar != null) {
for(i = 0;i <= 8;i++) {
if(Player.getInventorySlot(i) == 268) {
Player.setSelectedSlotId(i);
break;
}else

if(Player.getInventorySlot(i) == 272) {
Player.setSelectedSlotId(i);
break;
}else

if(Player.getInventorySlot(i) == 283) {
Player.setSelectedSlotId(i);
break;
}else

if(Player.getInventorySlot(i) == 267) {
Player.setSelectedSlotId(i);
break;
}else

if(Player.getInventorySlot(i) == 276) {
Player.setSelectedSlotId(i);
break;
}
}
}
}


if(jesus == true) {
 if(getTile(getPlayerX(), getPlayerY() - 2, getPlayerZ()) == 8 || getTile(getPlayerX() ,getPlayerY() - 2, getPlayerZ()) == 9 || getTile(getPlayerX() ,getPlayerY() - 2, getPlayerZ()) == 10) {
  if(jesusn == true) {
  setVelY(getPlayerEnt(), -0.000000001);
  }
  if(jesush == true) {
  setVelY(getPlayerEnt(), 0.1);
  }
  if(jesuss == true) {
setVelY(getPlayerEnt(), 0.1);
setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*1.2);
setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*1.2);
}
}
}

if(tower == true && jumptower == true){
if(time !== 0) {
time--;
}
if(time == 0) {
time = 40;
setVelY(getPlayerEnt(), 0.8);
 }}
if(tower == true && exptower == true){
setRot(getPlayerEnt(), 0, 90);
if(time !== 0) {
time--;
}
if(time == 0) {
time = 20;
setPosition(getPlayerEnt(), getPlayerX(), getPlayerY() + 1.0, getPlayerZ())
Level.setTile(Player.getPointedBlockX(), Player.getPointedBlockY() - 2, Player.getPointedBlockZ(), 24)
 }}
if(bouncefly){
setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*1.08);
setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*1.08);
if(time !== 0) {
time--;
}
if(time == 0) {
time = 9;
setVelY(getPlayerEnt(),  0.33);
 }}
 
 var target = Utils.Entity.nextEnt();

if(aim == true) {

if(naim == true) {

      
if(target != null) {
Utils.Entity.aimAtEnt(target);
}
}

if(raim == true) {
if(!Utils.Entity.calculateDist(target, 8)) {
 aimlen = false;
 }


if(health > Entity.getHealth(getPlayerEnt()) ) {
aimlen = true;
health = Entity.getHealth(getPlayerEnt());
}
if(aimlen == true) {
Utils.Entity.aimAtEnt(target);
}


if(health < Entity.getHealth(getPlayerEnt())) {
health = Entity.getHealth(getPlayerEnt());
}
}

}


}



 function fastEatOn(id) {
    Item.setProperties(4 + id, {
    "name": "apple",
    "id": 4,
    "icon": "apple",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 4,
      "saturation_modifier": "low",
      "is_meat": false
    }
  });
  Item.setProperties(66 + id, {
    "name": "golden_apple",
    "id": 66,
    "icon": "apple_golden",
    "category": "Miscellaneous",
    "stack_by_data": true,
    "use_animation": "eat",
    "use_duration": uspe,
    "foil": false,
    "hover_text_color": "aqua",

    "food": {
      "nutrition": 4, 
      "saturation_modifier": "supernatural",
      "is_meat": false, 
      "effects": [
        {
          "name": "regeneration",
          "chance": 1.0,
          "duration": 5,
          "amplifier": 1
        },
        {
          "name": "absorption",
          "chance": 1.0,
          "duration": 120, 
          "amplifier": 0
        }
      ],
      "enchanted_effects": [
        {
          "name": "regeneration",
          "chance": 0.66,
          "duration": 30,
          "amplifier": 4
        },
        {
          "name": "absorption",
          "chance": 0.66,
          "duration": 120, 
          "amplifier": 0
        },
        {
          "name": "resistance", 
          "chance": 0.66,
          "duration": 300,
          "amplifier": 0
        },
        {
          "name": "fire_resistance",
          "chance": 0.66,
          "duration": 300,
          "amplifier": 0
        }
      ]
    }
  });
  Item.setProperties(210 + id, {
    "name": "appleEnchanted", 
    "id": 210,
    "icon": "apple_golden",
    "category": "Miscellaneous",
    "hand_equipped": false,
    "stack_by_data": true,
    "use_animation": "eat",
    "use_duration": uspe,
    "foil": true,
    "hover_text_color": "light_purple",

    "food": {
      "nutrition": 4,
      "saturation_modifier": "supernatural",
      "is_meat": false,
      "effects": [
        {
          "name": "regeneration",
          "chance": 1.0,
          "duration": 30,
          "amplifier": 4
        },
        {
          "name": "absorption",
          "chance": 1.0,
          "duration": 120, 
          "amplifier": 0
        },
        {
          "name": "resistance", 
          "chance": 1.0,
          "duration": 300,
          "amplifier": 0
        },
        {
          "name": "fire_resistance",
          "chance": 1.0,
          "duration": 300,
          "amplifier": 0
        }
      ]
    }
  });
  Item.setProperties(26 + id, {
    "name": "mushroom_stew",
    "id": 26,
    "icon": "mushroom_stew",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": uspe,
    "max_stack_size": 1,

    "food": {
      "nutrition": 6,
      "saturation_modifier": "normal",
      "is_meat": false,
      "using_converts_to": "item.bowl"
    }
  });
  Item.setProperties(41 + id, {
    "name": "bread",
    "id": 41,
    "icon": "bread",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 5,
      "saturation_modifier": "normal",
      "is_meat": false
    }
  });
  Item.setProperties(63 + id, {
    "name": "porkchop",
    "id": 63,
    "icon": "porkchop_raw",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 3,
      "saturation_modifier": "low",
      "is_meat": true
    }
  });
  Item.setProperties(64 + id, {
    "name": "porkchop_cooked",
    "id": 64,
    "icon": "porkchop_cooked",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 8,
      "saturation_modifier": "good",
      "is_meat": true
    }
  });
  Item.setProperties(93 + id, {
    "name": "fish",
    "id": 93,
    "icon": "fish",
    "use_animation": "eat",
    "use_duration": uspe,
    "max_damage": 0,
    "stacked_by_data": true,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "poor",
      "is_meat": true
    }
  });
  Item.setProperties(204 + id, {
    "name": "salmon",
    "id": 204,
    "icon": "salmon",
    "use_animation": "eat",
    "use_duration": uspe,
    "max_damage": 0,
    "stacked_by_data": true,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "poor",
      "is_meat": true
    }
  });
  Item.setProperties(205 + id, {
    "name": "clownfish",
    "id": 205,
    "icon": "clownfish",
    "use_animation": "eat",
    "use_duration": uspe,
    "max_damage": 0,
    "stacked_by_data": true,

    "food": {
      "nutrition": 1,
      "saturation_modifier": "poor",
      "is_meat": true
    }
  });
  Item.setProperties(206 + id, {
    "name": "pufferfish",
    "id": 206,
    "icon": "pufferfish",
    "use_animation": "eat",
    "use_duration": uspe,
    "max_damage": 0,
    "stacked_by_data": true,

    "food": {
      "nutrition": 1,
      "saturation_modifier": "poor",
      "is_meat": true,
      "effects": [
        {
          "name": "poison",
          "duration": 60,
          "amplifier": 3
        },
        {
          "name": "nausea", 
          "duration": 15,
          "amplifier": 1
        },
        {
          "name": "hunger",
          "duration": 15,
          "amplifier": 2
        }
      ]
    }
  });
  Item.setProperties(94 + id, {
    "name": "cooked_fish",
    "id": 94,
    "icon": "cooked_fish",
    "use_animation": "eat",
    "use_duration": uspe,
    "max_damage": 0,
    "stacked_by_data": true,

    "food": {
      "nutrition": 5,
      "saturation_modifier": "normal",
      "eat_sound": "random.burp",
      "is_meat": true
    }
  });
  Item.setProperties(207 + id, {
    "name": "cooked_salmon",
    "id": 207,
    "icon": "cooked_salmon",
    "use_animation": "eat",
    "use_duration": uspe,
    "max_damage": 0,
    "stacked_by_data": true,

    "food": {
      "nutrition": 6,
      "saturation_modifier": "good",
      "is_meat": true
    }
  });
  Item.setProperties(101 + id, {
    "name": "cookie",
    "id": 101,
    "icon": "cookie",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "poor",
      "is_meat": false
    }
  });
  Item.setProperties(104 + id, {
    "name": "melon",
    "id": 104,
    "icon": "melon",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "low",
      "is_meat": false
    }
  });
  Item.setProperties(107 + id, {
    "name": "beef",
    "id": 107,
    "icon": "beef_raw",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 3,
      "saturation_modifier": "low",
      "is_meat": true
    }
  });
  Item.setProperties(108 + id, {
    "name": "steak",
    "id": 108,
    "icon": "beef_cooked",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 8,
      "saturation_modifier": "good",
      "is_meat": true
    }
  });
  Item.setProperties(109 + id, {
    "name": "chicken",
    "id": 109,
    "icon": "chicken_raw",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "low",
      "is_meat": true,
      "effects": [
        {
          "name": "hunger",
          "chance": 0.3,
          "duration": 30,
          "amplifier": 0
        }
      ]
    }
  });
  Item.setProperties(110 + id, {
    "name": "cooked_chicken",
    "id": 110,
    "icon": "chicken_cooked",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 6,
      "saturation_modifier": "normal",
      "is_meat": true
    }
  });
  Item.setProperties(167 + id, {
    "name": "muttonRaw",
    "id": 167,
    "icon": "mutton_raw",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "low",
      "is_meat": true
    }
  });
  Item.setProperties(168 + id, {
    "name": "muttonCooked",
    "id": 168,
    "icon": "mutton_cooked",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 6,
      "saturation_modifier": "good",
      "is_meat": true
    }
  });
  Item.setProperties(111 + id, {
    "name": "rotten_flesh",
    "id": 111,
    "icon": "rotten_flesh",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 4,
      "saturation_modifier": "poor",
      "is_meat": true,
      "effects": [
        {
          "name": "hunger",
          "chance": 0.3,
          "duration": 30,
          "amplifier": 0
        }
      ]
    }
  });
  Item.setProperties(119 + id, {
    "name": "spider_eye",
    "id": 119,
    "icon": "spider_eye",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "good",
      "is_meat": false,
      "effects": [
        {
          "name": "poison",
          "chance": 1.0,
          "duration": 5,
          "amplifier": 0
        }
      ]
    }
  });
  Item.setProperties(135 + id, {
    "name": "carrot",
    "id": 135,
    "icon": "carrot",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 3,
      "saturation_modifier": "normal",
      "is_meat": false
    },
    "seed": {
      "crop_result": "carrots",
      "plant_at": "farmland"
    }
  });
  Item.setProperties(136 + id, {
    "name": "potato",
    "id": 136,
    "icon": "potato",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 1,
      "saturation_modifier": "low",
      "is_meat": false
    },
    "seed": {
      "crop_result": "potatoes",
      "plant_at": "farmland"
    }
  });
  Item.setProperties(137 + id, {
    "name": "baked_potato",
    "id": 137,
    "icon": "potato_baked",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 5,
      "saturation_modifier": "normal",
      "is_meat": false
    }
  });
  Item.setProperties(138 + id, {
    "name": "poisonous_potato",
    "id": 138,
    "icon": "potato_poisonous",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "low",
      "is_meat": false,
      "effects": [
        {
          "name": "poison",
          "chance": 0.6,
          "duration": 5,
          "amplifier": 0
        }
      ]
    }
  });
  Item.setProperties(140 + id, {
    "name": "golden_carrot",
    "id": 140,
    "icon": "carrot_golden",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 6,
      "saturation_modifier": "supernatural",
      "is_meat": false
    }
  });
  Item.setProperties(144 + id, {
    "name": "pumpkin_pie",
    "id": 144,
    "icon": "pumpkin_pie",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 8,
      "saturation_modifier": "low",
      "is_meat": false
    }
  });
  Item.setProperties(155 + id, {
    "name": "rabbit",
    "id": 155,
    "icon": "rabbit",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 3,
      "saturation_modifier": "low",
      "is_meat": true
    }
  });
  Item.setProperties(156 + id, {
    "name": "cooked_rabbit",
    "id": 156,
    "icon": "rabbit_cooked",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 5,
      "saturation_modifier": "normal",
      "is_meat": true
    }
  });
  Item.setProperties(157 + id, {
    "name": "rabbit_stew",
    "id": 157,
    "icon": "rabbit_stew",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": uspe,
    "max_stack_size": 1,

    "food": {
      "nutrition": 10,
      "saturation_modifier": "normal",
      "using_converts_to": "bowl",
      "is_meat": true
    }
  });
  Item.setProperties(201 + id, {
    "name": "beetroot",
    "id": 201,
    "icon": "beetroot",
    "use_animation": "eat",
    "use_duration": uspe,

    "food": {
      "nutrition": 1,
      "saturation_modifier": "normal",
      "is_meat": false
    }
  });
    Item.setProperties(203 + id, {
    "name": "beetroot_soup",
    "id": 203,
    "icon": "beetroot_soup",
    "use_animation": "eat",
    "use_duration": uspe,
    "max_stack_size": 1,

    "food": {
      "nutrition": 6,
      "saturation_modifier": "normal",
      "using_converts_to": "bowl",
      "is_meat": false
    }
  
  });
    
    

}


    
    function fastEatOff(id) {
    Item.setProperties(4 + id, {
    "name": "apple",
    "id": 4,
    "icon": "apple",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 4,
      "saturation_modifier": "low",
      "is_meat": false
    }
  });
  Item.setProperties(66 + id, {
    "name": "golden_apple",
    "id": 66,
    "icon": "apple_golden",
    "category": "Miscellaneous",
    "stack_by_data": true,
    "use_animation": "eat",
    "use_duration": 32,
    "foil": false,
    "hover_text_color": "aqua",

    "food": {
      "nutrition": 4, 
      "saturation_modifier": "supernatural",
      "is_meat": false, 
      "effects": [
        {
          "name": "regeneration",
          "chance": 1.0,
          "duration": 5,
          "amplifier": 1
        },
        {
          "name": "absorption",
          "chance": 1.0,
          "duration": 120, 
          "amplifier": 0
        }
      ],
      "enchanted_effects": [
        {
          "name": "regeneration",
          "chance": 0.66,
          "duration": 30,
          "amplifier": 4
        },
        {
          "name": "absorption",
          "chance": 0.66,
          "duration": 120, 
          "amplifier": 0
        },
        {
          "name": "resistance", 
          "chance": 0.66,
          "duration": 300,
          "amplifier": 0
        },
        {
          "name": "fire_resistance",
          "chance": 0.66,
          "duration": 300,
          "amplifier": 0
        }
      ]
    }
  });
  Item.setProperties(210 + id, {
    "name": "appleEnchanted", 
    "id": 210,
    "icon": "apple_golden",
    "category": "Miscellaneous",
    "hand_equipped": false,
    "stack_by_data": true,
    "use_animation": "eat",
    "use_duration": 32,
    "foil": true,
    "hover_text_color": "light_purple",

    "food": {
      "nutrition": 4,
      "saturation_modifier": "supernatural",
      "is_meat": false,
      "effects": [
        {
          "name": "regeneration",
          "chance": 1.0,
          "duration": 30,
          "amplifier": 4
        },
        {
          "name": "absorption",
          "chance": 1.0,
          "duration": 120, 
          "amplifier": 0
        },
        {
          "name": "resistance", 
          "chance": 1.0,
          "duration": 300,
          "amplifier": 0
        },
        {
          "name": "fire_resistance",
          "chance": 1.0,
          "duration": 300,
          "amplifier": 0
        }
      ]
    }
  });
  Item.setProperties(26 + id, {
    "name": "mushroom_stew",
    "id": 26,
    "icon": "mushroom_stew",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": 32,
    "max_stack_size": 1,

    "food": {
      "nutrition": 6,
      "saturation_modifier": "normal",
      "is_meat": false,
      "using_converts_to": "item.bowl"
    }
  });
  Item.setProperties(41 + id, {
    "name": "bread",
    "id": 41,
    "icon": "bread",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 5,
      "saturation_modifier": "normal",
      "is_meat": false
    }
  });
  Item.setProperties(63 + id, {
    "name": "porkchop",
    "id": 63,
    "icon": "porkchop_raw",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 3,
      "saturation_modifier": "low",
      "is_meat": true
    }
  });
  Item.setProperties(64 + id, {
    "name": "porkchop_cooked",
    "id": 64,
    "icon": "porkchop_cooked",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 8,
      "saturation_modifier": "good",
      "is_meat": true
    }
  });
  Item.setProperties(93 + id, {
    "name": "fish",
    "id": 93,
    "icon": "fish",
    "use_animation": "eat",
    "use_duration": 32,
    "max_damage": 0,
    "stacked_by_data": true,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "poor",
      "is_meat": true
    }
  });
  Item.setProperties(204 + id, {
    "name": "salmon",
    "id": 204,
    "icon": "salmon",
    "use_animation": "eat",
    "use_duration": 32,
    "max_damage": 0,
    "stacked_by_data": true,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "poor",
      "is_meat": true
    }
  });
  Item.setProperties(205 + id, {
    "name": "clownfish",
    "id": 205,
    "icon": "clownfish",
    "use_animation": "eat",
    "use_duration": 32,
    "max_damage": 0,
    "stacked_by_data": true,

    "food": {
      "nutrition": 1,
      "saturation_modifier": "poor",
      "is_meat": true
    }
  });
  Item.setProperties(206 + id, {
    "name": "pufferfish",
    "id": 206,
    "icon": "pufferfish",
    "use_animation": "eat",
    "use_duration": 32,
    "max_damage": 0,
    "stacked_by_data": true,

    "food": {
      "nutrition": 1,
      "saturation_modifier": "poor",
      "is_meat": true,
      "effects": [
        {
          "name": "poison",
          "duration": 60,
          "amplifier": 3
        },
        {
          "name": "nausea", 
          "duration": 15,
          "amplifier": 1
        },
        {
          "name": "hunger",
          "duration": 15,
          "amplifier": 2
        }
      ]
    }
  });
  Item.setProperties(94 + id, {
    "name": "cooked_fish",
    "id": 94,
    "icon": "cooked_fish",
    "use_animation": "eat",
    "use_duration": 32,
    "max_damage": 0,
    "stacked_by_data": true,

    "food": {
      "nutrition": 5,
      "saturation_modifier": "normal",
      "eat_sound": "random.burp",
      "is_meat": true
    }
  });
  Item.setProperties(207 + id, {
    "name": "cooked_salmon",
    "id": 207,
    "icon": "cooked_salmon",
    "use_animation": "eat",
    "use_duration": 32,
    "max_damage": 0,
    "stacked_by_data": true,

    "food": {
      "nutrition": 6,
      "saturation_modifier": "good",
      "is_meat": true
    }
  });
  Item.setProperties(101 + id, {
    "name": "cookie",
    "id": 101,
    "icon": "cookie",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "poor",
      "is_meat": false
    }
  });
  Item.setProperties(104 + id, {
    "name": "melon",
    "id": 104,
    "icon": "melon",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "low",
      "is_meat": false
    }
  });
  Item.setProperties(107 + id, {
    "name": "beef",
    "id": 107,
    "icon": "beef_raw",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 3,
      "saturation_modifier": "low",
      "is_meat": true
    }
  });
  Item.setProperties(108 + id, {
    "name": "steak",
    "id": 108,
    "icon": "beef_cooked",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 8,
      "saturation_modifier": "good",
      "is_meat": true
    }
  });
  Item.setProperties(109 + id, {
    "name": "chicken",
    "id": 109,
    "icon": "chicken_raw",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "low",
      "is_meat": true,
      "effects": [
        {
          "name": "hunger",
          "chance": 0.3,
          "duration": 30,
          "amplifier": 0
        }
      ]
    }
  });
  Item.setProperties(110 + id, {
    "name": "cooked_chicken",
    "id": 110,
    "icon": "chicken_cooked",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 6,
      "saturation_modifier": "normal",
      "is_meat": true
    }
  });
  Item.setProperties(167 + id, {
    "name": "muttonRaw",
    "id": 167,
    "icon": "mutton_raw",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "low",
      "is_meat": true
    }
  });
  Item.setProperties(168 + id, {
    "name": "muttonCooked",
    "id": 168,
    "icon": "mutton_cooked",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 6,
      "saturation_modifier": "good",
      "is_meat": true
    }
  });
  Item.setProperties(111 + id, {
    "name": "rotten_flesh",
    "id": 111,
    "icon": "rotten_flesh",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 4,
      "saturation_modifier": "poor",
      "is_meat": true,
      "effects": [
        {
          "name": "hunger",
          "chance": 0.3,
          "duration": 30,
          "amplifier": 0
        }
      ]
    }
  });
  Item.setProperties(119 + id, {
    "name": "spider_eye",
    "id": 119,
    "icon": "spider_eye",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "good",
      "is_meat": false,
      "effects": [
        {
          "name": "poison",
          "chance": 1.0,
          "duration": 5,
          "amplifier": 0
        }
      ]
    }
  });
  Item.setProperties(135 + id, {
    "name": "carrot",
    "id": 135,
    "icon": "carrot",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 3,
      "saturation_modifier": "normal",
      "is_meat": false
    },
    "seed": {
      "crop_result": "carrots",
      "plant_at": "farmland"
    }
  });
  Item.setProperties(136 + id, {
    "name": "potato",
    "id": 136,
    "icon": "potato",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 1,
      "saturation_modifier": "low",
      "is_meat": false
    },
    "seed": {
      "crop_result": "potatoes",
      "plant_at": "farmland"
    }
  });
  Item.setProperties(137 + id, {
    "name": "baked_potato",
    "id": 137,
    "icon": "potato_baked",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 5,
      "saturation_modifier": "normal",
      "is_meat": false
    }
  });
  Item.setProperties(138 + id, {
    "name": "poisonous_potato",
    "id": 138,
    "icon": "potato_poisonous",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 2,
      "saturation_modifier": "low",
      "is_meat": false,
      "effects": [
        {
          "name": "poison",
          "chance": 0.6,
          "duration": 5,
          "amplifier": 0
        }
      ]
    }
  });
  Item.setProperties(140 + id, {
    "name": "golden_carrot",
    "id": 140,
    "icon": "carrot_golden",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 6,
      "saturation_modifier": "supernatural",
      "is_meat": false
    }
  });
  Item.setProperties(144 + id, {
    "name": "pumpkin_pie",
    "id": 144,
    "icon": "pumpkin_pie",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 8,
      "saturation_modifier": "low",
      "is_meat": false
    }
  });
  Item.setProperties(155 + id, {
    "name": "rabbit",
    "id": 155,
    "icon": "rabbit",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 3,
      "saturation_modifier": "low",
      "is_meat": true
    }
  });
  Item.setProperties(156 + id, {
    "name": "cooked_rabbit",
    "id": 156,
    "icon": "rabbit_cooked",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 5,
      "saturation_modifier": "normal",
      "is_meat": true
    }
  });
  Item.setProperties(157 + id, {
    "name": "rabbit_stew",
    "id": 157,
    "icon": "rabbit_stew",
    "category": "Miscellaneous",
    "use_animation": "eat",
    "use_duration": 32,
    "max_stack_size": 1,

    "food": {
      "nutrition": 10,
      "saturation_modifier": "normal",
      "using_converts_to": "bowl",
      "is_meat": true
    }
  });
  Item.setProperties(201 + id, {
    "name": "beetroot",
    "id": 201,
    "icon": "beetroot",
    "use_animation": "eat",
    "use_duration": 32,

    "food": {
      "nutrition": 1,
      "saturation_modifier": "normal",
      "is_meat": false
    }
  });
    Item.setProperties(203 + id, {
    "name": "beetroot_soup",
    "id": 203,
    "icon": "beetroot_soup",
    "use_animation": "eat",
    "use_duration": 32,
    "max_stack_size": 1,

    "food": {
      "nutrition": 6,
      "saturation_modifier": "normal",
      "using_converts_to": "bowl",
      "is_meat": false
    }
  
  });
  
  
  }
  
function useItem(x, y, z, itemId, blockId, side)
{
if(ported == true){
setPosition(getPlayerEnt(), Player.getPointedBlockX(), Player.getPointedBlockY() + 3.0, Player.getPointedBlockZ())
 }
}
  
function chatHook(text) {
var spli = text.split(" ");

if(text==".help"){
preventDefault();
clientMessage("§7[§aXive§7] §a.t <Module>!");
clientMessage(Client+"§a.glide");
clientMessage(Client+"§a.speedmotion <Value>");
clientMessage(Client+"§a.aimrange <Value>");
clientMessage(Client+"§a.configs (Configs for perfect settings)");
clientMessage(Client+"§a.ctspeed (all settings for Custom-Speed)");
clientMessage(Client+"§a.friend <name>");
clientMessage(Client+"§a.friends (to list up your friends)");
clientMessage(Client+"§a.removeFriend <friend> to remove friend");
clientMessage(Client+"§a.spammessage <spam word>");
clientMessage(Client+"§a.spamdelay <delay>");
 }
 
 if(spli[0] == ".spammessage") {
 preventDefault();
spammes = spli[1];
clientMessage(Client+"set spam message to: "+spli[1]);
 }

 if(spli[0] == ".spamdelay") {
 preventDefault();
 if(parseInt(spli[1])) {
 clientMessage(Client +"set spam delay to: "+spli[1]);
 spamtime = spli[1]*20;
 spamspeed = spli[1]*20;
 }else if(spli[1] == "0") {
 clientMessage(Client +"set spam delay to: "+spli[1]);
 spamtime = spli[1];
 spamspeed = spli[1];
 }
 }
if(text==".t AimAura"){
preventDefault();
if(aimed==false && aim==false){
aimed = true;
aim = true;
clientMessage("§7[§aXive§7] §aAimAura enabled");
}else{
aimed = false;
aim = false;
clientMessage("§7[§aXive§7] §aAimAura disabled");
}}
if(spli[0] == ".aimrange") {
preventDefault();
 if(parseFloat(spli[1])) {
 maxr = spli[1];
 clientMessage("§7[§aXive§7] §aset AimAura range to: "+ spli[1]);
 }else {
 clientMessage("§7[§aXive§7] §aInvalid Arguments");
  }}
if(spli[0] == ".glidemotion") {
preventDefault();
if(parseFloat(spli[1])) {
gdown = spli[1];
clientMessage("§7[§aXive§7] §aset Glide motion to: "+spli[1]);
 }else {
 clientMessage("§7[§aXive§7] §aInvalid Arguments");
 }}
if(spli[0] == ".speedmotion") {
preventDefault();
if(parseFloat(spli[1])) {
smotion = spli[1];
clientMessage(Client+"§aset MotionSpeed to: "+spli[1]);
}else{
clientMessage(Client+"§aInvalid Arguments");
}}
if(spli[0] == ".glidespeed") {
preventDefault();
if(parseFloat(spli[1])) {
gspeed = spli[1];
clientMessage(Client+"§aset Glide speed to: "+spli[1]);
}else{
clientMessage(Client+"§aInvalid Arguments");
}}
if(text==".t Bypass"){
preventDefault();
if(bypsed==false && bpasssw==false){
bypsed = true;
bypasssw = true;
clientMessage("§7[§aXive§7] §aBypass enabled");
}else{
bypsed = false;
bpasssw = false;
clientMessage("§7[§aXive§7] §aBypass disabled");
}}
if(text==".t Speed"){
preventDefault();
if(sped==false){
sped = true;
mxspeed = true;
mbspeed = true;
vspeed = true;
gtspeed = true;
clientMessage("§7[§aXive§7] §aSpeed enabled");
}else{
sped = true;
mxspeed = true;
mbspeed = true;
vspeed = true;
gtspeed = true;
clientMessage("§7[§aXive§7] §aSpeed disabled");
}}
if(text==".t FastEat"){
preventDefault();
if(eaet==false){
eaet = true;
fastEatOn(256);
clientMessage("§7[§aXive§7] §aFastEat enabled");
}else{
eaet = false;
fastEatOff(256);
clientMessage("§7[§aXive§7] §aFastEat disabled");
}}
if(text==".t NoKnockback"){
preventDefault();
if(non==false && nock==false){
non = true;
nock = true;
clientMessage("§7[§aXive§7] §aNoKnockback enabled");
}else{
non = false;
nock = false;
clientMessage("§7[§aXive§7] §aNoKnockback disabled");
}}
if(text==".t BounceFly"){
preventDefault();
if(bfed==false && bouncefly==false){
bfed = true;
bouncefly = true;
clientMessage("§7[§aXive§7] §aBounceFly enabled");
}else{
bfed = false;
bouncefly = false;
clientMessage("§7[§aXive§7] §aBounceFly disabled");
}}
if(text==".t Creative"){
preventDefault();
if(gmed==false){
gmed = true;
Level.setGameMode(1);
clientMessage("§7[§aXive§7] §aCreative enabled");
}else{
gmed = false;
Level.setGameMode(0);
clientMessage("§7[§aXive§7] §aCreative disabled");
}}
if(text==".t Tower"){
preventDefault();
if(towed==false && tower==false){
towed = true;
tower = true;
clientMessage("§7[§aXive§7] §aTower enabled");
}else{
towed = false;
tower = false;
clientMessage("§7[§aXive§7] §aTower disabled");
}}
if(text==".t Glide"){
preventDefault();
if(glded==false && glide==false){
glded = true;
glide = true;
clientMessage("§7[§aXive§7] §aGlide enabled");
}else{
glded = false;
glide = false;
clientMessage("§7[§aXive§7] §aGlide disabled");
}}
if(text==".t autoSword"){
preventDefault();
if(autosed==false && autos==false){
autosed = true;
autos = true;
clientMessage("§7[§aXive§7] §aautoSword enabled");
}else{
autosed = false;
autos = false;
clientMessage("§7[§aXive§7] §aautoSword disabled");
}}
if(text==".t Jesus"){
preventDefault();
if(jesused==false && jesus==false){
jesused = true;
jesus = true;
clientMessage("§7[§aXive§7] §aJesus enabled");
}else{
jesused = false;
jesus = false;
clientMessage("§7[§aXive§7] §aJesus disabled");
}}
if(text==".glide"){
preventDefault();
clientMessage("§7[§aXive§7] §aTry .glidemotion | .glidespeed");
 }
 
if(spli[0] == ".friend") {
preventDefault();
clientMessage(Client +"add friend: " +spli[1]);
friends.push(spli[1]);
}
if(text == ".friends") {
preventDefault();
clientMessage(Client +"§2" +friends);
}
if(spli[0] == ".removeFriend") {
preventDefault();
for(i = 0;i < friends.length;i++) {
if(friends[i] == spli[1]) {
clientMessage(Client +"removed friend: "+ spli[1]);
friends.splice(i, 1);
}else {
clientMessage(Client +"invalid Arguments");
}}}
if(text==".ctspeed"){
preventDefault();
clientMessage("§7[§aXive§7] §aTry .ctmotion | .cttimer | .ctjump | .ctmotionground | .ctvel");
 }
if(text==".ctjump"){
preventDefault();
if(jumpct==false){
jumpct = true;
clientMessage("§7[§aXive§7] §aCustomSpeed Jump mode enabled");
}else{
jumpct = false;
clientMessage("§7[§aXive§7] §aCustomSpeed Jump mode disabled");
}}
if(spli[0] == ".ctvel") {
preventDefault();
if(parseFloat(spli[1])) {
velct = spli[1];
clientMessage("§7[§aXive§7] §aset CustomSpeed Velocity to: "+spli[1]);
 }else {
 clientMessage("§7[§aXive§7] §aInvalid Arguments");
 }}
if(spli[0] == ".cttimer") {
preventDefault();
if(parseInt(spli[1])) {
timerct = spli[1];
clientMessage("§7[§aXive§7] §aset CustomSpeed timer to: "+spli[1]);
 }else {
 clientMessage("§7[§aXive§7] §aInvalid Arguments");
 }}
if(spli[0] == ".ctmotion") {
preventDefault();
if(parseFloat(spli[1])) {
motionct = spli[1];
clientMessage("§7[§aXive§7] §aset CustomSpeed Motion to: "+spli[1]);
 }else {
 clientMessage("§7[§aXive§7] §aInvalid Arguments");
 }}
if(text==".ctmotionground") {
preventDefault();
if(groundct == false){
groundct = true;
clientMessage("§7[§aXive§7] §aCustomSpeed MotionOnGround enabled");
 }else {
 groundct = false;
 clientMessage("§7[§aXive§7] §aCustomSpeed MotionOnGround disabled");
 }}
if(text==".configs"){
preventDefault();
clientMessage(Client+"§7available Configs: LBSG");
clientMessage(Client+"§7load a config with .cload <Config>");
 }
if(text==".cload LBSG"){
preventDefault();
maxr = 8;
smotion = 1.2;
gspeed = 1.04;
gdown = 0.04;
spamtime = 4*20;
spamspeed = 4*20;
clientMessage(Client+"§7Loaded Config 'LBSG' succesfully");
 }
if(text==".cload Goat"){
preventDefault();
maxr = 4;
smotion = 1.3;
gspeed = 1.03;
gdown = 0.4;
clientMessage(Client+"§7Loaded Config 'Goat' succesfully");
 }
if(spli[0] == ".jumpboost") {
preventDefault();
if(parseFloat(spli[1])) {
jumpboost = spli[1];
clientMessage("§7[§aXive§7] §aset Longjump Boost to: "+spli[1]);
 }else {
 clientMessage("§7[§aXive§7] §aInvalid Arguments");
 }}
}
