"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[27551],{487084:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-39313515","path":"/devices/106-03.html","title":"Plugwise 106-03 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Plugwise 106-03 control via MQTT","description":"Integrate your Plugwise 106-03 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-06-10T16:45:59.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Retract pin","slug":"retract-pin","link":"#retract-pin","children":[]},{"level":3,"title":"Unpairing","slug":"unpairing","link":"#unpairing","children":[]},{"level":3,"title":"Calibration","slug":"calibration","link":"#calibration","children":[]},{"level":3,"title":"Controlling the device","slug":"controlling-the-device","link":"#controlling-the-device","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Pi_heating_demand (numeric)","slug":"pi-heating-demand-numeric","link":"#pi-heating-demand-numeric","children":[]},{"level":3,"title":"Local_temperature (numeric)","slug":"local-temperature-numeric","link":"#local-temperature-numeric","children":[]},{"level":3,"title":"Valve_position (numeric)","slug":"valve-position-numeric","link":"#valve-position-numeric","children":[]},{"level":3,"title":"Force (enum)","slug":"force-enum","link":"#force-enum","children":[]},{"level":3,"title":"Radio_strength (enum)","slug":"radio-strength-enum","link":"#radio-strength-enum","children":[]},{"level":3,"title":"Calibrate_valve (binary)","slug":"calibrate-valve-binary","link":"#calibrate-valve-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1684170859000},"filePathRelative":"devices/106-03.md"}')},484225:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var a=i(166252);const o=(0,a._)("h1",{id:"plugwise-106-03",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#plugwise-106-03","aria-hidden":"true"},"#"),(0,a.Uk)(" Plugwise 106-03")],-1),n=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),r=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"106-03")],-1),l=(0,a._)("td",null,"Vendor",-1),d=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Tom thermostatic radiator valve")],-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"battery, pi_heating_demand, local_temperature, valve_position, force, radio_strength, calibrate_valve, linkquality")],-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/106-03.jpg",alt:"Plugwise 106-03"})])],-1),h=(0,a.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press the button inside the thermostat once. The LED will be lit 5 seconds green to confirm pairing. The LED will be lit 5 seconds red when pairing failed.</p><h3 id="retract-pin" tabindex="-1"><a class="header-anchor" href="#retract-pin" aria-hidden="true">#</a> Retract pin</h3><p>Press the button inside the thermostat for 5 seconds (5 red blinks) to retract the pin, which is needed for mounting.</p><h3 id="unpairing" tabindex="-1"><a class="header-anchor" href="#unpairing" aria-hidden="true">#</a> Unpairing</h3><p>Press the button inside the thermostat for 10 seconds (10 red blinks).</p><h3 id="calibration" tabindex="-1"><a class="header-anchor" href="#calibration" aria-hidden="true">#</a> Calibration</h3><p>Press the button inside the thermostat for 15 seconds (15 red blinks) to calibrate the movement (when mounted onto the radiator).</p><h3 id="controlling-the-device" tabindex="-1"><a class="header-anchor" href="#controlling-the-device" aria-hidden="true">#</a> Controlling the device</h3><p>Controlling is done by setting the <code>valve_position</code>.</p>',11),u=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),p=(0,a.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="pi-heating-demand-numeric" tabindex="-1"><a class="header-anchor" href="#pi-heating-demand-numeric" aria-hidden="true">#</a> Pi_heating_demand (numeric)</h3><p>Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. Value can be found in the published state on the <code>pi_heating_demand</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pi_heating_demand&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="local-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#local-temperature-numeric" aria-hidden="true">#</a> Local_temperature (numeric)</h3><p>Current temperature measured on the device. Value can be found in the published state on the <code>local_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="valve-position-numeric" tabindex="-1"><a class="header-anchor" href="#valve-position-numeric" aria-hidden="true">#</a> Valve_position (numeric)</h3><p>Directly control the radiator valve. The values range from 0 (valve closed) to 100 (valve fully open). Value can be found in the published state on the <code>valve_position</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;valve_position&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;valve_position&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="force-enum" tabindex="-1"><a class="header-anchor" href="#force-enum" aria-hidden="true">#</a> Force (enum)</h3><p>How hard the motor pushes the valve. The closer to the boiler, the higher the force needed. Value can be found in the published state on the <code>force</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;force&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;force&quot;: NEW_VALUE}</code>. The possible values are: <code>standard</code>, <code>high</code>, <code>very_high</code>.</p><h3 id="radio-strength-enum" tabindex="-1"><a class="header-anchor" href="#radio-strength-enum" aria-hidden="true">#</a> Radio_strength (enum)</h3><p>Transmits with higher power when range is not sufficient. Value can be found in the published state on the <code>radio_strength</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;radio_strength&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radio_strength&quot;: NEW_VALUE}</code>. The possible values are: <code>normal</code>, <code>high</code>.</p><h3 id="calibrate-valve-binary" tabindex="-1"><a class="header-anchor" href="#calibrate-valve-binary" aria-hidden="true">#</a> Calibrate_valve (binary)</h3><p>Calibrates valve on next wakeup. Value can be found in the published state on the <code>calibrate_valve</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibrate_valve&quot;: NEW_VALUE}</code>. If value equals <code>calibrate</code> calibrate_valve is ON, if <code>idle</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18),m={},v=(0,i(983744).Z)(m,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),o,(0,a._)("table",null,[n,(0,a._)("tbody",null,[r,(0,a._)("tr",null,[l,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=Plugwise"},{default:(0,a.w5)((()=>[(0,a.Uk)("Plugwise")])),_:1})])]),d,c,s])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,(0,a.kq)(" Notes END: Do not edit below this line "),u,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);