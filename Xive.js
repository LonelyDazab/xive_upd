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
var bg2 = new android.graphics.drawable.GradientDrawable(); //Für Buttons
bg2.setColor(android.graphics.Color.BLACK);

var bg3 = new android.graphics.drawable.GradientDrawable(); //Für Acktivierte Buttons
bg3.setColor(android.graphics.Color.GREEN);

var Team = "Xive - Client Team";
var time = 18;
var time2 = 10;
var stripe = "---";
var gravity = -0.07840000092983246;
var Client = "§7[§aXive§7] ";
var friends = new Array();
var playerDir = [0, 0, 0];
var DEG_TO_RAD = Math.PI / 180;
var pS = 0.2;

var Scroll1 = null;

var Scroll2 = null;
var Scroll3 = null;
var Scroll4 = null;
var Scroll5 = null;
var Scroll6 = null;
var Scroll7 = null;

var Scrollsetw = null;
var Scrollsetje = null;
var Scrollsetai = null;
var Scrollsetspeed = null;
var Scrollsettele = null;
var Scrollsetcol = null;

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
var ctyport = false;
var jhspe = false;

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

var escap = false;

var mobaimed = true;
var playaimed = true;

var mobported = true;
var playported = true;

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

var baimed = false;
var antibot = false;

var spammer = false;
var spamtime = 3*20;
var spamspeed = 3*20;
var state = 0;
var spammes = Client;

var multijump = false;
var longjump = false;
var jumpboost = 1.15;

var fastladder = false;
var climbspeed = 0.4;

var spamb = false;

var ported = false;
var ported2 = false;
var playerport = false;
var portrange = 20;

var safewalk = false;

var scaffold = false;

var noslow = false;

var bowr = 30;

var autow = false;
var jatpack = false;

var passcheck = false;
var passw = false;

var nofall = false;
		
var PasManager = {
	pas: new org.json.JSONArray(),
	getPas: function() {
	return this.pas.getString(this.pas.length()-1);
	},
	loadFromFile: function () {
		try {
			var file = new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/Xive/", "password.dat");
			var readed = (new java.io.BufferedReader(new java.io.FileReader(file)));
			var data = new java.lang.StringBuilder();
			var string;
			while((string = readed.readLine()) != null) {
				data.append(string);

			}
			try {
				this.pas = new org.json.JSONArray(data.toString());
			} catch(e) {
				
			}
		} catch(e) {
			//Seems like theres no file
		}
	},
	saveToFile: function () {
		var dir = new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/Xive");
		if(!dir.exists()) dir.mkdir();
		var file = new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/Xive/", "password.dat");
		if(!file.exists()) file.createNewFile();
		var stream = new java.io.FileOutputStream(file);
		try {
			stream.write(this.pas.toString().getBytes());
		} finally {
			stream.close();
		}
	},
	setPas: function (pas) {
		this.pas.put(pas);
		this.saveToFile();
	},
	
};
PasManager.loadFromFile();

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
		},
	
	checkHeigth: function() {
	var x = getPlayerX();
	var y = getPlayerY();
	var z = getPlayerZ();
	var ground = true;
	var gy;
	for(i=0;i<256;i++) {
	if(getTile(x, y-i, z) != 0) {
	ground = false;
	gy = y-i+1.6;
	break;
	}
	}
	
	return gy;
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
							
							nextShot: function() {
var mobs = Entity.getAll();
							var players = Server.getAllPlayers();
							var small = bowr;
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
							
							nextPort: function() {
var mobs = Entity.getAll();
							var players = Server.getAllPlayers();
							var small = portrange;
							var ent = null;
							for (var i = 0; i < mobs.length; i++) {
								var x = Entity.getX(mobs[i]) - getPlayerX();
								var y = Entity.getY(mobs[i]) - getPlayerY();
								var z = Entity.getZ(mobs[i]) - getPlayerZ();
								var dist = Math.sqrt(Math.pow(x,2) + Math.pow(y,2) + Math.pow(z,2));
								if(dist < small && dist > 0 && Entity.getEntityTypeId(mobs[i]) <= 63 && Entity.getHealth(mobs[i]) >= 1){
							
							
if(mobported == true) {	if(Utils.Friends.isFriend(ent)) {
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
						
						
if(playported == true) {	if(Utils.Friends.isFriend(ent)) {
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
							
							isGround: function(ent) {
			for(i = 0;i < ent.length;i++) {
			var y = Entity.getY(ent[i]);
			while (y > 1) y -= 1;

			if (Math.round(y * 100) == 62 && getTile(Entity.getX(ent[i]), Entity.getY(ent[i]) - 1.65, Entity.getZ(ent[i])) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(ent[i]), Entity.getY(ent[i]) - 1.65, Entity.getZ(ent[i])))) return true;
			if (Math.round(y * 100) == 12 && getTile(Entity.getX(ent[i]), Entity.getY(ent[i]) - 1.65, Entity.getZ(ent[i])) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(ent[i]), Entity.getY(ent[i]) - 1.65, Entity.getZ(ent[i])))) return true;
			return false;
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
   
   },
   
   BowAtEnt: function(ent) {
							if(ent != null){
								var x = Entity.getX(ent) - getPlayerX();
								var y = Entity.getY(ent) - getPlayerY();
								var z = Entity.getZ(ent) - getPlayerZ();
								if(Entity.getEntityTypeId(ent) != 63)
									y += 0.9;
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
   
   },
   
   doAimAtEnt: function(ent) {
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
								if(pitch > 0) {
								pitch = pitch + pitch*2;
								}else if(pitch < 0) {
								pitch = pitch - pitch*2;
								}
								if (pitch < 90 && pitch > -90) {										
									Entity.setRot(Player.getEntity(), -Math.atan2(a - (Player.getX() + 0.5), c - (Player.getZ() + 0.5)) * (180 / Math.PI)-180, 0);
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

function clearCli() {
if(Scroll1 != null) {
menu.dismiss();
						Scroll1 = null;
						}
	clearGui();
diSeSo();

}


function clearGui() {
if(Scroll2 != null) {
Scroll2 = null;
movep.dismiss();
}

if(Scroll3 != null) {
Scroll3 = null;
comep.dismiss();
}

if(Scroll4 != null) {
Scroll4 = null;
plaep.dismiss();
}

if(Scroll5 != null) {
Scroll5 = null;
worep.dismiss();
}
if(Scroll6 != null) {
Scroll6 = null;
otep.dismiss();
}
if(Scroll7 != null) {
Scroll7 = null;
setep.dismiss();
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
			if(Scroll1 == null) {
				Hub();
				}else {
				menu.dismiss();
						Scroll1 = null;
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
	
function Hub() {
ctx.runOnUiThread(new Runnable({ run: function(){
		try{
		
		
	var hub1 = new LinearLayout(ctx);
	hub1.setOrientation(1);
	Scroll1 = new ScrollView(ctx);
	
	var hub2 = new LinearLayout(ctx);
	hub2.setOrientation(1);
	
	Scroll1.addView(hub1);
	hub2.addView(Scroll1);
	hub2.setBackground(bg);
	hub2.getBackground().setAlpha(100);
	
	var mov = new Button(ctx);
			mov.setText("Movement");
			mov.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			mov.setPadding(25, 2, 2, 2);
			mov.setBackground(bg2);
			mov.getBackground().setAlpha(100);
			mov.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					clearGui();
						if(Scroll2 == null) {
						movGui();
						}
					}
			}));
			hub1.addView(mov);
			
			
	var com = new Button(ctx);
			com.setText("combat");
			com.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			com.setPadding(25, 2, 2, 2);
			com.setBackground(bg2);
			com.getBackground().setAlpha(100);
			com.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
						clearGui();
						if(Scroll3 == null) {
						comGui();
						}
					}
			}));
			hub1.addView(com);
			

			var pla = new Button(ctx);
			pla.setText("Player");
			pla.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			pla.setPadding(25, 2, 2, 2);
			pla.setBackground(bg2);
			pla.getBackground().setAlpha(100);
			pla.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
				clearGui();
						if(Scroll4 == null) {
						plaGui();
						}
					}
			}));
			hub1.addView(pla);
			
						
						var wor = new Button(ctx);
			wor.setText("World");
			wor.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			wor.setPadding(25, 2, 2, 2);
			wor.setBackground(bg2);
			wor.getBackground().setAlpha(100);
			wor.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
				clearGui();
						if(Scroll5 == null) {
						worGui();
						}
					}
			}));
			hub1.addView(wor);
		
		var ot = new Button(ctx);
			ot.setText("Other");
			ot.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			ot.setPadding(25, 2, 2, 2);
			ot.setBackground(bg2);
			ot.getBackground().setAlpha(100);
			ot.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
				clearGui();
						if(Scroll6 == null) {
						otGui();
						}
					}
			}));
			hub1.addView(ot);
						
			var setti = new Button(ctx);
			setti.setText("Settings");
			setti.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			setti.setPadding(25, 2, 2, 2);
			setti.setBackground(bg2);
			setti.getBackground().setAlpha(100);
			setti.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
				clearGui();
						if(Scroll7 == null) {
						setGui();
						}
					}
			}));
			hub1.addView(setti);
			
			
						
	
	menu = new PopupWindow(hub2, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
			menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.CENTER, 0, 0);

	}catch(error){
				Toast.makeText(ctx, "An error occured: " + error, 1).show();
			}
	}}));
}

