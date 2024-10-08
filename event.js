////////////DROPDOWN-MENU//////////////////

$(document).ready(function() {
  // sự kiện rê chuột vào phần tử để mở menu dropdown 
  $(".dropdown").mouseover(function() {
    $(this).find('.dropdown-menu').show();
  });
  // trỏ chuột đi ra khỏi phần tử thì đóng menu dropdown
  $(".dropdown").mouseout(function() {
    $(this).find('.dropdown-menu').hide();
  });
});
////HOTLINE////
$(document).ready(function() {
  $(".hotline").mouseenter(function() {
    $(".hienthi").removeClass("d-none");
  });

  $(".hotline").mouseleave(function() {
    $(".hienthi").addClass("d-none");
  });
});

////////////OVERLAY-FORM//////////////////

$(document).ready(function() {
  // Xử lý sự kiện khi nhấp vào nút "MUA"
  $(".product button").click(function() {
    var img = $(this).siblings("a").find("img").attr("src");//ấy tất cả các phần tử cùng cấp (cùng mức) với phần tử đã chọn trong cây DOM.
    var title = $(this).siblings("h3").find("a").text();
    var price = $(this).siblings(".product-price").html();
    var delPrice = $(this).siblings("del").text();

    $(".form-setting img").attr("src", img);
    $(".grid-form h3").text(title);
    $(".form-buy strong").html(price);
    $(".p-del").text(delPrice);

    $(".overlay-form").fadeIn();
    $("body").addClass("an-class");
  });

  // Xử lý sự kiện khi form được gửi đi
  $(".grid-form").submit(function(event) {
    event.preventDefault(); // Ngăn chặn việc tải lại trang

    // Ẩn overlay và form
    $(".overlay-form").fadeOut();

    // Hiển thị thông báo đặt hàng thành công
    alert("Đặt hàng thành công!");
    $("body").removeClass("an-class");
  });
  // Xử lý sự kiện khi nhấp vào nút "Hủy"
  $(".cancel-button").click(function() {
    // Hiển thị thông báo đã huỷ thao tác
    // Ẩn overlay và form
    $(".overlay-form").fadeOut();
    $("body").removeClass("an-class");
    return false; // Ngăn chặn sự kiện mặc định
  });
});




  