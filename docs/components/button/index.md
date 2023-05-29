 

<div style="margin-bottom:20px;">
    <NbButton type="primary"  style="margin-right:10px;" >primary</NbButton>
    <NbButton type="danger"   style="margin-right:10px;">danger</NbButton>
    <NbButton type="info"   style="margin-right:10px;">info</NbButton>
    <NbButton type="warning"  style="margin-right:10px;" >warning</NbButton>
    <NbButton type="success"  style="margin-right:10px;" >success</NbButton>
    <NbButton type="default"  style="margin-right:10px;" >default</NbButton>
</div>

<div style="margin-bottom:20px;">
    <NbButton type="primary" size="mini" style="margin-right:10px;" >mini</NbButton>
    <NbButton type="primary"  size="small" style="margin-right:10px;">small</NbButton>
    <NbButton type="primary" size="medium"  style="margin-right:10px;">medium</NbButton>
    <NbButton type="primary" size="large" style="margin-right:10px;" >large</NbButton>
    
</div>

<div style="margin-bottom:20px;">
    <NbButton type="primary" disabled style="margin-right:10px;">disabled</NbButton>
   <NbButton type="info" circle style="margin-right:10px;" >  
            <NbIcon  class="nb-icon-duanxin" />
        </NbButton>
</div>



使用`type`、`size`、`disabled`、`circle`属性来定义 Button 的样式

```vue
<template>
    <div style="margin-bottom:20px;">
        <NbButton type="primary" >primary</NbButton>
        <NbButton type="danger" >danger</NbButton>
        <NbButton type="info" >info</NbButton>
        <NbButton type="warning" >warning</NbButton>
        <NbButton type="success" >success</NbButton>
        <NbButton type="default" >default</NbButton>
    </div>

    <div style="margin-bottom:20px;">
        <NbButton size="mini" >mini</NbButton>
        <NbButton  size="small">small</NbButton>
        <NbButton size="medium" >medium</NbButton>
        <NbButton size="large" >large</NbButton>
    </div>

    <div style="margin-bottom:20px;">
        <NbButton type="danger" disabled >disabled</NbButton>
        <NbButton type="info" circle  >  
            <NbIcon  class="nb-icon-duigou" />
        </NbButton>
    </div>

</template>

```