function movGui() {
ctx.runOnUiThread(new Runnable({ run: function(){
		try{
		
		
	var lmov1 = new LinearLayout(ctx);
	lmov1.setOrientation(1);
	Scroll2 = new ScrollView(ctx);
	
	var lmov2 = new LinearLayout(ctx);
	lmov2.setOrientation(1);
	
	Scroll2.addView(lmov1);
	lmov2.addView(Scroll2);
	lmov2.setBackground(bg);
	lmov2.getBackground().setAlpha(100);

var exitM = new Button(ctx);
			exitM.setText("Exit");
			exitM.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			exitM.setPadding(25, 2, 2, 2);
			exitM.setBackground(bg2);
			exitM.getBackground().setAlpha(100);
			exitM.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
						movep.dismiss();
						Scroll2 = null;
					}
			}));
			lmov1.addView(exitM);
			
			var sp = new Button(ctx);
			sp.setText("Speed");
			sp.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			sp.setPadding(25, 2, 2, 2);
			if(sped == false) {
			sp.setBackground(bg2);
			}else {
			sp.setBackground(bg3);
			}
			sp.getBackground().setAlpha(100);
			sp.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					
						if(sped == false) {
						sped = true
						sp.setBackground(bg3);
						}else {
						ModPE.setGameSpeed(20);
						sped = false;
						sp.setBackground(bg2);
						}
					}
			}));
			lmov1.addView(sp);
			
			var jeo = new Button(ctx);
			jeo.setText("Jesus");
			jeo.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			jeo.setPadding(25, 2, 2, 2);
			if(jesus == false) {
			jeo.setBackground(bg2);
			}else {
			jeo.setBackground(bg3);
			}
			jeo.getBackground().setAlpha(100);
			jeo.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					
						if(jesus == false) {
						jesus = true
						jeo.setBackground(bg3);
						}else {
						jesus = false;
						jeo.setBackground(bg2);
						}
					}
			}));
			lmov1.addView(jeo);
			
			var gld = new Button(ctx);
			gld.setText("Glide");
			gld.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			gld.setPadding(25, 2, 2, 2);
			if(glide == false) {
			gld.setBackground(bg2);
			}else {
			gld.setBackground(bg3);
			}
			gld.getBackground().setAlpha(100);
			gld.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					
						if(glide == false) {
						glide = true
						gld.setBackground(bg3);
						}else {
						glide = false;
						gld.setBackground(bg2);
						}
					}
			}));
			lmov1.addView(gld);
			
			var bf = new Button(ctx);
			bf.setText("BounceFly");
			bf.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			bf.setPadding(25, 2, 2, 2);
			if(bouncefly == false) {
			bf.setBackground(bg2);
			}else {
			bf.setBackground(bg3);
			}
			bf.getBackground().setAlpha(100);
			bf.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					
						if(bouncefly == false) {
						bouncefly = true
						bf.setBackground(bg3);
						}else {
						bouncefly = false;
						bf.setBackground(bg2);
						}
					}
			}));
			lmov1.addView(bf);
			
			var mjump = new Button(ctx);
			mjump.setText("DoubelJump");
			mjump.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			mjump.setPadding(25, 2, 2, 2);
			if(multijump == false) {
			mjump.setBackground(bg2);
			}else {
			mjump.setBackground(bg3);
			}
			mjump.getBackground().setAlpha(100);
			mjump.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					
						if(multijump == false) {
						multijump = true
						mjump.setBackground(bg3);
						}else {
						multijump = false;
						mjump.setBackground(bg2);
						}
					}
			}));
			lmov1.addView(mjump);
			
			var ljump = new Button(ctx);
			ljump.setText("LongJump");
			ljump.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			ljump.setPadding(25, 2, 2, 2);
			if(longjump == false) {
			ljump.setBackground(bg2);
			}else {
			ljump.setBackground(bg3);
			}
			ljump.getBackground().setAlpha(100);
			ljump.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					
						if(longjump == false) {
						longjump = true
						ljump.setBackground(bg3);
						}else {
						longjump = false;
						ljump.setBackground(bg2);
						}
					}
			}));
			lmov1.addView(ljump);
			
			var safe = new Button(ctx);
			safe.setText("Safewalk");
			safe.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			safe.setPadding(25, 2, 2, 2);
			if(safewalk == false) {
			safe.setBackground(bg2);
			}else {
			safe.setBackground(bg3);
			}
			safe.getBackground().setAlpha(100);
			safe.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					
						if(safewalk == false) {
						clientMessage(Client+"§aOnly working on Servers");
      safewalk = true;
						safe.setBackground(bg3);
						}else {
						safewalk = false;
						safe.setBackground(bg2);
						}
					}
			}));
			lmov1.addView(safe);
			
			
			var walk = new Button(ctx);
			walk.setText("AutoWalk");
			walk.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			walk.setPadding(25, 2, 2, 2);
			if(autow == false) {
			walk.setBackground(bg2);
			}else {
			walk.setBackground(bg3);
			}
			walk.getBackground().setAlpha(100);
			walk.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					
						if(autow == false) {
						
      autow = true;
						walk.setBackground(bg3);
						}else {
						autow = false;
						walk.setBackground(bg2);
						}
					}
			}));
			lmov1.addView(walk);
			
			var jp = new Button(ctx);
			jp.setText("JatPack");
			jp.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			jp.setPadding(25, 2, 2, 2);
			if(jatpack == false) {
			jp.setBackground(bg2);
			}else {
			jp.setBackground(bg3);
			}
			jp.getBackground().setAlpha(100);
			jp.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					
						if(jatpack == false) {
						
      jatpack = true;
						jp.setBackground(bg3);
						}else {
						jatpack = false;
						jp.setBackground(bg2);
						}
					}
			}));
			lmov1.addView(jp);
			

