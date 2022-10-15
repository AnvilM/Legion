function prc()
{
    show();
}

function show()
{
    
    const Buttons = document.getElementById("buttons");
    Buttons.classList.add("BTNhide");

    const other = document.getElementById("other");
    other.classList.add("otherShow");

    const prices = document.getElementById("prices");
    prices.classList.add("pricesShow");
}

function contacts()
{
    const prices = document.getElementById("prices");
    prices.innerHTML = '<h2>Контакты:</h2>'+
    '<hr width="90%">'+
           ' <a href="#">Вконтакте</a><br>'+
       '     <a href="#">Телеграм</a><br>'+
         '   <a href="#">89991234567</a><br>'+
           ' <style> .prices a{color: rgb(30, 87, 243); text-decoration: none; margin: 50px;}</style>';

    prc();
}

function photo()
{
    const prices = document.getElementById("prices");
    prices.innerHTML = '<h2>Фото:</h2>'+
    '<hr width="90%">'+
    '<img src="images/s1.jpg" alt="">' +
    '<img src="images/p2.jpg" alt="">'+
    '<img src="images/el3.jpg" alt="">'+
    '<style>img{ width: 90%; margin-top: 20px; margin-bottom: 20px;}</style>';
    prc();
}

function prices()
{
    const prices = document.getElementById("prices");
    prices.innerHTML = '<h2>Цены:</h2>'+
    '<hr width="90%">'+
    '<table>'+
    '<thead>'+
        '<th>Название</th>'+
        '<th>Описание</th>'+
        '<th>Цена</th>'+
   ' </thead>'+
   ' <tbody>'+
        '<tr>'+
          '  <td>Час игры</td>'+
            '<td>Для коротких перерывов и партий</td>'+
           ' <td>75р</td>'+
       ' </tr>'+
        
       ' <tr>'+
           ' <td>Час VIP</td>'+
            '<td>Для коротких перерывов и партий</td>'+
           ' <td>100р</td>'+
        '</tr>'+
       ' <tr>'+
           ' <td>Утро</td>'+
            '<td>Действует с 8:00 до 12:00</td>'+
            '<td>120р/час</td>'+
        '</tr>'+
       ' <tr>'+
            '<td>Ночной будни</td>'+
            '<td>Действует с 22:00 до 8:00</td>'+
            '<td>300р/час</td>'+
       ' </tr>'+
        '<tr>'+
            '<td>Ночной будни VIP</td>'+
            '<td>Действует с 22:00 до 8:00</td>'+
            '<td>400р/час</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Ночной Выходные</td>'+
            '<td>Действует с 22:00 до 8:00</td>'+
            '<td>350р/час</td>'+
       ' </tr>'+
        '<tr>'+
            '<td>Ночной Выходные VIP</td>'+
            '<td>Действует с 22:00 до 8:00</td>'+
            '<td>450р/час</td>'+
       ' </tr>'+
    '</tbody>'+
'</table>'+
    prc();
}

function iron()
{
    
    const prices = document.getElementById("prices");
    prices.innerHTML = ''+
    '<h2>ОБОРУДОВАНИЕ ELITE-ЗОНЫ:</h2>'+
    '<hr width="90%">'+
    '<ul>'+
        '<li>Процессор INTEL Core i5 10600KF</li>'+
        '<li>Видеокарта nVidia GeForce GTX 1660</li>'+
        '<li>Материнская плата GIGABYTE Z590 GAMING X</li>'+
        '<li>Оперативная память HyperX FURY RGB 16GB 3733</li>'+
        '<li>Сверхскоростные M2 NVMe SSD объемом 1024Gb</li>'+
        '<li>Монитор ASUS TUF Gaming VG279QM 27" 1ms IPS 280Гц</li>'+
        '<li>Механическая клавиатура HyperX Alloy Origins Core</li>'+
        '<li>Игровая мышь Logitech G403 HERO</li>'+
        '<li>Наушники HyperX Cloud Alpha</li>'+
        '<li>Геймерское кресло Cougar RAMPART</li>'+
    '</ul>'
    prc();

}



function otherHide()
{
    const Buttons = document.getElementById("buttons");
    Buttons.classList.remove("BTNhide");

    const other = document.getElementById("other");
    other.classList.remove("otherShow");

    const prices = document.getElementsByClassName("window");
    prices.classList.remove("pricesShow");
}