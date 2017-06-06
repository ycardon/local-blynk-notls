const config = require('config')
const BlynkLib = require('blynk-library')

// blynk connection
const blynk = new BlynkLib.Blynk(
	config.get('blynk_token'),
	{ connector: new BlynkLib.TcpClient({ addr: config.get('blynk_ip'), port: config.get('blynk_port') }) }
)

// register some pins
const v1 = new blynk.VirtualPin(1)
const v9 = new blynk.VirtualPin(9)

// react on events
v1.on('write', function(param) {
	console.log('V1:', param)
})

v9.on('read', function() {
	v9.write(new Date().getSeconds())
})