movep = new PopupWindow(lmov2, RelativeLayout.LayoutParams.WRAP_CONTENT, ctx.getWindowManager().getDefaultDisplay().getHeight());
			movep.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.CENTER, 0, 0);

	}catch(error){
				Toast.makeText(ctx, "An error occured: " + error, 1).show();
			}
	}}));
}

function comGui() {
ctx.runOnUiThread(new Runnable({ run: function(){
		try{
		
		
	var lcom1 = new LinearLayout(ctx);
	lcom1.setOrientation(1);
	Scroll3 = new ScrollView(ctx);
	
	var lcom2 = new LinearLayout(ctx);
	lcom2.setOrientation(1);
	
	Scroll3.addView(lcom1);
	lcom2.addView(Scroll3);
	lcom2.setBackground(bg);
	lcom2.getBackground().setAlpha(100);
	
	
	
	
	var exitC = new Button(ctx);
			exitC.setText("Exit");
			exitC.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			exitC.setPadding(25, 2, 2, 2);
			exitC.setBackground(bg2);
			exitC.getBackground().setAlpha(100);
			exitC.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					
						comep.dismiss();
						Scroll3 = null;
					}
			}));
			lcom1.addView(exitC);
			
			var ai = new Button(ctx);
			ai.setText("AimAura");
			ai.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			ai.setPadding(25, 2, 2, 2);
			if(aim == false) {
			ai.setBackground(bg2);
			}else {
			ai.setBackground(bg3);
			}
			ai.getBackground().setAlpha(100);
			ai.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					
						if(aim == false) {
						aim = true
						ai.setBackground(bg3);
						}else {
						aim = false;
						ai.setBackground(bg2);
						}
					}
			}));
			lcom1.addView(ai);
			
			
			
			var ato = new Button(ctx);
			ato.setText("AutoSword");
			ato.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			ato.setPadding(25, 2, 2, 2);
			if(autos == false) {
			ato.setBackground(bg2);
			}else {
			ato.setBackground(bg3);
			}
			ato.getBackground().setAlpha(100);
			ato.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					
						if(autos == false) {
						autos = true
						ato.setBackground(bg3);
						}else {
						autos = false;
					ato.setBackground(bg2);
						}
					}
			}));
			lcom1.addView(ato);



comep = new PopupWindow(lcom2, RelativeLayout.LayoutParams.WRAP_CONTENT, ctx.getWindowManager().getDefaultDisplay().getHeight());
			comep.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.CENTER, 0, 0);

	}catch(error){
				Toast.makeText(ctx, "An error occured: " + error, 1).show();
			}
	}}));
}

function plaGui() {
ctx.runOnUiThread(new Runnable({ run: function(){
		try{
		
		
	var lpla1 = new LinearLayout(ctx);
	lpla1.setOrientation(1);
	Scroll4 = new ScrollView(ctx);
	
	var lpla2 = new LinearLayout(ctx);
	lpla2.setOrientation(1);
	
	Scroll4.addView(lpla1);
	lpla2.addView(Scroll4);
	lpla2.setBackground(bg);
	lpla2.getBackground().setAlpha(100);
	
	
	var exitP = new Button(ctx);
			exitP.setText("Exit");
			exitP.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			exitP.setPadding(25, 2, 2, 2);
			exitP.setBackground(bg2);
			exitP.getBackground().setAlpha(100);
			exitP.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
						
						plaep.dismiss();
						Scroll4 = null;
					}
			}));
			lpla1.addView(exitP);
			
			var eat = new Button(ctx);
			eat.setText("FastEat");
			eat.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			eat.setPadding(25, 2, 2, 2);
			if(eaet == false) {
			eat.setBackground(bg2);
			}else {
			eat.setBackground(bg3);
			}
			eat.getBackground().setAlpha(100);
			eat.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					
						if(eaet == false) {
						eaet = true
						fastEatOn(256);
					eat.setBackground(bg3);
						}else {
						eaet = false;
						fastEatOff(256);
						eat.setBackground(bg2);
						}
					}
			}));
			lpla1.addView(eat);
			
			
				var nnock = new Button(ctx);
			nnock.setText("NoKnock");
			nnock.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			nnock.setPadding(25, 2, 2, 2);
			if(nock == false) {
			nnock.setBackground(bg2);
			}else {
			nnock.setBackground(bg3);
			}
			nnock.getBackground().setAlpha(100);
			nnock.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					
						if(nock == false) {
						nock = true
					nnock.setBackground(bg3);
						}else {
						nock = false;
						nnock.setBackground(bg2);
						}
					}
			}));
			lpla1.addView(nnock);
			
			var nsl = new Button(ctx);
			nsl.setText("NoSlow");
			nsl.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			nsl.setPadding(25, 2, 2, 2);
			if(noslow == false) {
			nsl.setBackground(bg2);
			}else {
			nsl.setBackground(bg3);
			}
			nsl.getBackground().setAlpha(100);
			nsl.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					
						if(noslow == false) {
						noslow = true
					nsl.setBackground(bg3);
						}else {
						noslow = false;
						nsl.setBackground(bg2);
						}
					}
			}));
			lpla1.addView(nsl);
			
			
			
   var tport = new Button(ctx);
			tport.setText("Teleport");
			tport.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			tport.setPadding(25, 2, 2, 2);
			if(ported == false) {
			tport.setBackground(bg2);
			}else {
			tport.setBackground(bg3);
			}
			tport.getBackground().setAlpha(100);
			tport.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					
						if(ported == false) {
						ported = true
					tport.setBackground(bg3);
						}else {
						ported = false;
						tport.setBackground(bg2);
						}
					}
			}));
			lpla1.addView(tport);
			
			var esc = new Button(ctx);
			esc.setText("Escape");
			esc.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			esc.setPadding(25, 2, 2, 2);
			if(escap == false) {
			esc.setBackground(bg2);
			}else {
			esc.setBackground(bg3);
			}
			esc.getBackground().setAlpha(100);
			esc.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					
						if(escap == false) {
						escap = true
					esc.setBackground(bg3);
						}else {
						escap = false;
						esc.setBackground(bg2);
						}
					}
			}));
			lpla1.addView(esc);
			
			var nfall = new Button(ctx);
			nfall.setText("NoFall");
			nfall.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			nfall.setPadding(25, 2, 2, 2);
			if(nofall == false) {
			nfall.setBackground(bg2);
			}else {
			nfall.setBackground(bg3);
			}
			nfall.getBackground().setAlpha(100);
			nfall.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					
						if(nofall == false) {
						nofall = true
					nfall.setBackground(bg3);
						}else {
						nofall = false;
						nfall.setBackground(bg2);
						}
					}
			}));
			lpla1.addView(nfall);


plaep = new PopupWindow(lpla2, RelativeLayout.LayoutParams.WRAP_CONTENT, ctx.getWindowManager().getDefaultDisplay().getHeight());
			plaep.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.CENTER, 0, 0);

	}catch(error){
				Toast.makeText(ctx, "An error occured: " + error, 1).show();
			}
	}}));
}

