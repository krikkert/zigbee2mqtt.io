"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[10468],{649103:(e,n,a)=>{a.r(n),a.d(n,{data:()=>t});const t=JSON.parse('{"key":"v-7dfebe8c","path":"/devices/TI0001-pir.html","title":"Livolo TI0001-pir control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Livolo TI0001-pir control via MQTT","description":"Integrate your Livolo TI0001-pir via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-02-06T22:00:00.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Important","slug":"important","link":"#important","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1684170859000},"filePathRelative":"devices/TI0001-pir.md"}')},305245:(e,n,a)=>{a.r(n),a.d(n,{default:()=>v});var t=a(166252);const i=(0,t._)("h1",{id:"livolo-ti0001-pir",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#livolo-ti0001-pir","aria-hidden":"true"},"#"),(0,t.Uk)(" Livolo TI0001-pir")],-1),s=(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th"),(0,t._)("th")])],-1),o=(0,t._)("tr",null,[(0,t._)("td",null,"Model"),(0,t._)("td",null,"TI0001-pir")],-1),l=(0,t._)("td",null,"Vendor",-1),r=(0,t._)("tr",null,[(0,t._)("td",null,"Description"),(0,t._)("td",null,"Zigbee motion Sensor")],-1),c=(0,t._)("tr",null,[(0,t._)("td",null,"Exposes"),(0,t._)("td",null,"occupancy, linkquality")],-1),d=(0,t._)("tr",null,[(0,t._)("td",null,"Picture"),(0,t._)("td",null,[(0,t._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TI0001-pir.jpg",alt:"Livolo TI0001-pir"})])],-1),u=(0,t._)("h2",{id:"notes",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,t.Uk)(" Notes")],-1),p=(0,t._)("h3",{id:"important",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#important","aria-hidden":"true"},"#"),(0,t.Uk)(" Important")],-1),h=(0,t.uE)('<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n  <span class="token key atrule">ext_pan_id</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">,</span><span class="token number">117</span><span class="token punctuation">,</span><span class="token number">141</span><span class="token punctuation">,</span><span class="token number">25</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">75</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span>\n  <span class="token key atrule">channel</span><span class="token punctuation">:</span> <span class="token number">26</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>These devices may not co-exist with other Zigbee devices on the same network. You may need to add a dedicated coordinator and create a new network for Livolo. The Deconz adapter may not work as a coordinator. Pairing with the Deconz dongle needs to take place immediately after pairing the device with the Livolo hub, but status messages from the device are not then reflected in Zigbee2MQTT (so you can&#39;t see when the button has been pressed on the device). The Sonoff Zigbee 3.0 USB Dongle Plus ZBDongle-P does seem to work once reflashed. To allow the device to complete its interview, re-pairing needs to be initiated on the device before the device exits pairing mode (ie before the rapid flashing sequence finishes and as soon as the device appears for the first time in Zigbee2MQTT). If you decided to create a new network, you should specify another &#39;pan_id&#39;.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n  <span class="token key atrule">pan_id</span><span class="token punctuation">:</span> <span class="token number">6756</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',3),m=(0,t.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),k={},v=(0,a(983744).Z)(k,[["render",function(e,n){const a=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.kq)(" !!!! "),(0,t.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,t.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,t.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,t.kq)(" !!!! "),i,(0,t._)("table",null,[s,(0,t._)("tbody",null,[o,(0,t._)("tr",null,[l,(0,t._)("td",null,[(0,t.Wm)(a,{to:"/supported-devices/#v=Livolo"},{default:(0,t.w5)((()=>[(0,t.Uk)("Livolo")])),_:1})])]),r,c,d])]),(0,t.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,t._)("p",null,[(0,t.Uk)('After pairing device will be shown as "TI0001" device. Need to manually trigger a re-configure of the device either using web-frontend of Zigbee2MQTT or using '),(0,t.Wm)(a,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqttbridgerequestdeviceconfigure"},{default:(0,t.w5)((()=>[(0,t.Uk)("MQTT message")])),_:1}),(0,t.Uk)(" right after pairing. In case of problems it's recommended to remove device and than retry pairing and re-configuring device.")]),p,(0,t._)("p",null,[(0,t.Uk)("These devices can only be used on channel 26. These devices are locked to the manufacturer's network key (ext_pan_id). Your configuration file "),(0,t.Wm)(a,{to:"/guide/configuration/"},{default:(0,t.w5)((()=>[(0,t.Uk)("data/configuration.yaml")])),_:1}),(0,t.Uk)(" must contain the following:")]),h,(0,t.kq)(" Notes END: Do not edit below this line "),m])}]])}}]);