function worGui() {
ctx.runOnUiThread(new Runnable({ run: function(){
		try{
		
		
	var lwor1 = new LinearLayout(ctx);
	lwor1.setOrientation(1);
	Scroll5 = new ScrollView(ctx);
	
	var lwor2 = new LinearLayout(ctx);
	lwor2.setOrientation(1);
	
	Scroll5.addView(lwor1);
	lwor2.addView(Scroll5);
	lwor2.setBackground(bg);
	lwor2.getBackground().setAlpha(100);
	
	
	
var exitW = new Button(ctx);
			exitW.setText("Exit");
			exitW.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			exitW.setPadding(25, 2, 2, 2);
			exitW.setBackground(bg2);
			exitW.getBackground().setAlpha(100);
			exitW.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
						
						worep.dismiss();
						Scroll5 = null;
					}
			}));
			lwor1.addView(exitW);
			
			
			var gm = new Button(ctx);
			gm.setText("Gamemode");
			gm.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			gm.setPadding(25, 2, 2, 2);
			if(gmed == false) {
			gm.setBackground(bg2);
			}else {
			gm.setBackground(bg3);
			}
			gm.getBackground().setAlpha(100);
			gm.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					
						if(gmed == false) {
						gmed = true
						Level.setGameMode(1);
						gm.setBackground(bg3);
						}else {
						gmed = false;
						Level.setGameMode(0);
						gm.setBackground(bg2);
						}
					}
			}));
			lwor1.addView(gm);
			
			
			var tow = new Button(ctx);
			tow.setText("Tower");
			tow.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			tow.setPadding(25, 2, 2, 2);
			if(tower == false) {
			tow.setBackground(bg2);
			}else {
			tow.setBackground(bg3);
			}
			tow.getBackground().setAlpha(100);
			tow.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					
						if(tower == false) {
						tower = true;
						tow.setBackground(bg3);
						}else {
						tower = false;
						tow.setBackground(bg2);
						}
					}
			}));
			lwor1.addView(tow);
			
			
			var pets = new Button(ctx);
			pets.setText("Step");
			pets.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			pets.setPadding(25, 2, 2, 2);
			if(step == false) {
			pets.setBackground(bg2);
			}else {
			pets.setBackground(bg3);
			}
			pets.getBackground().setAlpha(100);
			pets.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					
						if(step == false) {
						step = true
						pets.setBackground(bg3);
						}else {
						step = false;
						pets.setBackground(bg2);
						}
					}
			}));
			lwor1.addView(pets);
			
			
			var ladder = new Button(ctx);
			ladder.setText("FastLadder");
			ladder.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			ladder.setPadding(25, 2, 2, 2);
			if(fastladder == false) {
			ladder.setBackground(bg2);
			}else {
			ladder.setBackground(bg3);
			}
			ladder.getBackground().setAlpha(100);
			ladder.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					
						if(fastladder == false) {
						fastladder = true
						ladder.setBackground(bg3);
						}else {
						fastladder = false;
						ladder.setBackground(bg2);
						}
					}
			}));
			lwor1.addView(ladder);

    var scaff = new Button(ctx);
			scaff.setText("Scaffold");
			scaff.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			scaff.setPadding(25, 2, 2, 2);
			if(scaffold == false) {
			scaff.setBackground(bg2);
			}else {
			scaff.setBackground(bg3);
			}
			scaff.getBackground().setAlpha(100);
			scaff.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					
						if(scaffold == false) {
						clientMessage(Client+"§aYou can get kicked by Servers for Flying");
      scaffold = true;
						scaff.setBackground(bg3);
						}else {
						scaffold = false;
						scaff.setBackground(bg2);
						}
					}
			}));
			lwor1.addView(scaff);


worep = new PopupWindow(lwor2, RelativeLayout.LayoutParams.WRAP_CONTENT, ctx.getWindowManager().getDefaultDisplay().getHeight());
			worep.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.CENTER, 0, 0);

	}catch(error){
				Toast.makeText(ctx, "An error occured: " + error, 1).show();
			}
	}}));
}

function otGui() {
ctx.runOnUiThread(new Runnable({ run: function(){
		try{
		
		
	var lot1 = new LinearLayout(ctx);
	lot1.setOrientation(1);
	Scroll6 = new ScrollView(ctx);
	
	var lot2 = new LinearLayout(ctx);
	lot2.setOrientation(1);
	
	Scroll6.addView(lot1);
	lot2.addView(Scroll6);
	lot2.setBackground(bg);
	lot2.getBackground().setAlpha(100);
	
	
var exitO = new Button(ctx);
			exitO.setText("Exit");
			exitO.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			exitO.setPadding(25, 2, 2, 2);
			exitO.setBackground(bg2);
			exitO.getBackground().setAlpha(100);
			exitO.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
						
						otep.dismiss();
						Scroll6 = null;
					}
			}));
			lot1.addView(exitO);
			
			
			var spam = new Button(ctx);
			spam.setText("Spammer");
			spam.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			spam.setPadding(25, 2, 2, 2);
			if(spammer == false) {
			spam.setBackground(bg2);
			}else {
			spam.setBackground(bg3);
			}
			spam.getBackground().setAlpha(100);
			spam.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					
						if(spammer == false) {
						spammer = true
					spam.setBackground(bg3);
						}else {
						spammer = false;
						spam.setBackground(bg2);
						}
					}
			}));
			lot1.addView(spam);
			
			
			var log = new Button(ctx);
			log.setText("Auto Login");
			log.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			spam.setPadding(25, 2, 2, 2);
			if(passw == false) {
			log.setBackground(bg2);
			}else {
			log.setBackground(bg3);
			}
			log.getBackground().setAlpha(100);
			log.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					
						if(passw == false) {
						passw = true
					log.setBackground(bg3);
						}else {
						passw = false;
						log.setBackground(bg2);
						}
					}
			}));
			lot1.addView(log);


otep = new PopupWindow(lot2, RelativeLayout.LayoutParams.WRAP_CONTENT, ctx.getWindowManager().getDefaultDisplay().getHeight());
			otep.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.CENTER, 0, 0);

	}catch(error){
				Toast.makeText(ctx, "An error occured: " + error, 1).show();
			}
	}}));
}

function setGui() {
ctx.runOnUiThread(new Runnable({ run: function(){
		try{
		
		
	var lset1 = new LinearLayout(ctx);
	lset1.setOrientation(1);
	Scroll7 = new ScrollView(ctx);
	
	var lset2 = new LinearLayout(ctx);
	lset2.setOrientation(1);
	
	Scroll7.addView(lset1);
	lset2.addView(Scroll7);
	lset2.setBackground(bg);
	lset2.getBackground().setAlpha(100);
	
	
	var exitS = new Button(ctx);
			exitS.setText("Exit");
			exitS.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			exitS.setPadding(25, 2, 2, 2);
			exitS.setBackground(bg2);
			exitS.getBackground().setAlpha(100);
			exitS.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
						
						setep.dismiss();
						Scroll7 = null;
					}
			}));
			lset1.addView(exitS);

    		var settname = new TextView(ctx);
		settname.setText("Client Settings");
		settname.setTextColor(android.graphics.Color.rgb(255, 255, 255));
		settname.setBackground(bg2);
		settname.setTextSize(16);
		settname.setGravity(Gravity.CENTER);
  lset1.addView(settname);
  
  
      
      var twsets = new Button(ctx);
			twsets.setText("Tower");
			twsets.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			twsets.setPadding(25, 2, 2, 2);
			twsets.setBackground(bg2);
			twsets.getBackground().setAlpha(100);
			twsets.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
						
						if(Scrollsetw == null) {
						diSeSo();
						twSet();
						
						}
					}
			}));
			lset1.addView(twsets);
      
      
      
            
            var jesets = new Button(ctx);
			jesets.setText("Jesus");
			jesets.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			jesets.setPadding(25, 2, 2, 2);
			jesets.setBackground(bg2);
			jesets.getBackground().setAlpha(100);
			jesets.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
						
						if(Scrollsetje == null) {
						diSeSo();
						jeSet();
						}
					}
			}));
			lset1.addView(jesets);
            
            
                  
  var aiset = new Button(ctx);
			aiset.setText("AimAura");
			aiset.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			aiset.setPadding(25, 2, 2, 2);
			aiset.setBackground(bg2);
		aiset.getBackground().setAlpha(100);
			aiset.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
						
						if(Scrollsetai == null) {
						diSeSo();
						aiSet();
						}
					}
			}));
			lset1.addView(aiset);
  


      var sps = new Button(ctx);
			sps.setText("Speed");
			sps.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			sps.setPadding(25, 2, 2, 2);
			sps.setBackground(bg2);
		sps.getBackground().setAlpha(100);
			sps.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
						
						if(Scrollsetspeed == null) {
						diSeSo();
						seSet();
						}
					}
			}));
			lset1.addView(sps);
  
      
  
   var telle = new Button(ctx);
			telle.setText("Teleport");
			telle.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			telle.setPadding(25, 2, 2, 2);
			telle.setBackground(bg2);
		telle.getBackground().setAlpha(100);
			telle.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
						
						if(Scrollsettele == null) {
						diSeSo();
						telSet();
						}
					}
			}));
			lset1.addView(telle);
  


        var cols = new Button(ctx);
			cols.setText("Color");
			cols.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			cols.setPadding(25, 2, 2, 2);
			cols.setBackground(bg2);
		cols.getBackground().setAlpha(100);
			cols.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
						
						if(Scrollsetcol == null) {
						diSeSo();
						colSet();
						}
					}
			}));
			lset1.addView(cols);
             
  

setep = new PopupWindow(lset2, RelativeLayout.LayoutParams.WRAP_CONTENT, ctx.getWindowManager().getDefaultDisplay().getHeight());
			setep.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.CENTER, 0, 0);

	}catch(error){
				Toast.makeText(ctx, "An error occured: " + error, 1).show();
			}
	}}));
}
var playerFlySpeed = 0.4;
function jetpackTick() { 
toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1); 
var player = getPlayerEnt(); 
setVelX(player, 0.4 * playerDir[0]); 
setVelY(player, playerFlySpeed * playerDir[1]); 
setVelZ(player, 0.4 * playerDir[2]);
}

function toDirectionalVector(vector, yaw, pitch) {
vector[0] = Math.cos(yaw) * Math.cos(pitch); vector[1] = Math.sin(pitch); 
vector[2] = Math.sin(yaw) * Math.cos(pitch);
}

function followTick() { 
toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1); 
var player = getPlayerEnt(); 
setVelX(player, 0.4 * playerDir[0]); //setVelY(player, playerFlySpeed * playerDir[1]); 
setVelZ(player, 0.4 * playerDir[2]);
}




function logiGui() {
ctx.runOnUiThread(new Runnable({ run: function(){
		try{
		
		
	var log1 = new LinearLayout(ctx);
	log1.setOrientation(1);
	var Scrolllog = new ScrollView(ctx);
	
	var log2 = new LinearLayout(ctx);
	log2.setOrientation(1);
	
	Scrolllog.addView(log1);
	log2.addView(Scrolllog);
	log2.setBackground(bg);
	log2.getBackground().setAlpha(100);

var logname = new TextView(ctx);
		logname.setText("which server you enter?");
		logname.setTextColor(android.graphics.Color.rgb(255, 255, 255));
		logname.setTextSize(12);
		logname.setGravity(Gravity.CENTER);
  log1.addView(logname);

var lbsg = new Button(ctx);
			lbsg.setText("LBSG");
			lbsg.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			lbsg.setPadding(25, 2, 2, 2);
			lbsg.setBackground(bg2);
			lbsg.getBackground().setAlpha(100);
			lbsg.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					logmen.dismiss();
					Server.sendChat(PasManager.getPas());
					}
			}));
			log1.addView(lbsg);
			
			var minp = new Button(ctx);
			minp.setText("Mineplex");
			minp.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			minp.setPadding(25, 2, 2, 2);
			minp.setBackground(bg2);
			minp.getBackground().setAlpha(100);
			minp.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					logmen.dismiss();
					Server.sendChat(".login "+PasManager.getPas());
					}
			}));
			log1.addView(minp);
			
			var oth = new Button(ctx);
			oth.setText("Other");
			oth.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			oth.setPadding(25, 2, 2, 2);
			oth.setBackground(bg2);
			oth.getBackground().setAlpha(100);
			oth.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					logmen.dismiss();
					Server.sendChat("/login "+PasManager.getPas());
					}
			}));
			log1.addView(oth);
			
			


logmen = new PopupWindow(log2, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
			logmen.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, 0);

	}catch(error){
				Toast.makeText(ctx, "An error occured: " + error, 1).show();
			}
	}}));
}


function diSeSo() {
if(Scrollsetw != null) {
Scrollsetw = null;
setts.dismiss();
					
}

if(Scrollsetje != null) {
settje.dismiss();
Scrollsetje = null;
}

if(Scrollsetai != null) {
setta.dismiss();
					Scrollsetai = null;
}
if(Scrollsetspeed != null) {
settspe.dismiss();
					Scrollsetspeed = null;
}

if(Scrollsettele != null) {
settspe.dismiss();
					Scrollsettele = null;
}

if(Scrollsetcol != null) {
settsco.dismiss();
Scrollsetcol = null;
}
}


function colSet() {
ctx.runOnUiThread(new Runnable({ run: function(){
		try{
		
		
	var settcol1 = new LinearLayout(ctx);
	settcol1.setOrientation(1);
	Scrollsetcol = new ScrollView(ctx);
	
	var settcol2 = new LinearLayout(ctx);
	settcol2.setOrientation(1);
	
	Scrollsetcol.addView(settcol1);
	settcol2.addView(Scrollsetcol);
	settcol2.setBackground(bg);
	settcol2.getBackground().setAlpha(100);


			var ex = new Button(ctx);
			ex.setText("Exit");
			ex.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			ex.setPadding(25, 2, 2, 2);
			ex.setBackground(bg2);
			ex.getBackground().setAlpha(100);
			ex.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					settsco.dismiss();
					Scrollsetcol = null;
					}
			}));
			settcol1.addView(ex);
			
			
			var green = new Button(ctx);
			green.setText("Green");
			green.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			green.setPadding(25, 2, 2, 2);
			
		  green.setBackground(bg2);
		  
			green.getBackground().setAlpha(100);
			green.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
				
					bg3.setColor(android.graphics.Color.GREEN);
					clearCli();
					}
			}));
			settcol1.addView(green);
			
			
			var blue = new Button(ctx);
			blue.setText("Blue");
			blue.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			blue.setPadding(25, 2, 2, 2);
			
		  blue.setBackground(bg2);
		  
			blue.getBackground().setAlpha(100);
			blue.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					bg3.setColor(android.graphics.Color.BLUE);
					clearCli();
					}
			}));
			settcol1.addView(blue);
			
			
			
			var red = new Button(ctx);
			red.setText("Red");
			red.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			red.setPadding(25, 2, 2, 2);
			
		  red.setBackground(bg2);
		  
			red.getBackground().setAlpha(100);
			red.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					bg3.setColor(android.graphics.Color.RED);
					clearCli();
					}
			}));
			settcol1.addView(red);
			
			
			var yel = new Button(ctx);
			yel.setText("Yellow");
			yel.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			yel.setPadding(25, 2, 2, 2);
			
		  yel.setBackground(bg2);
		  
			yel.getBackground().setAlpha(100);
			yel.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					bg3.setColor(android.graphics.Color.YELLOW);
					clearCli();
					}
			}));
			settcol1.addView(yel);
			
			
settsco = new PopupWindow(settcol2, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
			settsco.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, 0);

	}catch(error){
				Toast.makeText(ctx, "An error occured: " + error, 1).show();
			}
	}}));
}


function telSet() {
ctx.runOnUiThread(new Runnable({ run: function(){
		try{
		
		
	var settep1 = new LinearLayout(ctx);
	settep1.setOrientation(1);
	Scrollsettele = new ScrollView(ctx);
	
	var settep2 = new LinearLayout(ctx);
	settep2.setOrientation(1);
	
	Scrollsettele.addView(settep1);
	settep2.addView(Scrollsettele);
	settep2.setBackground(bg);
	settep2.getBackground().setAlpha(100);


			var ex = new Button(ctx);
			ex.setText("Exit");
			ex.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			ex.setPadding(25, 2, 2, 2);
			ex.setBackground(bg2);
			ex.getBackground().setAlpha(100);
			ex.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					settspe.dismiss();
					Scrollsettele = null;
					}
			}));
			settep1.addView(ex);
			
			
			var edtp = new Button(ctx);
			edtp.setText("EntityTp");
			edtp.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			edtp.setPadding(25, 2, 2, 2);
			if(playerport == false) {
			edtp.setBackground(bg2);
			}else {
		  edtp.setBackground(bg3);
		  }
			edtp.getBackground().setAlpha(100);
			edtp.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(playerport == false) {
					playerport = true;
					edtp.setBackground(bg3);
					}else {
					playerport = false;
					edtp.setBackground(bg2);
					}
					
					}
			}));
			settep1.addView(edtp);
			
			
			

settspe = new PopupWindow(settep2, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
			settspe.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, 0);

	}catch(error){
				Toast.makeText(ctx, "An error occured: " + error, 1).show();
			}
	}}));
}


function seSet() {
ctx.runOnUiThread(new Runnable({ run: function(){
		try{
		
		
	var setes1 = new LinearLayout(ctx);
	setes1.setOrientation(1);
	Scrollsetspeed = new ScrollView(ctx);
	
	var setes2 = new LinearLayout(ctx);
	setes2.setOrientation(1);
	
	Scrollsetspeed.addView(setes1);
	setes2.addView(Scrollsetspeed);
	setes2.setBackground(bg);
	setes2.getBackground().setAlpha(100);


			var ex = new Button(ctx);
			ex.setText("Exit");
			ex.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			ex.setPadding(25, 2, 2, 2);
			ex.setBackground(bg2);
			ex.getBackground().setAlpha(100);
			ex.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					settspe.dismiss();
					Scrollsetspeed = null;
					}
			}));
			setes1.addView(ex);
			
			var mspe = new Button(ctx);
			mspe.setText("Motion");
			mspe.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			mspe.setPadding(25, 2, 2, 2);
			if(normalsp == false) {
			mspe.setBackground(bg2);
		}else {
		mspe.setBackground(bg3);
		}	mspe.getBackground().setAlpha(100);
			mspe.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(normalsp == false) {
					normalsp = true;
					mspe.setBackground(bg3);
					}else {
					normalsp = false;
					mspe.setBackground(bg2);
					}
					
					}
			}));
			setes1.addView(mspe);
			
			var ctpe = new Button(ctx);
			ctpe.setText("Costum");
			ctpe.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			ctpe.setPadding(25, 2, 2, 2);
			if(ctspeed == false) {
			ctpe.setBackground(bg2);
			}else {
		  ctpe.setBackground(bg3);
		  }
			ctpe.getBackground().setAlpha(100);
			ctpe.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(ctspeed == false) {
					ctspeed = true;
					ctpe.setBackground(bg3);
					}else {
					ctspeed = false;
					ctpe.setBackground(bg2);
					}
					
					}
			}));
			setes1.addView(ctpe);
			
			
			var jpe = new Button(ctx);
			jpe.setText("Jump");
			jpe.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			jpe.setPadding(25, 2, 2, 2);
			if(jhspe == false) {
			jpe.setBackground(bg2);
			}else {
		  jpe.setBackground(bg3);
		  }
			jpe.getBackground().setAlpha(100);
			jpe.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(jhspe == false) {
					jhspe = true;
					jpe.setBackground(bg3);
					}else {
					jhspe = false;
					jpe.setBackground(bg2);
					}
					
					}
			}));
			setes1.addView(jpe);
			
			
			

settspe = new PopupWindow(setes2, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
			settspe.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, 0);

	}catch(error){
				Toast.makeText(ctx, "An error occured: " + error, 1).show();
			}
	}}));
}

function aiSet() {
ctx.runOnUiThread(new Runnable({ run: function(){
		try{
		
		
	var seti1 = new LinearLayout(ctx);
	seti1.setOrientation(1);
	Scrollsetai = new ScrollView(ctx);
	
	var seti2 = new LinearLayout(ctx);
	seti2.setOrientation(1);
	
	Scrollsetai.addView(seti1);
	seti2.addView(Scrollsetai);
	seti2.setBackground(bg);
	seti2.getBackground().setAlpha(100);


			var ex = new Button(ctx);
			ex.setText("Exit");
			ex.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			ex.setPadding(25, 2, 2, 2);
			ex.setBackground(bg2);
			ex.getBackground().setAlpha(100);
			ex.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					setta.dismiss();
					Scrollsetai = null;
					}
			}));
			seti1.addView(ex);
			
			var ami = new Button(ctx);
			ami.setText("Mob");
			ami.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			ami.setPadding(25, 2, 2, 2);
			if(mobaimed == false) {
			ami.setBackground(bg2);
		  }else {
		  ami.setBackground(bg3);
		  }	ami.getBackground().setAlpha(100);
			ami.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(mobaimed == false) {
					mobaimed = true;
					ami.setBackground(bg3);
					}else {
					mobaimed = false;
					ami.setBackground(bg2);
					}
					
					}
			}));
			seti1.addView(ami);
			
			var plai = new Button(ctx);
			plai.setText("Player");
			plai.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			plai.setPadding(25, 2, 2, 2);
			if(playaimed == false) {
			plai.setBackground(bg2);
			}else {
			plai.setBackground(bg3);
			}
			plai.getBackground().setAlpha(100);
			plai.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(playaimed == false) {
					playaimed = true;
					plai.setBackground(bg3);
					}else {
					playaimed = false;
					plai.setBackground(bg2);
					}
					
					}
			}));
			seti1.addView(plai);
			
			
			var noai = new Button(ctx);
			noai.setText("Normal");
			noai.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			noai.setPadding(25, 2, 2, 2);
			if(naim == false) {
			noai.setBackground(bg2);
			}else {
			noai.setBackground(bg3);
			}
			noai.getBackground().setAlpha(100);
			noai.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(naim == false) {
					naim = true;
					noai.setBackground(bg3);
					}else {
					naim = false;
					noai.setBackground(bg2);
					}
					
					}
			}));
			seti1.addView(noai);
   
   
   var reai = new Button(ctx);
			reai.setText("Reaction");
			reai.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			reai.setPadding(25, 2, 2, 2);
			if(raim == false) {
			reai.setBackground(bg2);
			}else {
			reai.setBackground(bg3);
			}
			reai.getBackground().setAlpha(100);
			reai.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(raim == false) {
					raim = true;
					reai.setBackground(bg3);
					}else {
					raim = false;
					reai.setBackground(bg2);
					}
					
					}
			}));
			seti1.addView(reai);
			
			
		/*	var atai = new Button(ctx);
			atai.setText("AntiBot");
			atai.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			atai.setPadding(25, 2, 2, 2);
			if(antibot == false) {
			atai.setBackground(bg2);
			}else {
			atai.setBackground(bg3);
			}
			atai.getBackground().setAlpha(100);
			atai.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(antibot == false) {
					antibot = true;
					atai.setBackground(bg3);
					}else {
					antibot = false;
					atai.setBackground(bg2);
					}
					
					}
			}));
			seti1.addView(atai);*/
   
   

setta = new PopupWindow(seti2, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
			setta.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, 0);

	}catch(error){
				Toast.makeText(ctx, "An error occured: " + error, 1).show();
			}
	}}));
}

function jeSet() {
ctx.runOnUiThread(new Runnable({ run: function(){
		try{
		
		
	var setj1 = new LinearLayout(ctx);
	setj1.setOrientation(1);
	Scrollsetje = new ScrollView(ctx);
	
	var setj2 = new LinearLayout(ctx);
	setj2.setOrientation(1);
	
	Scrollsetje.addView(setj1);
	setj2.addView(Scrollsetje);
	setj2.setBackground(bg);
	setj2.getBackground().setAlpha(100);


			var ex = new Button(ctx);
			ex.setText("Exit");
			ex.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			ex.setPadding(25, 2, 2, 2);
			ex.setBackground(bg2);
			ex.getBackground().setAlpha(100);
			ex.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					settje.dismiss();
					Scrollsetje = null;
					}
			}));
			setj1.addView(ex);
			
			var jen = new Button(ctx);
			jen.setText("Normal");
			jen.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			jen.setPadding(25, 2, 2, 2);
			if(jesusn == false) {
			jen.setBackground(bg2);
		}else {
		jen.setBackground(bg3);
		}	jen.getBackground().setAlpha(100);
			jen.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(jesusn == false) {
					jesusn = true;
					jen.setBackground(bg3);
					}else {
					jesusn = false;
					jen.setBackground(bg2);
					}
					
					}
			}));
			setj1.addView(jen);
			
			var jeh = new Button(ctx);
			jeh.setText("Hop");
			jeh.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			jeh.setPadding(25, 2, 2, 2);
			if(jesush == false) {
			jeh.setBackground(bg2);
			}else {
		  jeh.setBackground(bg3);
		  }
			jeh.getBackground().setAlpha(100);
			jeh.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(jesush == false) {
					jesush = true;
					jeh.setBackground(bg3);
					}else {
					jesush = false;
					jeh.setBackground(bg2);
					}
					
					}
			}));
			setj1.addView(jeh);
			
			
			var jes = new Button(ctx);
			jes.setText("Speed");
			jes.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			jes.setPadding(25, 2, 2, 2);
			if(jesuss == false) {
			jes.setBackground(bg2);
		}else {
		jes.setBackground(bg3);
		}	jes.getBackground().setAlpha(100);
			jes.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(jesuss == false) {
					jesuss = true;
					jes.setBackground(bg3);
					}else {
					jesuss = false;
					jes.setBackground(bg2);
					}
					
					}
			}));
			setj1.addView(jes);
   

settje = new PopupWindow(setj2, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
			settje.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, 0);

	}catch(error){
				Toast.makeText(ctx, "An error occured: " + error, 1).show();
			}
	}}));
}



function twSet() {
ctx.runOnUiThread(new Runnable({ run: function(){
		try{
		
		
	var set1 = new LinearLayout(ctx);
	set1.setOrientation(1);
	Scrollsetw = new ScrollView(ctx);
	
	var set2 = new LinearLayout(ctx);
	set2.setOrientation(1);
	
	Scrollsetw.addView(set1);
	set2.addView(Scrollsetw);
	set2.setBackground(bg);
	set2.getBackground().setAlpha(100);


			var ex = new Button(ctx);
			ex.setText("Exit");
			ex.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			ex.setPadding(25, 2, 2, 2);
			ex.setBackground(bg2);
			ex.getBackground().setAlpha(100);
			ex.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					setts.dismiss();
					Scrollsetw = null;
					}
			}));
			set1.addView(ex);
			
			var jpt = new Button(ctx);
			jpt.setText("Jump");
			jpt.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			jpt.setPadding(25, 2, 2, 2);
			if(jumptower == false) {
			jpt.setBackground(bg2);
			}else {
			jpt.setBackground(bg3);
			}
			jpt.getBackground().setAlpha(100);
			jpt.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(jumptower == false) {
					jumptower = true;
					jpt.setBackground(bg3);
					}else {
					jumptower = false;
					jpt.setBackground(bg2);
					}
					
					}
			}));
			set1.addView(jpt);
			
			
			var exp = new Button(ctx);
			exp.setText("Experimental");
			exp.setTextColor(android.graphics.Color.rgb(255, 255, 255));
			exp.setPadding(25, 2, 2, 2);
			if(exptower == false) {
			exp.setBackground(bg2);
			}else {
			exp.setBackground(bg3);
			}
			exp.getBackground().setAlpha(100);
			exp.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					if(exptower == false) {
					exptower = true;
					exp.setBackground(bg3);
					}else {
					exptower = false;
					exp.setBackground(bg2);
					}
					
					}
			}));
			set1.addView(exp);
   

setts = new PopupWindow(set2, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
			setts.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, 0);

	}catch(error){
				Toast.makeText(ctx, "An error occured: " + error, 1).show();
			}
	}}));
}


function modTick()
{




if(friends[0] == null) {
friends.push("LonelyDazab");
friends.push("VeroXCode");
}
var x = Player.getX();
var y = Player.getX();
var z = Player.getZ();

if(jatpack == true) {
jetpackTick();
}

if(autow == true) {
followTick();
}

var checkserver = Server.getAddress();
var tser = checkserver.split(".");
if(passw == true) {
if(passcheck == false) {
logiGui();
this.server = Server.getAddress();

passcheck = true;
}
}
if(passcheck == true) {
if(this.server != checkserver) {
passcheck = false;
}
}

if(spammer == true) {
if(spamtime != 0) {
spamtime--;
}else {
spamtime = spamspeed;
var spami = spammes.split("");
if(spami[0] != "/") {
Server.sendChat(state+"*"+spammes+"*"+state);
}else {
Server.sendChat(spammes);
}
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
if(fastladder == true){
if(getTile(getPlayerX(), getPlayerY() +1, getPlayerZ()) == 65){
	setVelY(getPlayerEnt(), climbspeed);
	}}
if(sped == true && ctspeed == true && groundct == false){
setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*motionct);
setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*motionct);
jumpct1 = true;
ModPE.setGameSpeed(timerct);
 }
if(nofall == true){
if(getTile(getPlayerX(), getPlayerY()-2, getPlayerZ()) == 0 && getTile(getPlayerX(), getPlayerY()-3, getPlayerZ()) == 0 && !Utils.Player.onGround() && Utils.Player.isFalling()) {
var y = Utils.Player.checkHeigth();
/*clientMessage("x:"+getPlayerX()+"y:"+getPlayerY()+"z:"+getPlayerZ());*/
setPosition(getPlayerEnt(), getPlayerX(), y, getPlayerZ());
/*clientMessage("x:"+getPlayerX()+"y:"+getPlayerY()+"z:"+getPlayerZ());*/
}}
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
var yaw = Entity.getYaw(getPlayerEnt());
if(longjump){
if(Entity.getVelY(getPlayerEnt()) > 0.32){
setVelX(getPlayerEnt(), -jumpboost * Math.sin(yaw / 180 * Math.PI));
if(Entity.getVelY(getPlayerEnt()) > 0.32){
setVelZ(getPlayerEnt(), jumpboost * Math.cos(yaw / 180 * Math.PI));
 }}}
if(safewalk == true){
Entity.setSneaking(getPlayerEnt(), true);
 }
if(scaffold){
 setTile(Player.getX(), Player.getY() - 2, Player.getZ(), 24)
setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*0.55);
setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*0.55);
 }
if(jumpct1 == true && jumpct == true && ctspeed == true && sped == true){
if(Utils.Player.onGround())
setVelY(getPlayerEnt(), velct);
 }
if(ctyport == true && ctspeed == true && sped == true){
if(Utils.Player.onGround())
setPosition(getPlayerEnt(), getPlayerX(), getPlayerY() + 0.1, getPlayerZ())
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
if(sped == false){
ModPE.setGameSpeed(20);
 }
if(normalsp && sped){
if(Utils.Player.onGround())
setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*smotion);
if(Utils.Player.onGround())
setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*smotion);
 }
if(jhspe && sped) {
var speed = Utils.Vel.calculateSpeed();
if(speed != 0) {
if(Utils.Player.onGround()) {
Entity.setVelY(getPlayerEnt(), 0.3);
Entity.setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*0.6);
Entity.setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*0.6);
}
if(!Utils.Player.onGround()) {
if(getTile(getPlayerX(), getPlayerY()-3, getPlayerZ()) != 0) {
Entity.setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*1.2);
Entity.setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*1.2);
}
}
}

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


if(jesus == true && !Entity.isSneaking(getPlayerEnt())) {
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
if(time !== 0) {
time--;
}
if(time == 0) {
time = 8;
setPosition(getPlayerEnt(), getPlayerX(), getPlayerY() + 0.5, getPlayerZ())
setTile(Player.getX(), Player.getY() - 3, Player.getZ(), 24)
 }}
 /*var target2 = Utils.Entity.nextShot();
if(noslow == true){
if(target2 == null && getCarriedItem() == 261 == true){
Utils.Entity.BowAtEnt(target2);
 }}*/
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
 
 
 if(escap == true) {
 if(target != null && Utils.Vel.calculateSpeed() == 1.0 == false) {
Utils.Entity.doAimAtEnt(target);
followTick();
}}
 

if(aim == true) {

if(naim == true) {

      
if(target != null && Utils.Vel.calculateSpeed() == 1.0 == false) {
Utils.Entity.aimAtEnt(target);
}}

if(baimed == true) {


if(target != null){
if(Utils.Entity.isGround(target)) {
Utils.Entity.aimAtEnt(target);
}}}

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
var pos = Utils.Entity.nextPort();
if(ported == true && playerport == false){
setPosition(getPlayerEnt(), Player.getPointedBlockX(), Player.getPointedBlockY() + 3.0, Player.getPointedBlockZ())
 }
if(ported == true && playerport == true){
if(pos != null){
setPosition(getPlayerEnt(), Entity.getX(pos), Entity.getY(pos) + 3, Entity.getZ(pos))
}}
}

function eatHook(hearts, saturationRatio)
{
if(noslow == true){
setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*35);
setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*35);
 }
}
  
function chatHook(text) {
var spli = text.split(" ");


if(spli[0] == ".setPas") {
preventDefault();
PasManager.setPas(spli[1]);
clientMessage("Set passwords to: " + spli[1]);
}

if(text==".help"){
preventDefault();
clientMessage("§7[§aXive§7] §a.t <Module>!");
clientMessage(Client+"§a.glide");
clientMessage(Client+"§a.speedmotion <Value>");
clientMessage(Client+"§a.aimrange <Value>");
clientMessage(Client+"§a.configs (Configs for perfect settings)");
clientMessage(Client+"§a.ctspeed (all settings for Custom-Speed)");
clientMessage(Client +"§a.help 2");
}
if(text == ".help 2") {
preventDefault();
clientMessage(Client+"§a.friend <name>");
clientMessage(Client+"§a.friends (to list up your friends)");
clientMessage(Client+"§a.removeFriend <friend> to remove friend");
clientMessage(Client+"§a.spammessage <spam word>");
clientMessage(Client+"§a.spamdelay <delay>");
clientMessage(Client+"§a.ladderspeed <Value>");
clientMessage(Client +"§a.tprange/.tpr <int> to set teleport range");
clientMessage(Client +"§a.setPas <your standard pw> to set password for autoLog");
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
if(spli[0] == ".aimrange" || spli[0] == ".ar") {
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
var friend = "";
for(i = 1;i<spli.length;i++) {
friend = friend + spli[i];
if(i != spli.length - 1) {
friend = friend + " ";
}
}

clientMessage(Client +"add friend: " +friend);
friends.push(friend);
}
if(text == ".friends") {
preventDefault();
clientMessage(Client +"§a" +friends);
}
if(spli[0] == ".removeFriend") {
preventDefault();

var friend = "";
for(i = 1;i<spli.length;i++) {
friend = friend + spli[i];
if(i != spli.length - 1) {
friend = friend + " ";
}
}
for(i = 0;i < friends.length;i++) {
if(friends[i] == friend) {
clientMessage(Client +"removed friend: "+ friend);
friends.splice(i, 1);
}else {
clientMessage(Client +"invalid Arguments");
}}

}
if(text==".ctspeed"){
preventDefault();
clientMessage("§7[§aXive§7] §aTry .ctmotion | .cttimer | .ctjump | .ctmotionground | .ctvel | .ctyport");
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
clientMessage(Client+"§7available Configs: LBSG, Goat");
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
smotion = 1.15;
gspeed = 1.03;
gdown = 0.4;
ladderspeed = 0.4;
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
if(spli[0] == ".ladderspeed"){
preventDefault();
if(parseFloat(spli[1])) {
climbspeed = spli[1];
clientMessage(Client+"§aset Ladder Speed to: "+spli[1]);
 }else{
 clientMessage(Client+"§aInvalid Arguments");
 }}
if(spli[0] == ".tprange" || spli[0] == ".tpr"){
preventDefault();
if(parseFloat(spli[1])){
portrange = spli[1];
clientMessage(Client+"§aset Teleport Range to: "+spli[1]);
}else{
clientMessage(Client+"§aInvalid Arguments");
}}
if(text==".ctyport"){
preventDefault();
if(ctyport == false){
ctyport = true;
clientMessage(Client+"§aCustomSpeed YPort enabled");
}else{
ctyport = false;
clientMessage(Client+"§aCustomSpeed YPort disabled");
}}
}
