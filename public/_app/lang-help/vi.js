// Hướng dẫn quản trị trang cá nhân — Tiếng Việt (3-26). Giữ nguyên khóa, dấu **, [[ ]] và biến {…}.
AMLHelp.add('vi', {
  "_ui": {
    "what": "Nó là cái gì vậy?",
    "when": "Khi nào thì tôi nên sử dụng nó?",
    "click": "Điều gì sẽ xảy ra khi tôi nhấn nút đó?",
    "care": "Hãy cẩn thận!",
    "like": "Hãy nghĩ theo cách này",
    "close": "Đóng"
  },
  "help.top.lang": {
    "t": "Ngôn ngữ",
    "what": "Chọn ngôn ngữ cho trang quản trị này. Danh sách bao gồm tất cả các ngôn ngữ mà chương trình này hỗ trợ.",
    "when": "Hãy sử dụng chức năng này khi chữ khó đọc hoặc khi bạn muốn kiểm tra xem trang web của mình trông như thế nào bằng ngôn ngữ khác.",
    "click": "Trang sẽ thay đổi ngay lập tức. Lựa chọn của bạn chỉ được ghi nhớ trong trình duyệt này, vì vậy trên máy tính hoặc điện thoại khác, trang có thể hiển thị bằng ngôn ngữ khác.",
    "care": "Việc này không thay đổi ngôn ngữ chính của trang web đối với khách truy cập. Ngôn ngữ chính được hiển thị trong **Ngôn ngữ trang web** ở tab Thông tin trang web. Khi mở trang web của bạn trên cùng trình duyệt này, ngôn ngữ bạn chọn cũng sẽ được hiển thị như vậy.",
    "like": "Nó giống như việc bạn chọn ngôn ngữ để viết giá sản phẩm trong văn phòng của mình vậy. Biển hiệu cửa hàng bên ngoài vẫn giữ nguyên."
  },
  "help.setup.title": {
    "t": "Tạo tài khoản quản trị viên của bạn",
    "what": "Đây là màn hình đầu tiên sau khi bạn cài đặt trang web. Tại đây, bạn tạo tài khoản duy nhất để vận hành trang web: một địa chỉ email, mật khẩu và mã sử dụng Cloudflare.",
    "when": "Bạn chỉ thấy nó một lần, ngay sau khi cài đặt. Nó chỉ xuất hiện lại nếu bạn làm theo các bước để khôi phục mật khẩu đã quên.",
    "click": "Đây chỉ là tiêu đề. Hãy điền thông tin vào các ô bên dưới, sau đó nhấn [[Create admin]].",
    "care": "Nếu bạn vừa cài đặt xong, hãy đợi khoảng 1 phút. Cloudflare cần một chút thời gian để chuẩn bị kho lưu trữ bài hát của bạn. Nếu bạn thấy lỗi, hãy đợi một phút và thử lại.\nBạn không thể sử dụng tên của ca sĩ hoặc nhóm nhạc nổi tiếng cho trang web của mình.",
    "like": "Nó giống như việc bạn nhận được chiếc chìa khóa duy nhất của một cửa hàng hoàn toàn mới vào ngày khai trương."
  },
  "help.setup.legacy": {
    "t": "Mật khẩu quản trị cũ (AML_ADMIN_TOKEN)",
    "what": "Hộp thoại này chỉ xuất hiện trên các trang web được cài đặt theo cách cũ, với mật khẩu quản trị được ghi vào cài đặt Cloudflare.",
    "when": "Nhập mật khẩu quản trị cũ mà bạn đã sử dụng trước đây. Bạn chỉ cần dùng nó một lần duy nhất.",
    "click": "Không có gì xảy ra trong khi bạn gõ. Nó được kiểm tra khi bạn nhấn [[Create admin]].",
    "care": "Điều này chứng minh trang web thực sự thuộc về bạn, vì vậy không ai khác có thể chiếm đoạt nó. Nếu sai, tài khoản sẽ không được tạo. Hãy tìm giá trị này trong cài đặt Cloudflare của bạn cho trang web này.",
    "like": "Nó giống như việc bạn đưa chìa khóa cửa hàng cũ cho thợ khóa xem một lần, để thợ khóa biết rằng bạn có thể sẽ làm chìa khóa mới."
  },
  "help.setup.email": {
    "t": "E-mail",
    "what": "Địa chỉ email bạn sẽ dùng để đăng nhập. Địa chỉ này sẽ không bao giờ hiển thị trên trang web của bạn.",
    "when": "Hãy sử dụng email mà bạn thường xuyên kiểm tra. Email đăng ký Cloudflare của bạn rất dễ nhớ.",
    "click": "Chưa có gì được lưu cả. Nó sẽ được lưu khi bạn nhấn [[Create admin]].",
    "care": "Nó phải trông giống như một địa chỉ thật (name@example.com). aimusiclist.com cũng nhận được địa chỉ này như một địa chỉ liên hệ riêng tư cho trang web của bạn. Bạn có thể thay đổi nó sau trong phần Thông tin trang web.",
    "like": "Nó giống như việc bạn viết tên mình lên móc chìa khóa của cửa hàng vậy."
  },
  "help.setup.password": {
    "t": "Mật khẩu (tối thiểu 6 ký tự)",
    "what": "Mật khẩu bạn sẽ dùng để đăng nhập, cùng với địa chỉ email ở trên.",
    "when": "Hãy chọn ngay. Sử dụng ít nhất 6 ký tự. Dài hơn sẽ an toàn hơn.",
    "click": "Chưa có gì được lưu cả. Nó sẽ được lưu khi bạn nhấn [[Create admin]].",
    "care": "Đừng sử dụng mật khẩu bạn dùng cho các trang web khác. Nếu bạn quên mật khẩu, có cách để đặt lại mật khẩu và các bài hát của bạn vẫn được an toàn.",
    "like": "Đây là chìa khóa cửa hàng của bạn. Đừng làm một bản sao phù hợp với các cửa khác nữa."
  },
  "help.setup.password2": {
    "t": "Nhập lại mật khẩu",
    "what": "Nhập lại mật khẩu một lần nữa.",
    "when": "Ngay sau ô nhập mật khẩu.",
    "click": "Khi bạn nhấn [[Create admin]], hai ô sẽ được so sánh.",
    "care": "Nếu chúng khác nhau, bạn sẽ thấy một thông báo nhưng không có gì được thực hiện. Chỉ cần nhập lại cả hai.",
    "like": "Nó giống như việc bạn phải xoay chìa khóa mới vào ổ khóa hai lần để chắc chắn rằng nó thực sự vừa khít."
  },
  "help.setup.token": {
    "t": "Khóa sử dụng Cloudflare (bắt buộc, chỉ đọc)",
    "what": "Một khóa bạn tạo trên Cloudflare. Với khóa này, trang quản trị có thể hiển thị số lượng dung lượng miễn phí mà trang web của bạn đã sử dụng từ Cloudflare.",
    "when": "Hãy làm theo hướng dẫn bên dưới (khoảng 2 phút), sao chép và dán vào đây.",
    "click": "Khi bạn ngừng gõ, hệ thống sẽ tự động kiểm tra. Bạn sẽ thấy dấu ✓ bên cạnh tên tài khoản Cloudflare của bạn, hoặc dấu ✗ hiển thị lỗi.",
    "care": "Khóa này chỉ có thể đọc số liệu sử dụng và tên tài khoản của bạn. Nó không thể thay đổi hoặc xóa bất cứ thứ gì. Cloudflare chỉ hiển thị nó một lần, vì vậy hãy dán ngay sau khi sao chép. Nó cần cả hai dòng quyền (Phân tích tài khoản · Đọc và Cài đặt tài khoản · Đọc).",
    "like": "Nó giống như một chiếc chìa khóa chỉ mở được hộp công tơ điện. Nó không thể mở cửa hàng."
  },
  "help.setup.account": {
    "t": "Tài khoản Cloudflare",
    "what": "Danh sách này xuất hiện khi khóa sử dụng của bạn có thể truy cập nhiều hơn một tài khoản Cloudflare.",
    "when": "Chọn tài khoản mà trang web này được cài đặt.",
    "click": "Mã khóa sẽ được kiểm tra lại ngay lập tức với tài khoản bạn đã chọn. Dấu ✓ nghĩa là mã khóa hợp lệ.",
    "care": "Nếu bạn chọn nhầm tài khoản, thanh hiển thị mức sử dụng sẽ hiển thị số liệu của tài khoản khác hoặc không tải được.",
    "like": "Nó giống như việc bạn có chìa khóa của nhiều tòa nhà và chỉ vào tòa nhà có cửa hàng của bạn."
  },
  "help.setup.account_id": {
    "t": "Mã tài khoản Cloudflare",
    "what": "Số tài khoản Cloudflare của bạn: 32 ký tự, gồm các chữ số từ 0–9 và các chữ cái từ a–f.",
    "when": "Hộp thoại này chỉ xuất hiện khi khóa của bạn không thể tự tìm thấy tài khoản. Điều đó xảy ra khi dòng \"Cài đặt tài khoản · Đã đọc\" bị thiếu trong khóa.",
    "click": "Khi đã nhập đủ 32 ký tự, khóa sẽ được kiểm tra lại một lần nữa.",
    "care": "Tìm mã số này trên Cloudflare: Nhân viên & Trang → Chi tiết tài khoản → ID tài khoản (nút sao chép). Hoặc tạo lại mã số bằng nút trong hướng dẫn. Khi đó cả hai dòng sẽ được điền đầy đủ và ô này không cần thiết nữa.",
    "like": "Nó giống như việc bạn nói số nhà cho người đọc công tơ điện khi biển báo đường phố bị mất."
  },
  "help.setup.token_guide": {
    "t": "Cách tạo khóa sử dụng (2 phút)",
    "what": "Năm bước ngắn gọn hướng dẫn cách tạo khóa sử dụng trên Cloudflare.",
    "when": "Hãy đọc nó trong khi bạn làm chìa khóa. Nhấn vào tiêu đề để mở hoặc đóng.",
    "click": "Việc mở hay đóng nó không làm thay đổi gì cả. Bước đầu tiên có một nút mở Cloudflare.",
    "care": "Tên hiển thị trên màn hình của Cloudflare có thể thay đổi một chút. Nếu tên khác nhau, hãy chọn tên gần nhất. Trên Cloudflare, nhấn [[Continue to summary]], sau đó [[Create Token]], rồi [[Sao chép]].",
    "like": "Nó giống như bức vẽ nhỏ hướng dẫn cách lắp ráp đồ nội thất mới."
  },
  "help.setup.submit": {
    "t": "Tạo quản trị viên",
    "what": "Tạo tài khoản quản trị viên của bạn bằng email, mật khẩu và mã sử dụng ở trên.",
    "when": "Nhấn nút đó khi tất cả các ô đã được điền đầy đủ và biểu tượng chìa khóa hiển thị ✓.",
    "click": "Nếu có lỗi, một thông báo sẽ hiện lên bên cạnh nút và không có gì được thực hiện. Nếu mọi thứ đều ổn, bạn sẽ được đăng nhập và trang quản trị sẽ mở ra. Trang web của bạn cũng tự động bắt đầu kết nối với aimusiclist.com.",
    "care": "Mỗi trang web chỉ có một tài khoản quản trị viên. Để tạo lại tài khoản, bạn phải làm theo các bước hướng dẫn khôi phục mật khẩu. Các bài hát và album của bạn vẫn được giữ nguyên.",
    "like": "Nó giống như việc cắt băng khánh thành vào ngày khai trương: cửa hàng thuộc về bạn và cánh cửa chính thức mở ra."
  },
  "help.login.title": {
    "t": "Đăng nhập",
    "what": "Đây là cổng dẫn đến trang quản trị của bạn. Chỉ chủ sở hữu trang web mới có thể đăng nhập bằng email và mật khẩu.",
    "when": "Bạn sẽ thấy thông báo này khi bạn chưa đăng nhập vào trình duyệt này hoặc khi thời hạn đăng nhập của bạn đã hết hạn.",
    "click": "Đây chỉ là tiêu đề. Hãy điền thông tin vào các ô bên dưới và nhấn [[Đăng nhập]].",
    "care": "Mỗi lần đăng nhập sẽ có hiệu lực trong 30 ngày trên một trình duyệt. Việc thay đổi mật khẩu sẽ đăng xuất bạn khỏi mọi thiết bị.",
    "like": "Đó là cánh cửa sau bị khóa của cửa hàng bạn. Cửa trước (trang web của bạn) vẫn mở cho khách truy cập."
  },
  "help.login.email": {
    "t": "E-mail",
    "what": "Địa chỉ email bạn đã chọn khi tạo tài khoản quản trị viên.",
    "when": "Nhập mã này mỗi khi bạn đăng nhập.",
    "click": "Sẽ không có gì xảy ra cho đến khi bạn nhấn [[Đăng nhập]].",
    "care": "Viết hoa hay viết thường đều không quan trọng. Trên trang web meshmelo, hãy sử dụng email của tài khoản meshmelo của bạn.",
    "like": "Nó giống như việc bạn nói tên mình ở cửa sau trước khi đưa chìa khóa ra."
  },
  "help.login.password": {
    "t": "Mật khẩu",
    "what": "Mật khẩu tài khoản quản trị của bạn.",
    "when": "Nhập mã này mỗi khi bạn đăng nhập.",
    "click": "Sẽ không có gì xảy ra cho đến khi bạn nhấn [[Đăng nhập]].",
    "care": "Sau 5 lần đăng nhập sai liên tiếp từ cùng một vị trí, tài khoản sẽ bị khóa trong 15 phút. Thông báo sẽ cho bạn biết còn bao nhiêu lần thử nữa.",
    "like": "Chính chiếc chìa khóa là vấn đề. Nếu bạn thử sai chìa khóa quá nhiều lần, ổ khóa sẽ tạm thời không hoạt động."
  },
  "help.login.submit": {
    "t": "Đăng nhập",
    "what": "Kiểm tra email và mật khẩu của bạn rồi mở trang quản trị.",
    "when": "Nhấn vào đó sau khi điền đầy đủ thông tin vào cả hai ô. Liên kết [[View site]] bên cạnh sẽ mở trang web của bạn với tư cách khách truy cập.",
    "click": "Nếu thông tin đúng, trang quản trị sẽ mở ra và trình duyệt này sẽ duy trì trạng thái đăng nhập trong 30 ngày. Nếu không, một thông báo màu đỏ sẽ hiện ra bên dưới.",
    "care": "Việc đăng nhập ở đây không tự động đăng nhập vào các thiết bị khác của bạn. Mỗi trình duyệt chỉ đăng nhập một lần.",
    "like": "Nó giống như vặn chìa khóa và bước vào văn phòng phía sau."
  },
  "help.login.forgot": {
    "t": "Bạn quên mật khẩu?",
    "what": "Các bước tạo email và mật khẩu mới khi bạn quên chúng.",
    "when": "Chỉ sử dụng chức năng này khi bạn thực sự không thể đăng nhập. Nhấn vào tiêu đề để mở các bước hướng dẫn.",
    "click": "Việc mở nó ra không thay đổi gì cả. Bạn tự làm theo các bước. Trên trang Cloudflare, bạn chỉ cần xóa thông tin quản trị khỏi kho lưu trữ bài hát của mình (R2), sau đó màn hình [[Create admin]] sẽ hiện lại.",
    "care": "Các bài hát, album và kết nối aimusiclist.com của bạn sẽ được giữ nguyên. Chỉ xóa một mục duy nhất là tên các bước, không xóa bất cứ thứ gì khác. Đối với phiên bản PHP, bạn tạo một tệp trống trong thư mục hosting của mình. Đối với meshmelo, bạn thiết lập lại từ tài khoản meshmelo của mình.",
    "like": "Nó giống như việc gọi thợ khóa để làm chìa khóa mới vậy. Cửa hàng và mọi thứ trên kệ vẫn y nguyên."
  },
  "help.top.mm_acct": {
    "t": "Tài khoản meshmelo của tôi",
    "what": "Đây là liên kết đến trang tài khoản meshmelo của bạn. Bạn chỉ thấy liên kết này trên các trang web được lưu trữ bởi meshmelo.",
    "when": "Bạn có thể vào đó để đăng nhập và lấy mật khẩu, xem dung lượng lưu trữ bài hát, thông tin sử dụng, tên miền riêng hoặc xóa toàn bộ trang web.",
    "click": "Tài khoản meshmelo của bạn sẽ được mở trong một tab mới. Trang này sẽ vẫn mở.",
    "care": "Các bài hát, album, menu, giao diện và số liệu thống kê được xử lý ở đây, không phải ở đó. Không chắc nên sử dụng trang nào? Hãy nhấn vào dấu ? bên cạnh liên kết này.",
    "like": "Đây là văn phòng quản lý tất cả các cửa hàng của bạn. Trang quản trị này là quầy thu ngân của một cửa hàng."
  },
  "help.top.view_site": {
    "t": "Xem trang web",
    "what": "Mở trang web của riêng bạn, trang mà khách truy cập của bạn nhìn thấy.",
    "when": "Hãy sử dụng nó sau khi thay đổi để kiểm tra xem kết quả trông như thế nào.",
    "click": "Trang web của bạn sẽ mở trong một tab mới. Trang quản trị này vẫn mở.",
    "care": "Hầu hết các thay đổi sẽ hiển thị trong khoảng 30 giây. Vì bạn đã đăng nhập, một số thông tin chỉ bạn mới có thể thấy cũng sẽ xuất hiện, chẳng hạn như số lượt phát của mỗi bài hát.",
    "like": "Nó giống như việc bạn bước ra ngoài và nhìn vào cửa kính cửa hàng của mình theo cách mà những người trên đường nhìn thấy."
  },
  "help.top.logout": {
    "t": "Đăng xuất",
    "what": "Kết thúc phiên đăng nhập của bạn trên trình duyệt này.",
    "when": "Hãy sử dụng nó trên máy tính dùng chung hoặc mượn, hoặc khi bạn đã hoàn thành công việc.",
    "click": "Bạn sẽ quay lại màn hình đăng nhập ngay lập tức. Danh sách bài hát và cài đặt của bạn không bị ảnh hưởng.",
    "care": "Thao tác này chỉ đăng xuất khỏi trình duyệt hiện tại. Các thiết bị khác vẫn đăng nhập. Để đăng xuất trên tất cả các thiết bị, hãy thay đổi mật khẩu trong tab Thông tin trang web.",
    "like": "Nó giống như việc bạn khóa cửa sau khi ra ngoài. Những chìa khóa khác của bạn vẫn dùng được."
  },
  "help.top.version": {
    "t": "Phiên bản mới",
    "what": "Dòng này xuất hiện khi có phiên bản mới hơn của chương trình trang web này. Nó hiển thị phiên bản hiện tại của bạn và phiên bản mới nhất.",
    "when": "Khi thấy thông báo, hãy lên kế hoạch cập nhật sớm nhé. Việc kiểm tra được thực hiện mỗi ngày một lần.",
    "click": "[[How to update]] mở hướng dẫn cập nhật. [[What's new]] hiển thị những thay đổi. Mọi thứ sẽ không thay đổi cho đến khi bạn cập nhật.",
    "care": "Việc cập nhật không bắt buộc. Nếu dòng chữ màu đỏ, phiên bản của bạn cũ hơn phiên bản mà aimusiclist.com hỗ trợ, vì vậy vui lòng cập nhật sớm. Việc cập nhật sẽ giữ lại các bài hát và cài đặt của bạn. Trên phiên bản PHP, có nút cập nhật ngay tại đây.",
    "like": "Nó giống như một thông báo rằng những kệ hàng mới, tốt hơn đã sẵn sàng cho cửa hàng của bạn."
  },
  "help.top.aml": {
    "t": "Kết nối aimusiclist.com",
    "what": "Dòng này cho biết trang web của bạn có được liên kết với aimusiclist.com hay không. Chỉ khi được liên kết, các bài hát công khai của bạn mới có thể xuất hiện và được xếp hạng ở đó.",
    "when": "Hãy kiểm tra lại sau khi cài đặt, và bất cứ khi nào bài hát của bạn không hiển thị trên aimusiclist.com.",
    "click": "Đây chỉ là trạng thái. ✓ Đã kết nối · … Đang kết nối · ✗ Chưa kết nối, kèm theo lý do và lần thử tự động tiếp theo.",
    "care": "Một trang web mới sẽ tự động kết nối. Nếu kết nối thất bại, nó sẽ thử lại sau mỗi 10 phút, tối đa 20 lần một ngày. Đối với một số lỗi, nó sẽ ngừng thử; sau đó sử dụng [[Try now]] sau khi khắc phục nguyên nhân. Trên một trang web meshmelo bị tạm dừng, dòng này cho biết trang web đang ở trạng thái tạm dừng.",
    "like": "Đó là con đường từ cửa hàng của bạn đến chợ lớn. Khi con đường thông thoáng, hàng hóa của bạn sẽ đến được gian trưng bày của chợ."
  },
  "help.top.lang_missing": {
    "t": "Ngôn ngữ bài hát bị thiếu",
    "what": "Thông báo rằng một số bài hát chưa có ngôn ngữ bài hát. Điều này thường có nghĩa là các bài hát cũ hơn, được tải lên trước khi cài đặt này được thiết lập.",
    "when": "Hãy sửa lỗi này khi bạn có thời gian. Việc này giúp người nghe trên aimusiclist.com tìm được bài hát bằng ngôn ngữ của họ.",
    "click": "Đây chỉ là thông báo. Nhấn [[Set now]] để sửa tất cả cùng một lúc.",
    "care": "Không có gì là bắt buộc. Cho đến khi bạn thiết lập, aimusiclist.com sẽ coi những bài hát đó là ngôn ngữ chính của trang web bạn. Thông báo sẽ biến mất khi mọi bài hát đều có ngôn ngữ riêng.",
    "like": "Nó giống như một số đĩa nhạc trong cửa hàng của bạn thiếu nhãn nhỏ ghi ngôn ngữ hát."
  },
  "help.top.pubmin_note": {
    "t": "Không có đủ bài hát công cộng",
    "what": "Thông báo cho biết số lượng bài hát công khai trên aimusiclist.com ít hơn so với quy định. Quy định: ít nhất 10 bài hát phải được công khai (hoặc tất cả, nếu bạn có ít hơn 10 bài).",
    "when": "Thông báo này chỉ hiển thị khi số lượng người dùng trên trang web của bạn thấp hơn con số đó, ví dụ như sau khi xóa bài hát.",
    "click": "Đây chỉ là thông báo. Nhấn [[Chọn bài hát]] để khắc phục.",
    "care": "Không có gì được tự động thay đổi cho bạn. Nhưng cho đến khi bạn khắc phục được sự cố, bạn không thể đặt thêm bài hát nào ở chế độ riêng tư. Bạn có thể chọn bài hát nào là công khai và có thể xóa bất kỳ bài hát nào bạn không muốn chia sẻ.",
    "like": "Chợ lớn yêu cầu mỗi cửa hàng phải trưng bày ít nhất 10 đĩa nhạc trong tủ kính."
  },
  "help.top.profile_note": {
    "t": "Thêm ảnh đại diện",
    "what": "Một mẹo nhỏ hiển thị khi bạn có bài hát nhưng chưa có ảnh đại diện. Ảnh này cũng sẽ xuất hiện bên cạnh các bài hát của bạn trên aimusiclist.com.",
    "when": "Hãy thêm vào khi có thể. Hình ảnh khuôn mặt hoặc logo sẽ giúp bạn dễ nhớ các bài hát hơn.",
    "click": "Đây chỉ là một gợi ý. Nhấn [[Add photo]] để chọn ảnh.",
    "care": "Không có gì là bắt buộc cả. Mẹo này sẽ biến mất sau khi ảnh đại diện được lưu.",
    "like": "Nó giống như việc bạn dán ảnh của mình lên cửa hàng để mọi người biết đó là cửa hàng của ai."
  },
  "help.top.genre_sample": {
    "t": "Danh sách thể loại tích hợp sẵn",
    "what": "Thông báo cho biết không thể tải danh sách thể loại từ aimusiclist.com, vì vậy danh sách được tích hợp sẵn trong chương trình này sẽ được sử dụng tạm thời.",
    "when": "Bạn không cần làm gì cả. Thông thường, lỗi sẽ tự biến mất vào lần tiếp theo bạn mở trang quản trị.",
    "click": "Đây chỉ là một thông báo.",
    "care": "Danh sách mặc định có thể thiếu các thể loại mới nhất. Nếu bạn cần một trong những thể loại đó, hãy đợi và tải lại trang này sau. Các thể loại bạn đã thiết lập cho bài hát và menu sẽ được giữ nguyên.",
    "like": "Nó giống như việc sử dụng cuốn catalog in năm ngoái vì catalog mới của thị trường chưa đến hôm nay."
  },
  "help.setup.token_open": {
    "t": "Tạo nó trên Cloudflare",
    "what": "Mở trang tạo khóa của Cloudflare trong một tab mới, với tên và cả hai dòng quyền đã được điền sẵn.",
    "when": "Nhấn vào đó ở bước đầu tiên của hướng dẫn.",
    "click": "Cloudflare sẽ mở trong một tab mới (đăng nhập nếu được yêu cầu). Trang này sẽ vẫn mở, vì vậy bạn có thể quay lại và dán khóa sau.",
    "care": "Hãy kiểm tra xem cả hai dòng sau có xuất hiện không: Phân tích tài khoản · Đọc và Cài đặt tài khoản · Đọc. Nếu chúng trống, hãy tự thêm hai dòng này vào.",
    "like": "Nó giống như một phiếu đặt hàng đã được điền sẵn thông tin. Bạn chỉ cần ký tên vào đó."
  },
  "help.tracks.ai_tool": {
    "t": "Được làm bằng",
    "what": "Công cụ AI mà bạn đã sử dụng để tạo ra bài hát, ví dụ như Suno. Nó được hiển thị dưới dạng một thẻ nhỏ \"✦ tên\" bên cạnh bài hát.",
    "when": "Hãy chọn công cụ mà bạn thực sự đã sử dụng. Trên thẻ tải lên, thông tin này sẽ hiển thị cho mỗi bài hát trong lần tải lên này.",
    "click": "Thông tin sẽ được lưu khi bạn tải lên hoặc nhấn [[Save track]]. Khi tải lên, trình duyệt này sẽ ghi nhớ lựa chọn của bạn cho lần sau.",
    "care": "aimusiclist.com lưu giữ danh sách các công cụ. Nếu công cụ của bạn không có trong danh sách, hãy chọn “Khác” và gửi thông báo đến admin@aimusiclist.com. Điều này không liên quan đến thứ hạng.",
    "like": "Nó giống như dòng chữ \"sản xuất tại\" ở mặt sau của đĩa nhạc."
  },
  "help.tracks.ai_fill": {
    "t": "Các bài hát không sử dụng bộ công cụ AI.",
    "what": "Một ghi chú cho biết có bao nhiêu bài hát chưa được công cụ AI hỗ trợ. Ghi chú này chỉ xuất hiện khi có ít nhất một bài hát như vậy.",
    "when": "Hãy sử dụng nó để điền thông tin vào công cụ AI cho tất cả các bài hát đó cùng một lúc.",
    "click": "Đây chỉ là một ghi chú. Chọn một công cụ bên dưới và nhấn [[Set them all to this tool]].",
    "care": "Khi mỗi bài hát đều có một nhạc cụ hỗ trợ, nốt nhạc này sẽ tự biến mất.",
    "like": "Giống như một ghi chú trên quầy hàng: \"5 đĩa chưa có tem nhà sản xuất\"."
  },
  "help.tracks.ai_fill_btn": {
    "t": "Đặt tất cả chúng thành công cụ này",
    "what": "Cung cấp công cụ bạn đã chọn cho mọi bài hát chưa có công cụ AI nào.",
    "when": "Hãy sử dụng nó khi hầu hết các bài hát của bạn được tạo ra bằng một công cụ duy nhất, ví dụ như sau khi tải lên nhiều bài hát cũ.",
    "click": "Một hộp thoại sẽ yêu cầu bạn xác nhận trước. Sau khi bạn đồng ý, thông tin sẽ được lưu ngay lập tức và tên công cụ ✦ sẽ xuất hiện bên cạnh những bài hát đó, trên trang web của bạn và trên aimusiclist.com.",
    "care": "Chỉ những bài hát chưa sử dụng công cụ nào mới bị thay đổi. Những bài hát đã sử dụng công cụ vẫn giữ nguyên. Nếu một vài bài hát sử dụng công cụ khác, hãy sửa chúng sau đó trong **công cụ AI của các bài hát đã chọn** hoặc trong tệp [[Edit]] của từng bài hát.",
    "like": "Giống như việc đóng dấu cùng một nhãn hiệu của nhà sản xuất lên mọi đĩa nhạc chưa có dấu, và bỏ qua những đĩa đã có dấu."
  },
  "help.tracks.bulk_ai": {
    "t": "Công cụ AI của các bài hát đã chọn",
    "what": "Thiết lập đồng thời công cụ AI mà bạn đã sử dụng để tạo ra các bài hát đã được kiểm tra (ví dụ: Suno).",
    "when": "Hãy sử dụng chức năng này khi nhiều bài hát được tạo ra bằng cùng một công cụ, hoặc để sửa lỗi công cụ trên nhiều bài hát.",
    "click": "Việc chọn công cụ sẽ không lưu lại gì cả. Nhấn [[Áp dụng]] bên cạnh công cụ đó để lưu.",
    "care": "Chọn **Chưa thiết lập** và nhấn [[Áp dụng]] sẽ xóa công cụ khỏi danh sách bài hát đã chọn. Nếu công cụ của bạn bị thiếu, hãy chọn **Khác** và gửi email đến admin@aimusiclist.com.",
    "like": "Giống như việc đóng dấu \"được thực hiện bằng nhạc cụ này\" lên mặt sau của nhiều đĩa nhạc cùng một lúc."
  },
  "help.tracks.bulk_ai_apply": {
    "t": "Áp dụng",
    "what": "Lưu công cụ AI đã chọn vào mỗi bài hát đã được chọn.",
    "when": "Nhấn vào đó sau khi bạn đã chọn xong bài hát và công cụ.",
    "click": "Quá trình lưu diễn ra ngay lập tức, một tin nhắn ngắn cho biết có bao nhiêu bài hát đã được thay đổi, và các bước kiểm tra được hoàn tất. Tên công cụ nhỏ có biểu tượng ✦ bên cạnh mỗi bài hát sẽ thay đổi, trên trang web của bạn và trên aimusiclist.com.",
    "care": "Công cụ cũ để chọn bài hát đã được thay thế. Khi chưa chọn bài hát nào, bạn chỉ nhận được lời nhắc chọn bài hát trước.",
    "like": "Đây là thời điểm con tem thực sự được đóng lên hồ sơ."
  },
  "help.tracks.genre_main": {
    "t": "Thể loại chính",
    "what": "Thể loại chính của bài hát này. Danh sách này giống với menu thể loại trên trang aimusiclist.com.",
    "when": "Hãy chọn thể loại phù hợp nhất với bài hát. Phải chọn thể loại thôi.",
    "click": "Nó được lưu khi bạn nhấn [[Save track]]. Bài hát sau đó sẽ xuất hiện trong menu thể loại đó trên aimusiclist.com (nếu trang web này công khai).",
    "care": "Quá trình lưu sẽ bị từ chối nếu không chọn thể loại chính. Hai ô thể loại bổ sung bên cạnh dành cho các phần hỗn hợp.",
    "like": "Đó là khu vực trong siêu thị lớn nơi đĩa nhạc của bạn được đặt, giống như góc nhạc R&B vậy."
  },
  "help.tracks.genre_sub": {
    "t": "Thể loại bổ sung",
    "what": "Có thể kết hợp tối đa hai thể loại khác vào bài hát. Ví dụ, một bài hát R&B có thể thêm rap vào đó là hip-hop.",
    "when": "Hãy sử dụng chúng khi một thể loại thôi chưa đủ. Chúng là tùy chọn.",
    "click": "Chúng được lưu khi bạn nhấn [[Save track]] (hoặc khi tải lên). aimusiclist.com hiển thị chúng theo thứ tự sau thể loại chính, bên cạnh tiêu đề.",
    "care": "Bạn có thể chọn bất kỳ thể loại nào, được sắp xếp theo thể loại chính của nó. Chọn cùng một thể loại hai lần chỉ được tính một lần. Chọn “— Không —” để bỏ trống ô đó.",
    "like": "Đó là những ghi chú nhỏ bổ sung trên nhãn kệ, ví dụ như \"mang chút hơi hướng hip-hop\"."
  },
  "help.tracks.lang": {
    "t": "Ngôn ngữ bài hát",
    "what": "Ngôn ngữ của lời bài hát này không phải là ngôn ngữ hiển thị trên màn hình trang web của bạn.",
    "when": "Chọn ngôn ngữ chính của lời bài hát. Nếu không có lời hát, hãy chọn “Nhạc không lời”.",
    "click": "Thông tin này được lưu khi bạn nhấn [[Save track]]. Trang aimusiclist.com sử dụng thông tin này cho bảng xếp hạng theo ngôn ngữ.",
    "care": "Các bài hát cũ hơn có thể hiển thị “chưa được thiết lập (ngôn ngữ trang web)”. Khi đó, ngôn ngữ mặc định của trang web sẽ được sử dụng. Chọn “Nhạc không lời” sẽ khóa hộp ngôn ngữ thứ hai.",
    "like": "Đó là một ghi chú trên đĩa nhạc cho biết ca sĩ sử dụng ngôn ngữ nào."
  },
  "help.tracks.lang2": {
    "t": "Ngôn ngữ thứ hai (tùy chọn)",
    "what": "Ngôn ngữ thứ hai được sử dụng trong lời bài hát, ví dụ như một bài hát tiếng Hàn có lời bằng tiếng Anh.",
    "when": "Chỉ sử dụng cách này nếu phần lớn bài hát được hát bằng ngôn ngữ khác.",
    "click": "Nó được lưu khi bạn nhấn [[Save track]]. Chọn “— Không —” để xóa nó.",
    "care": "Chức năng này sẽ bị khóa cho đến khi bạn chọn ngôn ngữ chính của bài hát, và cả khi bài hát ở chế độ \"Nhạc không lời\". Ngôn ngữ chính không thể trùng với ngôn ngữ chính.",
    "like": "Đây là một ghi chú nhỏ thứ hai trong hồ sơ: \"cũng có một số từ tiếng Anh\"."
  },
  "help.tracks.ai_paste": {
    "t": "Dán kết quả AI",
    "what": "Một ô để bạn dán tiêu đề mà AI đã cung cấp, bao gồm cả phần ngoặc đơn. Nó sẽ đọc thể loại, tâm trạng và ngôn ngữ từ tiêu đề đó. [[Get the guide]] sẽ mở trang giải thích cách hỏi AI.",
    "when": "Hãy sử dụng nó khi khó xác định thể loại hoặc khi tên tệp của bạn không có phần ( ).",
    "click": "Chỉ dán thôi thì không thay đổi gì cả. Nhấn phím [[Áp dụng]] bên cạnh.",
    "care": "Nó chỉ điền vào các ô trống. Bạn vẫn lưu bằng nút tải lên hoặc mã [[Save track]].",
    "like": "Nó giống như việc đưa cho nhân viên bán hàng một ghi chú từ chuyên gia âm nhạc: nhân viên sẽ sao chép ghi chú đó lên nhãn kệ."
  },
  "help.tracks.ai_paste_btn": {
    "t": "Áp dụng",
    "what": "Chương trình sẽ đọc nội dung bạn đã dán và tự động điền vào các ô thể loại, ngôn ngữ bài hát và tâm trạng.",
    "when": "Nhấn vào đó sau khi bạn dán tiêu đề của AI.",
    "click": "Trên thẻ tải lên, nó điền thông tin cho tất cả các tệp trong danh sách chưa được tải lên. Trên biểu mẫu chỉnh sửa, nó chỉ điền thông tin cho bài hát này. Một thông báo bên dưới cho biết những gì đã được điền. Chưa có gì được lưu lại.",
    "care": "Những từ mà chương trình không nhận biết sẽ bị bỏ qua và hiển thị bằng màu vàng. Nếu thể loại chính không có trong danh sách, các ô thể loại sẽ giữ nguyên như cũ. Hãy chọn các ô trước khi lưu.",
    "like": "Chính nhân viên văn phòng là người viết ghi chú của chuyên gia lên nhãn."
  },
  "help.site.ext": {
    "t": "Thông tin bổ sung",
    "what": "Các ô thông tin bổ sung về toàn bộ trang web của bạn. aimusiclist.com sẽ quyết định các ô nào tồn tại và hiển thị những gì bạn điền vào bên cạnh các bài hát của bạn.",
    "when": "Hãy điền vào những ô phù hợp với bạn. Tất cả các ô đều là tùy chọn, vì vậy bạn có thể bỏ qua tất cả.",
    "click": "Nó được lưu cùng với phần còn lại của thẻ khi bạn nhấn [[Save site info]]. Xóa một ô sẽ loại bỏ câu trả lời đó.",
    "care": "Nhóm này chỉ xuất hiện khi aimusiclist.com có ​​các ô dành cho trang web. Nếu một ô hiển thị yêu cầu cập nhật chương trình, bạn chưa thể điền vào. Câu trả lời cũ của bạn được lưu giữ an toàn.",
    "like": "Đây là tờ câu hỏi bổ sung mà chợ lớn (aimusiclist.com) phát ra, để gian hàng của bạn có thể mang thêm một vài nhãn dán."
  },
  "help.tracks.ext": {
    "t": "Thông tin bổ sung",
    "what": "Các ô thông tin bổ sung về bài hát, chẳng hạn như nhịp độ (BPM) hoặc một vài ghi chú ngắn. aimusiclist.com sẽ quyết định ô nào xuất hiện và hiển thị câu trả lời bên cạnh bài hát của bạn.",
    "when": "Hãy điền những gì bạn biết. Mỗi ô đều là tùy chọn.",
    "click": "Thông tin này được lưu khi bạn tải lên hoặc nhấn [[Save track]]. Trên thẻ tải lên, các giá trị giống nhau sẽ được áp dụng cho mọi bài hát. Trên biểu mẫu chỉnh sửa, việc xóa nội dung trong một ô và lưu lại sẽ xóa giá trị đó.",
    "care": "Nếu một dòng thông báo cho biết hộp đó cần cập nhật chương trình, bạn có thể sử dụng nó sau khi cập nhật trang web của mình. Các hộp này chỉ xuất hiện sau khi trang web của bạn đã nhận được danh sách từ aimusiclist.com.",
    "like": "Đó là dòng chữ in nhỏ ở mặt sau của vỏ đĩa."
  },
  "help.img.editor": {
    "t": "Cửa sổ hình ảnh",
    "what": "Một cửa sổ nhỏ giúp điều chỉnh kích thước ảnh của bạn cho phù hợp: ảnh bài hát 100×100, ảnh bìa album 200×200, hoặc banner đầu trang lên đến 1600×400.",
    "when": "Ứng dụng sẽ tự động mở sau khi bạn chọn ảnh cho bài hát, ảnh bìa album hoặc ảnh banner.",
    "click": "Chọn cách điều chỉnh hình ảnh, kiểm tra Kết quả, sau đó nhấn [[Save image]]. Nhấn [[Hủy]] hoặc phím Esc để đóng cửa sổ mà không thay đổi nội dung.",
    "care": "Chỉ bản sao nhỏ được tải lên, không bao giờ là ảnh gốc của bạn. Mỗi loại có giới hạn kích thước (50 KB, 100 KB hoặc 300 KB); ảnh sẽ được thu nhỏ cho đến khi vừa với kích thước mong muốn.",
    "like": "Đây là một xưởng nhỏ chuyên cắt ảnh của bạn sao cho vừa với khung trước khi treo lên tường cửa hàng."
  },
  "help.img.mode_crop": {
    "t": "Cắt xén (di chuyển khung hình)",
    "what": "Chỉ giữ lại phần hình ảnh nằm trong khung sáng và cắt bỏ phần còn lại.",
    "when": "Hãy sử dụng nó khi hình ảnh lớn hơn mức cần thiết hoặc không đúng hình dạng, và bạn muốn giữ lại phần đẹp nhất, chẳng hạn như khuôn mặt.",
    "click": "Một khung hình sáng xuất hiện trên ảnh. Kéo khung hoặc nhấn các phím mũi tên để chọn phần ảnh muốn giữ lại. Thanh điều chỉnh kích thước khung giúp phóng to hoặc thu nhỏ khung. Kết quả sẽ thay đổi khi bạn di chuyển thanh điều chỉnh.",
    "care": "Những gì nằm ngoài khung hình sẽ không được lưu giữ.",
    "like": "Nó giống như việc dùng kéo cắt một bức ảnh để chỉ giữ lại phần đẹp nhất cho bìa đĩa."
  },
  "help.img.mode_fit": {
    "t": "Thu nhỏ toàn bộ hình ảnh",
    "what": "Giữ nguyên toàn bộ bức tranh nhưng thu nhỏ lại thay vì cắt xén.",
    "when": "Hãy sử dụng nó khi không được phép cắt bỏ bất cứ thứ gì, ví dụ như logo hoặc hình ảnh có chữ.",
    "click": "Kết quả hiển thị toàn bộ hình ảnh cùng một lúc. Đối với hình vuông (hình ảnh bài hát hoặc ảnh bìa), các cạnh trống được tô bằng màu trung bình của hình ảnh. Đối với banner, hình ảnh giữ nguyên hình dạng và nằm gọn trong khung 1600×400.",
    "care": "Một bức tranh dài và hẹp có thể trông nhỏ khi được đóng khung vuông, với các cạnh rộng và được tô màu.",
    "like": "Nó giống như việc đặt cả một tấm áp phích vào khung có viền màu mà không cắt nó ra."
  },
  "help.img.frame": {
    "t": "Kích thước khung",
    "what": "Thanh trượt giúp phóng to hoặc thu nhỏ khung hình sáng.",
    "when": "Thu nhỏ hình ảnh để phóng to một phần nhỏ, ví dụ như khuôn mặt. Phóng to hình ảnh để giữ lại nhiều chi tiết hơn.",
    "click": "Khung hình và kết quả sẽ thay đổi khi bạn trượt chuột. Ở phía ngoài cùng bên phải, khung hình sẽ lớn hết cỡ theo kích thước ảnh cho phép.",
    "care": "Khung hình quá nhỏ trên một bức ảnh nhỏ có thể khiến ảnh bị mờ. Hãy kiểm tra kết quả trước khi lưu.",
    "like": "Nó giống như việc di chuyển kính lúp lại gần hoặc ra xa bức ảnh."
  },
  "help.img.result": {
    "t": "Kết quả",
    "what": "Đây là bản xem trước của hình ảnh đúng như cách nó sẽ được lưu lại.",
    "when": "Hãy xem xét kỹ trước khi nhấn [[Save image]].",
    "click": "Nó tự động cập nhật mỗi khi bạn di chuyển khung hình hoặc thay đổi chế độ. Đây chỉ là bản xem trước; chưa có gì được lưu lại.",
    "care": "Ảnh có kích thước lớn sẽ hiển thị nhỏ hơn một chút ở đây, nhưng chúng được lưu ở kích thước đầy đủ. Ảnh đã lưu có thể trông hơi mờ hơn vì đã được làm sáng.",
    "like": "Nó giống như một chiếc gương phản chiếu bức ảnh đã được đóng khung sẵn."
  },
  "help.img.save": {
    "t": "Lưu ảnh",
    "what": "Tạo ra bức tranh nhỏ cuối cùng và sử dụng nó.",
    "when": "Nhấn vào đó khi kết quả trông đúng.",
    "click": "Hình ảnh hoặc banner bài hát được lưu ngay lập tức và hiển thị trên trang web của bạn; hình ảnh bài hát cũng hiển thị trên aimusiclist.com nếu bài hát đó được công khai. Ảnh bìa album chỉ được đặt trong khung album và được lưu khi bạn nhấn [[Save album]].",
    "care": "Nếu hình ảnh vẫn quá nặng hoặc trình duyệt của bạn không thể hiển thị loại hình ảnh này, một thông báo màu đỏ sẽ hiện ra. Hãy thử một hình ảnh đơn giản hơn hoặc khung hình nhỏ hơn, hoặc sử dụng Chrome, Edge hoặc Firefox.",
    "like": "Nó giống như việc đặt bức ảnh đã được cắt tỉa vào khung và treo lên tường cửa hàng."
  },
  "help.img.crop": {
    "t": "Ảnh đại diện",
    "what": "Một khung cửa sổ để hiển thị ảnh đại diện của bạn trong một hình tròn. Ảnh đại diện của bạn là khuôn mặt hoặc logo của bạn, được hiển thị dạng hình tròn trên trang web của bạn và trên aimusiclist.com.",
    "when": "Ứng dụng sẽ tự động mở sau khi bạn chọn ảnh đại diện.",
    "click": "Vòng tròn vẫn nằm ở giữa và bạn di chuyển ảnh bên dưới nó. Kéo ảnh, sử dụng thanh thu phóng, con lăn chuột hoặc hai ngón tay, hoặc nhấn các phím mũi tên và + / −. Nhấn [[Áp dụng]] để lưu, hoặc [[Hủy]] / Esc để đóng mà không thay đổi.",
    "care": "Chỉ phần bên trong vòng tròn được sử dụng. Chỉ một bản sao nhỏ 200×200 được tải lên, không phải ảnh gốc của bạn.",
    "like": "Nó giống như việc di chuyển một bức ảnh phía sau một khung cửa sổ tròn cho đến khi khuôn mặt của bạn nằm chính giữa."
  },
  "help.img.crop_zoom": {
    "t": "Phóng",
    "what": "Thanh trượt (và các nút − và +) giúp phóng to hoặc thu nhỏ ảnh bên trong vòng tròn.",
    "when": "Phóng to khi khuôn mặt bạn trông quá nhỏ trong vòng tròn. Thu nhỏ để hiển thị nhiều hơn.",
    "click": "Ảnh thay đổi kích thước xung quanh giữa vòng tròn. Ở phía cực trái, ảnh vừa khít vòng tròn. Ở phía cực phải, ảnh lớn gấp 4 lần. Các ảnh xem trước bên dưới cũng thay đổi.",
    "care": "Ảnh không thể thu nhỏ hơn hình tròn, vì vậy sẽ không bao giờ có cạnh trống. Phóng to quá mức một bức ảnh nhỏ có thể làm ảnh bị mờ.",
    "like": "Nó giống như việc tiến lại gần máy quay hơn hoặc lùi xa hơn."
  },
  "help.img.crop_rotate": {
    "t": "Quay",
    "what": "Xoay ảnh một phần tư vòng sang phải.",
    "when": "Hãy sử dụng nó khi ảnh của bạn nằm nghiêng hoặc lộn ngược.",
    "click": "Mỗi lần nhấn sẽ xoay nó 90 độ. Nhấn bốn lần để trở về vị trí ban đầu. Ảnh sẽ trở lại vị trí giữa sau mỗi lần xoay, vì vậy hãy di chuyển nó lại nếu cần.",
    "like": "Nó giống như việc xoay khung tranh trên tường cho đến khi nó thẳng."
  },
  "help.img.crop_preview": {
    "t": "Xem trước",
    "what": "Hai vòng tròn nhỏ thể hiện ảnh đại diện của bạn sẽ trông như thế nào: một vòng tròn lớn và một vòng tròn nhỏ.",
    "when": "Kiểm tra cả hai trước khi nhấn [[Áp dụng]]. Kích thước nhỏ hơn là kích thước mà mọi người thường thấy trong danh sách.",
    "click": "Chúng tự động thay đổi khi bạn di chuyển, phóng to hoặc xoay ảnh. Chưa có gì được lưu lại cả.",
    "care": "Nếu khó nhìn rõ mặt trong vòng tròn nhỏ, hãy phóng to một chút.",
    "like": "Nó giống như việc lùi lại khỏi biển hiệu cửa hàng để xem người bên kia đường có đọc được nó hay không."
  },
  "help.img.crop_apply": {
    "t": "Áp dụng",
    "what": "Lưu phần bên trong vòng tròn làm ảnh đại diện của bạn.",
    "when": "Nhấn vào đó khi hình ảnh xem trước trông ổn.",
    "click": "Ảnh được lưu ngay lập tức và hiển thị trên trang web của bạn. aimusiclist.com sẽ nhận được ảnh trong vòng một hoặc hai phút. Màu sắc của phần trên cùng trên trang web của bạn cũng được chọn từ ảnh này.",
    "care": "Ảnh đại diện cũ của bạn đã được thay thế. Để thay đổi ảnh đại diện, hãy chọn ảnh mới.",
    "like": "Nó giống như việc treo bức chân dung mới của bạn trong cửa sổ cửa hàng vậy."
  },
  "help.top.profile_go": {
    "t": "Thêm ảnh",
    "what": "Bắt đầu thêm ảnh đại diện của bạn.",
    "when": "Nhấn vào đó từ đầu ảnh đại diện.",
    "click": "Tab Thông tin Trang web sẽ mở ra và thiết bị của bạn yêu cầu bạn chọn một bức ảnh. Sau đó, bạn cắt ảnh và ảnh sẽ được lưu lại khi bạn áp dụng. Khách truy cập và trang aimusiclist.com sẽ thấy ảnh đó ngay sau đó.",
    "care": "Bạn có thể thay đổi hoặc xóa nó sau này trong phần Thông tin trang web.",
    "like": "Nó giống như việc đưa bức ảnh cho người làm biển hiệu cửa hàng vậy."
  },
  "help.tab.tracks": {
    "t": "Đường ray",
    "what": "Đây là nơi dành cho các bài hát của bạn. Bạn tải chúng lên, chỉnh sửa thông tin chi tiết (tiêu đề, thể loại, ngôn ngữ, hình ảnh, lời bài hát) và chọn bài nào sẽ được công khai trên aimusiclist.com.",
    "when": "Hãy vào đây để thêm bài hát mới hoặc thay đổi bài hát cũ.",
    "click": "Nhấn phím Tab chỉ chuyển đổi chế độ xem. Bên trong, hầu hết các thay đổi sẽ được lưu ngay khi bạn thực hiện chúng.",
    "care": "Mỗi lần tải lên tối đa 20 bài hát, dung lượng 15 MB mỗi bài, thời lượng từ 30 giây đến 15 phút. Mỗi bài hát có một thể loại chính và tối đa 2 thể loại phụ khác. Ít nhất 10 bài hát phải được để công khai (tất cả nếu bạn có ít hơn). Không thể hoàn tác việc xóa bài hát.",
    "like": "Đây là kho chứa hàng, nơi bạn nhập các đĩa nhạc mới, dán nhãn và chọn ra những đĩa nào sẽ được trưng bày tại thị trường."
  },
  "help.tab.albums": {
    "t": "Album",
    "what": "Đây là nơi để bạn tập hợp các bài hát của mình thành album với tiêu đề, ảnh bìa và mô tả ngắn gọn.",
    "when": "Hãy đến đây khi bạn muốn trình chiếu một loạt bài hát cùng nhau.",
    "click": "Nhấn vào tab chỉ chuyển đổi chế độ xem. Một album gồm 6 đến 35 bài hát đều có âm thanh sẽ được công khai trên aimusiclist.com ngay khi bạn lưu lại hoặc vào thời điểm bạn chọn.",
    "care": "Bạn có thể tạo album có ít hơn 6 bài hát, nhưng album đó vẫn ở chế độ riêng tư. Phần mô tả có tối đa 200 ký tự. Khi album ở chế độ công khai, các bài hát trong album không thể được đặt ở chế độ riêng tư.",
    "like": "Nó giống như việc đóng gói các đĩa nhạc vào một hộp đựng riêng, mỗi hộp lại có bìa đĩa riêng."
  },
  "help.tab.skins": {
    "t": "Trang phục",
    "what": "Đây là nơi quyết định giao diện trang web của bạn: màu sắc, phông chữ và bố cục. Bạn có thể sử dụng giao diện có sẵn, cài đặt một giao diện từ thư viện hoặc tải lên giao diện của riêng mình.",
    "when": "Hãy đến đây khi bạn muốn trang web của mình trông khác biệt, hoặc khi một dấu chấm cho thấy giao diện đã có phiên bản mới.",
    "click": "Nhấn vào tab chỉ thay đổi giao diện. Giao diện mới sẽ hiển thị cho khách truy cập trong khoảng 30 giây, và bạn có thể chuyển lại ngay lập tức.",
    "care": "Chế độ Sáng và Tối luôn có sẵn, cùng với tối đa 20 chế độ khác nữa. Mỗi giao diện được tải lên là một tập tin có dung lượng tối đa 100 KB. Việc thay đổi giao diện không ảnh hưởng đến nhạc hoặc cài đặt của bạn.",
    "like": "Nó giống như việc bạn sơn lại cửa hàng và thay đổi kệ trưng bày. Hồ sơ khách hàng vẫn giữ nguyên."
  },
  "help.tab.site": {
    "t": "Thông tin trang web",
    "what": "Tất cả thông tin về trang web của bạn: tên trang, tên nghệ sĩ, ngôn ngữ chính, mô tả, liên kết mạng xã hội, hình ảnh, nút dành cho khách truy cập, quảng cáo, danh sách nghệ sĩ, thông tin đăng nhập và mã sử dụng.",
    "when": "Hãy truy cập trang này ngay sau khi cài đặt, và bất cứ khi nào bạn muốn thay đổi cách trang web giới thiệu về bạn.",
    "click": "Nhấn vào tab chỉ chuyển đổi chế độ xem. Một số thẻ được lưu bằng nút riêng, và việc chuyển đổi sẽ được lưu ngay khi bạn nhấn vào chúng.",
    "care": "Bạn không thể sử dụng tên của ca sĩ hoặc nhóm nhạc nổi tiếng. Tên trang web và tên nghệ sĩ cũng hiển thị trên aimusiclist.com. Thay đổi mật khẩu sẽ đăng xuất bạn khỏi mọi thiết bị.",
    "like": "Đó là biển hiệu cửa hàng, bảng tên và giấy tờ trong văn phòng cửa hàng, tất cả đều nằm trong cùng một ngăn kéo."
  },
  "help.tab.guestbook": {
    "t": "Sổ lưu bút",
    "what": "Nơi khách truy cập để lại những tin nhắn ngắn cho bạn, trên toàn bộ trang web hoặc trên một bài hát cụ thể. Tại đây bạn có thể mở hoặc đóng phần này và xóa tin nhắn.",
    "when": "Hãy vào đây để đọc những gì người nghe đã viết, hoặc để xóa một tin nhắn không hay.",
    "click": "Nhấn vào phím Tab chỉ chuyển đổi chế độ xem và tải các tin nhắn, 20 tin nhắn mỗi trang. Mở, đóng và xóa sẽ lưu ngay lập tức.",
    "care": "Tên người dùng tối đa 20 ký tự, tin nhắn tối đa 500 ký tự, không được chèn liên kết, tối đa 50 tin nhắn mỗi người mỗi ngày. Tin nhắn sẽ được lưu giữ cho đến khi bạn xóa chúng, và tin nhắn đã xóa không thể khôi phục. Việc đóng sổ lưu bút vẫn giữ nguyên tin nhắn.",
    "like": "Đó là cuốn sổ đặt ở cửa hàng của bạn, nơi khách hàng viết vài dòng."
  },
  "help.tab.domain": {
    "t": "Tên miền của tôi",
    "what": "Nơi bạn kết nối địa chỉ web riêng của mình (như mymusic.com) với trang web, thay vì địa chỉ dài mà trang web nhận được khi cài đặt.",
    "when": "Hãy đến đây khi bạn đã mua tên miền và muốn mọi người sử dụng nó.",
    "click": "Nhấn vào tab chỉ chuyển đổi chế độ xem. Hướng dẫn sẽ chỉ ra các bước (khoảng 10 phút). Khi bạn kết nối, địa chỉ sẽ được kiểm tra trước, sau đó aimusiclist.com sẽ nhận được địa chỉ mới.",
    "care": "Khách truy cập vào địa chỉ cũ sẽ được chuyển đến địa chỉ mới, và các bài hát đã có trong danh sách phát vẫn tiếp tục phát. Trên các trang web meshmelo, bạn kết nối một tên miền trong tài khoản meshmelo của mình.",
    "like": "Nó giống như việc bạn cung cấp cho cửa hàng của mình một địa chỉ ngắn gọn, dễ nhớ mà mọi người hay ghi nhớ."
  },
  "help.tab.stats": {
    "t": "Thống kê",
    "what": "Các số liệu về trang web của bạn: lượt truy cập và lượt phát mỗi ngày, bài hát phổ biến, album, quốc gia, nguồn gốc khách truy cập, thiết bị và ngôn ngữ. Số liệu của trang aimusiclist.com cũng được hiển thị ở đây.",
    "when": "Hãy đến đây để xem ai đang lắng nghe điều gì và liệu những gì bạn chia sẻ có thu hút được người khác hay không.",
    "click": "Nhấn vào tab sẽ tải các số. Chúng thay đổi mỗi ngày một lần. [[Làm mới ngay]] đếm ngay lập tức các số của ngày hôm nay, mỗi phút một lần.",
    "care": "Lượt truy cập của chính bạn khi đăng nhập sẽ không được tính. Số liệu của aimusiclist.com thay đổi một lần mỗi ngày, vào buổi sáng. Trên một số thiết lập, lượt truy cập hoặc lượt phát không thể được tính; tab sau đó sẽ giải thích lý do và những gì cần bật.",
    "like": "Đây là sổ khách hàng và hồ sơ bán hàng của cửa hàng, được tổng hợp lại cho bạn."
  },
  "help.tab.analysis": {
    "t": "Phân tích",
    "what": "Cùng tìm hiểu sâu hơn về hiệu suất các bài hát của bạn trên aimusiclist.com: thay đổi thứ hạng, các bài hát đang nổi lên, cách các bài hát mới ra mắt, khoảng cách đến Top 100, lượt thích và lượt thêm vào danh sách phát, cũng như vị trí của bạn trong thể loại nhạc. Tin tức về aimusiclist cũng có ở đây.",
    "when": "Hãy đến đây để tìm hiểu những bài hát nào đang được yêu thích và những bài hát nào nên được chia sẻ tiếp theo.",
    "click": "Nhấn vào tab sẽ mở các số đã lưu. Chúng được thu thập một lần mỗi ngày, vì vậy việc mở tab thường xuyên sẽ không thay đổi gì. Dấu chấm trên tab có nghĩa là có tin tức mới về aimusiclist; nó sẽ biến mất khi bạn mở tab.",
    "care": "Một trang web mới toanh ban đầu sẽ chẳng có gì đáng xem. Hình ảnh sẽ được bổ sung dần theo thời gian.",
    "like": "Nó giống như một bản báo cáo hàng tuần từ thị trường lớn về việc các bản thu âm của bạn bán chạy như thế nào trong gian hàng của họ."
  },
  "help.top.mm_two_screens": {
    "t": "Bạn có hai nơi cần quản lý",
    "what": "Một tấm thẻ nhỏ giải thích về hai trang quản trị của bạn: trang quản trị của trang web này và tài khoản meshmelo của bạn. Mỗi trang đều hiển thị địa chỉ và chức năng của nó.",
    "when": "Hãy mở nó khi bạn không tìm thấy cài đặt nào. Nó mở và đóng bằng nút ? ở phía trên.",
    "click": "Việc đọc nó không thay đổi gì cả. Nút bên trong sẽ mở tài khoản meshmelo của bạn trong một tab mới.",
    "care": "Thẻ này chỉ có trên các trang web meshmelo.",
    "like": "Nó giống như một tấm biển trong hành lang: 'Quầy hàng lối này, văn phòng chính lối kia.'"
  },
  "help.top.php_update": {
    "t": "Cập nhật ngay",
    "what": "Đối với phiên bản PHP, thao tác này sẽ tự động cập nhật chương trình trang web lên phiên bản mới nhất.",
    "when": "Hãy nhấn vào đó khi dòng chữ \"phiên bản mới\" hiện lên và bạn có một phút rảnh.",
    "click": "Bạn được yêu cầu xác nhận. Quá trình này mất khoảng một phút, sau đó trang sẽ tải lại. Nếu có lỗi xảy ra, trang sẽ tự động quay lại phiên bản cũ.",
    "care": "Các bài hát, cài đặt và trang của bạn sẽ được giữ nguyên. Đừng đóng trang khi nó hiển thị đang cập nhật. Các trang web có mã meshmelo không có nút này; mã meshmelo sẽ cập nhật chúng.",
    "like": "Giống như một nhóm nhân viên thay đổi vị trí các kệ sách qua đêm. Các bản ghi âm được trả về đúng vị trí cũ."
  },
  "help.top.usage_r2_storage": {
    "t": "Dung lượng lưu trữ R2 (10 GB trống)",
    "what": "Dung lượng mà các tệp của bạn chiếm trong bộ nhớ của R2, Cloudflare. Các bài hát chiếm gần hết dung lượng đó.",
    "when": "Hãy kiểm tra trước khi tải lên nhiều bài hát.",
    "click": "Đó chỉ là một con số. Nó được cập nhật sau mỗi 10 phút.",
    "care": "Dung lượng nhỏ hơn thì tốt hơn. Trên 10 GB, Cloudflare sẽ tính phí vào tài khoản của bạn. Nếu bộ nhớ sắp đầy, hãy xóa những bài hát bạn không cần hoặc sử dụng các định dạng nhỏ hơn (MP3 thay vì WAV). Dung lượng lưu trữ khác trong cùng tài khoản Cloudflare cũng được tính vào.",
    "like": "Điều đó thể hiện mức độ đầy của kho hàng của bạn. Các kệ hiện còn chỗ trống khoảng 10 GB."
  },
  "help.top.usage_class_a": {
    "t": "R2 viết trong tháng này (miễn phí 1 triệu lượt xem)",
    "what": "Đã có bao nhiêu lần thao tác được lưu vào R2 trong tháng này: tải lên, chỉnh sửa, chuyển đổi và các thay đổi khác?",
    "when": "Hãy kiểm tra lại sau một tháng nếu có nhiều nội dung được tải lên hoặc nhiều thay đổi.",
    "click": "Nó chỉ là một con số. Nó sẽ bắt đầu lại từ 0 mỗi tháng.",
    "care": "Càng ít càng tốt. Mỗi lần chỉnh sửa chỉ cần vài thao tác ghi, và tải lên 20 bài hát cùng lúc khoảng 60 thao tác, vậy nên 1 triệu là rất nhiều. Xóa thì miễn phí. Vượt quá số lượng miễn phí, Cloudflare sẽ tính phí vào tài khoản của bạn.",
    "like": "Đó là số lần cửa kho mở ra để đưa hàng vào trong tháng này."
  },
  "help.top.usage_class_b": {
    "t": "R2 lượt đọc tháng này (10 triệu lượt miễn phí)",
    "what": "Đã có bao nhiêu lần nội dung từ R2 được đọc trong tháng này? Hầu hết các lượt đọc đến từ những người nghe nhạc của bạn và truy cập trang web của bạn.",
    "when": "Hãy kiểm tra khi bài hát của bạn nhận được nhiều lượt nghe.",
    "click": "Nó chỉ là một con số. Nó sẽ bắt đầu lại từ 0 mỗi tháng.",
    "care": "A growing number means people are listening, which is good, but over 10 million Cloudflare charges your account. If it climbs very fast, look at the Stats tab to see where the plays come from.",
    "like": "Đó là số lần cánh cửa kho mở ra để lấy đĩa nhạc ra và phát."
  },
  "help.top.usage_workers": {
    "t": "Yêu cầu của người lao động hôm nay (miễn phí 100.000)",
    "what": "Hôm nay trang web của bạn đã phản hồi bao nhiêu lần khách truy cập? Việc mở trang web và mỗi đoạn nhạc được phát đều được tính.",
    "when": "Hãy kiểm tra lại vào những ngày bận rộn, ví dụ như sau khi bạn chia sẻ một liên kết.",
    "click": "Nó chỉ là một con số. Nó sẽ quay trở lại 0 mỗi ngày vào lúc 00:00 UTC (09:00 giờ Hàn Quốc).",
    "care": "Nếu có hơn 100.000 lượt truy cập trong một ngày, trang web sẽ tạm dừng cho đến khi thiết lập lại. Việc này hoàn toàn miễn phí. Nó tính toàn bộ số lượt truy cập vào tài khoản Cloudflare của bạn. Trên phiên bản PHP, nó tính số lượt truy cập vào trình xử lý âm thanh (audio Worker) của bạn, và các bài hát sẽ ngừng phát khi số lượt truy cập hoàn tất. Các trang web sử dụng meshmelo không hiển thị thanh này.",
    "like": "Đó là số lượng khách hàng tối đa mà nhân viên có thể phục vụ trong một ngày. Khi đạt đến số lượng tối đa, cửa hàng sẽ đóng cửa cho đến ngày hôm sau."
  },
  "help.top.usage_disk_space": {
    "t": "Dung lượng bộ nhớ được sử dụng bởi các bài hát và trang của trang web này.",
    "what": "Trang web này chiếm bao nhiêu dung lượng lưu trữ (hosting). Phần lớn dung lượng là các bài hát.",
    "when": "Hãy kiểm tra trước khi tải lên tệp lớn.",
    "click": "Đó chỉ là một con số (hoặc một vạch nếu gói cước của bạn đã đặt giới hạn).",
    "care": "Dung lượng càng nhỏ càng tốt. Nếu gần đạt đến giới hạn của gói cước, hãy xóa những bài hát bạn không cần hoặc tải lên các tệp MP3 có dung lượng nhỏ hơn. Các trang web khác trên cùng máy chủ không được tính ở đây.",
    "like": "Đó là diện tích sàn mà các bản ghi âm của bạn chiếm trong cửa hàng thuê."
  },
  "help.top.usage_files": {
    "t": "Tệp (inodes)",
    "what": "Trang web này lưu trữ bao nhiêu tập tin trên máy chủ của bạn? Các công ty cung cấp dịch vụ lưu trữ thường giới hạn số lượng tập tin, chứ không chỉ dung lượng lưu trữ.",
    "when": "Hãy kiểm tra nếu bạn có nhiều bài hát hoặc nếu dịch vụ lưu trữ cảnh báo về các tập tin.",
    "click": "Đó chỉ là một con số (hoặc một vạch nếu gói cước của bạn đã đặt giới hạn).",
    "care": "Càng ít càng tốt. Mỗi bài hát đều đi kèm với một vài tập tin (âm thanh, hình ảnh, lời bài hát), vì vậy việc xóa các bài hát không sử dụng sẽ làm giảm dung lượng.",
    "like": "Đó là số lượng hộp có trong cửa hàng, bất kể mỗi hộp nhỏ đến mức nào."
  },
  "help.top.usage_tracks": {
    "t": "Bài hát",
    "what": "Trang web này có bao nhiêu bài hát?",
    "when": "Chỉ để xem nhanh thôi. Điều này giúp bạn biết trung bình một bài hát chiếm bao nhiêu dung lượng.",
    "click": "Nó chỉ là một con số. Nó sẽ thay đổi khi bạn tải lên hoặc xóa bài hát.",
    "care": "Không có giới hạn nào cho cái này cả.",
    "like": "Đây là số lượng mặt hàng trong cửa hàng của bạn."
  },
  "help.top.usage_disk": {
    "t": "Mức sử dụng hosting (trang web này)",
    "what": "Trên phiên bản PHP với các bài hát được lưu trữ trên máy chủ riêng của bạn, điều này hiển thị mức độ sử dụng tài nguyên của trang web: dung lượng, số lượng tệp và bài hát.",
    "when": "Hãy kiểm tra trước khi tải lên nhiều bài hát, vì các gói dịch vụ lưu trữ có giới hạn.",
    "click": "Đây là tiêu đề. Các số được đọc lại sau mỗi 10 phút. [[Làm mới]] đang đọc chúng.",
    "care": "Giới hạn thực tế của gói dịch vụ của bạn được hiển thị trong cPanel → Thống kê. Bạn chỉ thấy các thanh có biểu đồ phần trăm nếu các giới hạn đó đã được thiết lập trong cài đặt của trang web này khi cài đặt. Nếu không, bạn chỉ thấy các con số đơn thuần.",
    "like": "Đó là diện tích mặt bằng cho thuê. Hợp đồng của chủ nhà quy định diện tích tối đa mà bạn được phép thuê."
  },
  "help.top.usage": {
    "t": "Cloudflare sử dụng miễn phí",
    "what": "Bars that show how much of Cloudflare's free amount your account has used: storage, writes and reads this month, and requests today.",
    "when": "Thỉnh thoảng hãy liếc nhìn nó, đặc biệt là khi có nhiều người đến thăm.",
    "click": "Đây là tiêu đề. Các số được đọc lại sau mỗi 10 phút. [[Làm mới]] đang đọc chúng.",
    "care": "Càng nhỏ càng tốt. Thanh tiến trình chuyển sang màu cam ở mức 70% và màu đỏ ở mức 90%. Vượt quá số lượng miễn phí của R2 sẽ tốn phí. Vượt quá số lượng dành cho Người lao động sẽ khiến trang web tạm dừng hoạt động trong phần còn lại của ngày, mà không mất phí. Các con số này tính cho toàn bộ tài khoản Cloudflare của bạn, không chỉ riêng trang web này.",
    "like": "Đây là đồng hồ điện của cửa hàng bạn. Hãy kiểm tra nó trước khi nhận hóa đơn."
  },
  "help.top.usage_refresh": {
    "t": "Làm cho khỏe lại",
    "what": "Đọc số liệu sử dụng từ Cloudflare ngay bây giờ, không cần chờ cập nhật sau 10 phút nữa.",
    "when": "Nhấn nút này sau khi tải lên một tệp lớn hoặc sau khi bạn nhập khóa sử dụng mới.",
    "click": "Các thanh tiến độ sẽ cập nhật trong giây lát, và thời gian hiển thị bên cạnh tiêu đề cũng sẽ thay đổi.",
    "care": "Số liệu của Cloudflare có thể hơi chậm trễ, vì vậy kết quả đo mới có thể vẫn giữ nguyên trong một thời gian.",
    "like": "Nó giống như việc bạn tự đi đến đồng hồ đo điện và đọc số thay vì phải chờ người đọc đồng hồ."
  },
  "help.top.usage_connect": {
    "t": "Kết nối",
    "what": "Hiển thị khi chưa có khóa sử dụng nào được thêm vào. Khóa này cho phép trang này hiển thị giới hạn sử dụng miễn phí Cloudflare của bạn.",
    "when": "Nhấn vào đó để thêm chìa khóa. Quá trình này mất khoảng 2 phút.",
    "click": "Tab Thông tin trang web sẽ mở ra ở thẻ **Xem cách sử dụng**, sẵn sàng để bạn dán khóa.",
    "care": "Nếu không có khóa, trang web của bạn vẫn hoạt động, nhưng bạn không thể biết mình đã gần đạt đến giới hạn hay chưa. Khóa chỉ có thể đọc các con số.",
    "like": "Nó giống như việc lắp đặt đồng hồ đo điện. Đèn vẫn hoạt động bình thường, nhưng bạn không thể biết mình đã sử dụng bao nhiêu điện."
  },
  "help.top.usage_retoken": {
    "t": "Nhập lại khóa",
    "what": "Hiển thị khi khóa sử dụng được lưu nhưng không thể đọc được các số. Lý do được ghi ở phía trên.",
    "when": "Nhấn phím này nếu phím đã bị xóa trên Cloudflare, đã hết hạn hoặc thiếu dòng cấp phép.",
    "click": "Tab Thông tin trang web sẽ mở ra ở mục **Xem mức sử dụng**, nơi bạn dán khóa mới.",
    "care": "Hãy kiểm tra hai điều: khóa được tạo trong cùng tài khoản Cloudflare với trang web này, và nó có cả hai dòng (Phân tích tài khoản · Đọc và Cài đặt tài khoản · Đọc). Các thanh có thể hiển thị các số liệu tốt cuối cùng cho đến khi sự cố được khắc phục.",
    "like": "Nó giống như việc thay thế một chiếc chìa khóa đồng hồ đo điện bị hỏng."
  },
  "help.top.usage_uploaded": {
    "t": "Âm thanh được tải lên từ trang quản trị này.",
    "what": "Tổng dung lượng của các file nhạc bạn đã tải lên đây. Chỉ những bài hát từ trang web này mới được tính.",
    "when": "Hãy so sánh nó với thanh dung lượng lưu trữ. Nếu thanh này lớn hơn nhiều, có nghĩa là một thứ khác trong tài khoản Cloudflare của bạn đang sử dụng dung lượng.",
    "click": "Nó chỉ là một con số. Nó sẽ thay đổi khi bạn tải lên hoặc xóa bài hát.",
    "care": "Các dòng phía trên giải thích điều gì sẽ xảy ra khi bạn vượt quá số lượng miễn phí. Trên phiên bản PHP, chúng cũng cho biết nơi tìm thấy giới hạn của gói lưu trữ của bạn.",
    "like": "Đó là số lượng hồ sơ của riêng bạn chiếm bao nhiêu diện tích trong kho, không tính các thùng hồ sơ của hàng xóm."
  },
  "help.top.mm_upgrade": {
    "t": "Có thêm phòng (nâng cấp)",
    "what": "Nút này dùng để yêu cầu meshmelo tăng lượng sử dụng hàng ngày. Nó sẽ xuất hiện trong cảnh báo ở đầu trang khi mức sử dụng hôm nay đạt 80% trở lên.",
    "when": "Nhấn vào đó nếu trang web của bạn thường xuyên hết lượt sử dụng miễn phí trong ngày.",
    "click": "Trang nâng cấp của meshmelo, hoặc một email gửi đến meshmelo, sẽ được mở ra. Mọi thứ sẽ không thay đổi cho đến khi meshmelo thiết lập xong.",
    "care": "Hầu hết các trang web không bao giờ cần đến nó. Một ngày bận rộn bình thường sẽ tự động trở lại trạng thái ban đầu sau khi thiết lập lại.",
    "like": "Nó giống như việc yêu cầu tòa nhà lắp đặt đường dây điện lớn hơn khi cửa hàng của bạn đông khách."
  },
  "help.top.mm_use": {
    "t": "Cách sử dụng ngày nay",
    "what": "Trên các trang web meshmelo, một phần trăm hiển thị tỷ lệ sử dụng miễn phí mà trang web của bạn đã sử dụng hôm nay. Bên dưới là số liệu trong 7 ngày gần nhất.",
    "when": "Hãy xem xét điều này vào những ngày bận rộn, ví dụ như sau khi bạn chia sẻ một liên kết.",
    "click": "Nó chỉ là một con số. Nó sẽ quay trở lại 0% mỗi ngày vào thời điểm được ghi bên dưới thanh.",
    "care": "Số lượng ít hơn thì tốt hơn, nhưng số lượng nhiều hơn có nghĩa là nhiều khách truy cập. Từ 80% trở lên, bạn sẽ thấy cảnh báo ở đầu trang. Ở mức 100%, khách truy cập sẽ thấy một trang ngắn \"sẽ quay lại sau\" cho đến khi quá trình thiết lập lại hoàn tất. Trang quản trị này và các trò chơi trên aimusiclist.com vẫn hoạt động bình thường.",
    "like": "Đây là đồng hồ điện của cửa hàng bạn hôm nay. Khi đồng hồ đầy, cửa trước sẽ đóng cho đến ngày mai."
  },
  "help.top.mm_use_notify": {
    "t": "Hãy gửi email cho tôi mỗi ngày một lần khi tỷ lệ đạt trên 80%.",
    "what": "Một ô chọn để gửi cảnh báo qua email khi mức sử dụng hôm nay vượt quá 80%.",
    "when": "Hãy bật thông báo nếu bạn không mở trang này mỗi ngày.",
    "click": "Nó được lưu ngay khi bạn chọn hoặc bỏ chọn. Bạn chỉ nhận được tối đa một email mỗi ngày.",
    "care": "Nó chỉ cảnh báo bạn thôi. Nó không ngăn chặn bất cứ điều gì. Bạn chỉ thấy hộp thoại này khi meshmelo đã bật email cảnh báo.",
    "like": "Việc đó giống như yêu cầu người đọc công tơ điện nhắn tin cho bạn khi công tơ gần đầy."
  },
  "help.top.aml_retry": {
    "t": "Hãy thử ngay",
    "what": "Ứng dụng đang cố gắng kết nối với aimusiclist.com ngay bây giờ, mà không chờ đến lần thử tự động tiếp theo.",
    "when": "Hãy nhấn nút đó khi màn hình hiển thị thông báo \"không kết nối\" hoặc sau khi bạn đã khắc phục được lỗi hiển thị.",
    "click": "Dòng chữ sẽ chuyển thành 'Đang kết nối…', và ngay sau đó sẽ hiển thị kết quả. Khi kết nối thành công, các bài hát công khai của bạn sẽ được gửi đến aimusiclist.com.",
    "care": "Nếu nguyên nhân là do phía aimusiclist.com, việc nhấn nhiều lần sẽ không giúp ích gì. Hãy đợi một lúc và thử lại.",
    "like": "Điều này giống như việc bạn tự gọi điện cho thị trường thay vì chờ họ gọi lại."
  },
  "help.tracks.list": {
    "t": "Các bản nhạc của tôi",
    "what": "Đây là danh sách tất cả các bài hát trên trang web của bạn. Số trong ngoặc đơn là số lượng bài hát bạn có.",
    "when": "Hãy đến đây để tìm bài hát, bật hoặc tắt chế độ công khai trên aimusiclist.com, nghe, chỉnh sửa hoặc xóa bài hát đó.",
    "click": "Tất cả những gì bạn thấy ở đây đều là danh sách thực tế đã được lưu của bạn. Các công tắc và nút bấm trong mỗi hàng đều hoạt động ngay lập tức.",
    "care": "Những bài hát không có file âm thanh sẽ hiển thị **Không có âm thanh**. Chúng sẽ không được tính vào bất kỳ bảng nào cho đến khi bạn thêm file âm thanh vào.",
    "like": "Đây là danh sách hàng tồn kho của cửa hàng bạn: mọi mặt hàng bạn có, kèm theo ghi chú bên cạnh cho biết mặt hàng đó có bán trên thị trường lớn (aimusiclist.com) hay không."
  },
  "help.tracks.search": {
    "t": "Tìm kiếm tiêu đề bài hát",
    "what": "Một hộp tìm kiếm bài hát theo tiêu đề. Chỉ những bài hát có tiêu đề chứa các từ bạn nhập mới được giữ lại trong danh sách.",
    "when": "Hãy sử dụng chức năng này khi bạn có nhiều bài hát và muốn tìm một bài nhanh chóng, hoặc để chọn một nhóm bài hát để thay đổi cùng lúc.",
    "click": "Danh sách sẽ thay đổi khi bạn nhập liệu. Không có gì được lưu hoặc thay đổi. Xóa nội dung trong ô để xem lại tất cả bài hát.",
    "care": "Nó chỉ xem xét tiêu đề bài hát, không xem xét thể loại hay tên nghệ sĩ. Chữ hoa hay chữ thường đều không quan trọng. [[Select all shown]] chỉ chọn những bài hát còn lại sau khi tìm kiếm.",
    "like": "Giống như việc bạn tìm kiếm một đĩa nhạc dựa vào tên in trên gáy đĩa trong cửa hàng của mình."
  },
  "help.tracks.nolang": {
    "t": "Chỉ những bài hát không có ngôn ngữ bài hát",
    "what": "Một ô chọn hiển thị chỉ những bài hát mà ngôn ngữ lời bài hát chưa được thiết lập.",
    "when": "Sử dụng công cụ này để tìm những bài hát cũ vẫn cần chuyển đổi ngôn ngữ, sau đó sửa tất cả cùng một lúc.",
    "click": "Danh sách thay đổi ngay lập tức. Không có gì được lưu lại. Bỏ chọn tùy chọn này để xem lại tất cả bài hát. Chức năng này hoạt động cùng với chức năng tìm kiếm theo tiêu đề bài hát.",
    "care": "Cho đến khi bạn thiết lập, aimusiclist.com sẽ coi bài hát đó là ngôn ngữ chính của trang web. Cách nhanh chóng: chọn ô này, chọn ô trên cùng để chọn tất cả các bài hát được hiển thị, sau đó sử dụng **Ngôn ngữ bài hát của các bài hát đã chọn** và [[Áp dụng]].",
    "like": "Giống như việc chỉ lấy ra những đĩa nhạc vẫn chưa có nhãn ghi rõ ngôn ngữ hát trong bài hát đó."
  },
  "help.tracks.bulk": {
    "t": "Thay đổi nhiều bài hát cùng lúc",
    "what": "Hộp thoại này cho phép thay đổi nhiều bài hát cùng lúc. Khi không có bài hát nào được chọn, nó sẽ hiển thị một gợi ý ngắn. Khi bạn chọn bài hát, nó sẽ cho biết có bao nhiêu bài đã được chọn và mở các công cụ.",
    "when": "Hãy sử dụng chức năng này khi cùng một thay đổi áp dụng cho nhiều bài hát, để bạn không phải chỉnh sửa từng bài một.",
    "click": "Việc chọn bài hát không lưu gì cả. Mỗi công cụ trong hộp chỉ lưu khi bạn nhấn nút [[Áp dụng]] hoặc nút tương ứng của nó. Sau đó, các lần chọn sẽ bị xóa.",
    "care": "Chọn bài hát bằng các ô nhỏ ở bên trái mỗi hàng, hoặc ô trên cùng cho tất cả các bài hát được hiển thị. Ô này có thể chứa: tâm trạng (hoặc thông tin bổ sung khác), ngôn ngữ bài hát, công cụ AI và số lượt phát của khách truy cập (chỉ khi trang web của bạn thống kê lượt phát).",
    "like": "Giống như việc dán nhãn lên nhiều đĩa cùng một lúc, thay vì phải đi đến từng kệ một."
  },
  "help.tracks.bulk_lang": {
    "t": "Ngôn ngữ âm nhạc của các bài hát được chọn",
    "what": "Thiết lập ngôn ngữ bài hát (ngôn ngữ lời bài hát) cho tất cả các bài hát đã chọn cùng một lúc. Bạn cũng có thể thêm ngôn ngữ thứ hai.",
    "when": "Sử dụng nó cho nhiều bài hát được hát cùng một ngôn ngữ, hoặc để sửa các bài hát chưa có ngôn ngữ lời bài hát.",
    "click": "Việc chọn ngôn ngữ không lưu lại gì cả. Nhấn [[Áp dụng]] bên dưới để lưu.",
    "care": "Đây là ngôn ngữ của lời bài hát, không phải ngôn ngữ của trang web. Nếu một bài hát không có lời, hãy chọn **Nhạc không lời (không có lời)**. Không thể kết hợp với ngôn ngữ khác. aimusiclist.com sử dụng ngôn ngữ này cho bảng xếp hạng theo ngôn ngữ.",
    "like": "Giống như việc ghi \"hát bằng tiếng Hàn\" trên nhãn của nhiều đĩa nhạc cùng một lúc."
  },
  "help.tracks.bulk_lang_apply": {
    "t": "Áp dụng",
    "what": "Lưu ngôn ngữ bài hát đã chọn vào mọi bài hát đã được chọn.",
    "when": "Nhấn vào đó sau khi bạn đã chọn xong bài hát và ngôn ngữ.",
    "click": "Quá trình lưu diễn ra ngay lập tức, một tin nhắn ngắn cho biết có bao nhiêu bài hát đã được thay đổi, và các bước kiểm tra được hoàn tất. aimusiclist.com sẽ hiển thị ngôn ngữ mới ngay sau đó.",
    "care": "Ngôn ngữ cũ của các bài hát đã được thay thế. Nếu chưa chọn bài hát nào, bạn chỉ nhận được lời nhắc chọn bài hát trước.",
    "like": "Đây là thời điểm các nhãn ngôn ngữ mới chính thức được ghi vào hồ sơ."
  },
  "help.tracks.select": {
    "t": "Chọn bài hát",
    "what": "Ô chọn ở trên cùng cho phép chọn tất cả các bài hát có trong danh sách. Các ô nhỏ ở mỗi hàng chọn một bài hát.",
    "when": "Hãy sử dụng chức năng này trước khi thay đổi nhiều bài hát cùng lúc trong ô phía trên danh sách.",
    "click": "Việc chọn chỉ đánh dấu các bài hát. Không có gì được lưu lại. Ô phía trên sẽ hiển thị số lượng bài hát đã được chọn và mở các công cụ chỉnh sửa.",
    "care": "Ô trên cùng chỉ hiển thị những bài hát bạn có thể xem ngay bây giờ. Nếu bạn đã tìm kiếm hoặc sử dụng tùy chọn **Chỉ những bài hát không có ngôn ngữ**, những bài hát bị ẩn sẽ không được hiển thị.",
    "like": "Giống như việc đặt ngón tay lên những bản ghi âm bạn muốn thay đổi trước khi lấy nhãn dán ra vậy."
  },
  "help.tracks.pub": {
    "t": "Công khai trên aimusiclist",
    "what": "Công tắc ở mỗi hàng quyết định xem bài hát đó có được đăng tải trên aimusiclist.com hay không. Mỗi bài hát luôn có sẵn trên trang web của bạn, dù bật hay tắt.",
    "when": "Hãy bật tính năng này lên đối với những bài hát bạn muốn nhiều người nghe hơn. Tắt tính năng này đi đối với những bài hát bạn chỉ muốn giữ lại trên trang web của mình.",
    "click": "Chức năng này lưu lại khoảnh khắc bạn nhấn nút. Khi bật, bài hát sẽ xuất hiện trên aimusiclist.com trong vòng 1-2 phút. Khi tắt, bài hát sẽ bị xóa khỏi đó.",
    "care": "Nếu bạn có từ 10 bài hát trở lên, ít nhất 10 bài phải được để ở chế độ công khai, vì vậy bạn không thể tắt các bài hát sau đó. Nếu có ít hơn 10 bài, tất cả đều ở chế độ công khai (dòng chữ nhỏ dưới tiêu đề bài hát cho biết quy tắc nào được áp dụng). Nút chuyển đổi mờ nghĩa là bài hát nằm trong album công khai hoặc album được thiết lập để mở sau. Hãy đặt album ở chế độ riêng tư trước.",
    "like": "Từ những bản ghi âm có trong cửa hàng của bạn, bạn chọn những bản nào cũng sẽ được bày bán trên kệ của thị trường lớn (aimusiclist.com)."
  },
  "help.tracks.col_title": {
    "t": "Tiêu đề",
    "what": "Hiển thị hình ảnh bài hát, tiêu đề và tên nghệ sĩ, cùng với ngôn ngữ bài hát và các nhãn nhỏ.",
    "when": "Hãy xem ở đây để kiểm tra thông tin chi tiết của một bài hát một cách nhanh chóng.",
    "click": "Nó chỉ hiển thị thông tin. Để thay đổi, hãy nhấn [[Edit]] ở hàng đó.",
    "care": "Các nhãn nhỏ có nghĩa là: **SRT** = có lời bài hát được căn chỉnh thời gian, **✦ tên** = công cụ AI được sử dụng để tạo ra bài hát, **Không có âm thanh** = tệp âm thanh bị thiếu, **Trong album đã phát hành** = bài hát có trong album công khai. Trên điện thoại, số lượt phát cũng hiển thị ở đây.",
    "like": "Giống như mặt trước của bìa đĩa nhạc: hình ảnh, tên và người sản xuất."
  },
  "help.tracks.col_genres": {
    "t": "Thể loại",
    "what": "Hiển thị thể loại của bài hát, tối đa ba thể loại. Thể loại đầu tiên, được tô sáng, là thể loại chính. Các thể loại còn lại là thể loại phụ.",
    "when": "Hãy xem ở đây để kiểm tra xem mỗi bài hát có thuộc đúng thể loại hay không.",
    "click": "Nó chỉ hiển thị thông tin. Để thay đổi thể loại, hãy nhấn [[Edit]] trong hàng đó.",
    "care": "Thể loại chính quyết định bài hát sẽ được xếp vào menu nào trên aimusiclist.com. Các thể loại phụ được hiển thị bên cạnh tiêu đề bài hát. Cột này bị ẩn trên màn hình điện thoại.",
    "like": "Giống như nhãn dán trên kệ cho người mua hàng biết đĩa nhạc đó thuộc khu vực nào trong siêu thị lớn."
  },
  "help.tracks.col_length": {
    "t": "Chiều dài",
    "what": "Thời lượng bài hát, tính bằng phút và giây (ví dụ: 3:25).",
    "when": "Hãy xem ở đây để kiểm tra xem bạn đã tải lên đúng tệp chưa, ví dụ như nếu bài hát quá ngắn.",
    "click": "Nó chỉ hiển thị thông tin. Thông tin này được lấy từ tệp âm thanh. Để thay đổi, hãy tải tệp mới lên [[Edit]].",
    "care": "Bài hát phải có độ dài từ 30 giây đến 15 phút. Cột này bị ẩn trên màn hình điện thoại.",
    "like": "Giống như thời lượng phát nhạc được in ở mặt sau của bìa đĩa."
  },
  "help.tracks.col_plays": {
    "t": "Các vở kịch",
    "what": "Tổng số lần mỗi bài hát được phát trên trang web của bạn. Di chuột vào một con số để xem số liệu trong 7 ngày qua và hôm nay.",
    "when": "Hãy dùng nó để xem mọi người nghe bài hát nào nhiều nhất. Số lượng càng nhiều càng tốt. Đây là một gợi ý hay về việc nên giữ bài hát nào ở chế độ công khai hay đưa vào album.",
    "click": "Nó chỉ hiển thị các con số. Chúng thay đổi một lần mỗi ngày, hoặc ngay lập tức khi bạn nhấn [[Làm mới ngay]] trong tab Thống kê.",
    "care": "Số lượt phát trên aimusiclist.com không được tính vào con số này. Nó chỉ hiển thị khi trang web của bạn thống kê số lượt phát. Nếu con số có vẻ quá thấp, hãy đợi bản cập nhật hàng ngày tiếp theo hoặc nhấn [[Làm mới ngay]]. **Ẩn khỏi khách truy cập** bên dưới một con số có nghĩa là khách truy cập không nhìn thấy nó.",
    "like": "Giống như đồng hồ đo điện của mỗi đĩa nhạc: nó cho biết đĩa đã được phát bao nhiêu lần trong cửa hàng của bạn."
  },
  "help.tracks.row_buttons": {
    "t": "Nút bài hát",
    "what": "Các nút ở cuối mỗi hàng: [[Xem trước]], [[Edit]] và [[Delete]].",
    "when": "Bạn có thể sử dụng chúng để nghe một bài hát, thay đổi thông tin chi tiết của bài hát hoặc xóa nó.",
    "click": "[[Xem trước]] phát bài hát tại đây (nhấn [[Stop]] để dừng). [[Edit]] mở biểu mẫu bài hát ở đầu trang. [[Delete]] yêu cầu bạn xác nhận, sau đó xóa bài hát và tệp âm thanh của nó ngay lập tức.",
    "care": "Việc xóa không thể hoàn tác. Bài hát cũng sẽ biến mất khỏi aimusiclist.com. [[Xem trước]] chỉ xuất hiện đối với các bài hát có tệp âm thanh. Một bài hát trong album công khai không thể bị xóa nếu việc xóa đó làm giảm số lượng bài hát trong album xuống dưới 6 bài.",
    "like": "Giống như các công cụ trên quầy dành cho một đĩa nhạc: phát nhạc, sửa nhãn đĩa, hoặc mang nó ra khỏi cửa hàng vĩnh viễn."
  },
  "help.tracks.bulk_plays": {
    "t": "Vui chơi cũng được tính cho khách tham quan.",
    "what": "Tùy chọn cho phép khách truy cập xem số lần mỗi bài hát được phát đối với các bài hát đã được chọn hay không.",
    "when": "Sử dụng chức năng này để ẩn số lượt nghe của một vài bài hát (ví dụ: những bài hát mới), hoặc để hiển thị lại số lượt nghe.",
    "click": "Nhấn [[Hiện]] hoặc [[Ẩn]] để lưu ngay lập tức tất cả các bài hát đã chọn.",
    "care": "Khách truy cập chỉ thấy số lượt xem sau khi bạn bật tùy chọn **Hiển thị số lượt xem cho khách truy cập** trong Thông tin trang web. Hộp này chỉ xuất hiện khi trang web của bạn thống kê số lượt xem. Bạn luôn tự thấy các con số ở đây.",
    "like": "Giống như việc chọn những đĩa nhạc nào sẽ được dán nhãn nhỏ \"đã bán được 120 lần\" trong cửa hàng của bạn."
  },
  "help.tracks.bulk_plays_show": {
    "t": "Trình diễn",
    "what": "Cho phép khách truy cập xem số lượt phát của các bài hát đã được chọn.",
    "when": "Nhấn vào đó để xem các bài hát mà bạn đã ẩn số lượt xem và giờ muốn hiển thị lại.",
    "click": "Thao tác này được lưu ngay lập tức cho tất cả các bài hát đã chọn, và các lựa chọn sẽ bị xóa. Bạn có thể nhấn [[Ẩn]] bất cứ lúc nào để hoàn tác.",
    "care": "Không có gì hiển thị cho khách truy cập khi tùy chọn **Hiển thị số lượt phát cho khách truy cập** trong Thông tin trang web bị tắt.",
    "like": "Dán lại nhãn \"đã chơi bao nhiêu lần\" lên đĩa nhạc."
  },
  "help.tracks.bulk_plays_hide": {
    "t": "Trốn",
    "what": "Ẩn số lần phát của các bài hát đã được chọn khỏi khách truy cập.",
    "when": "Nhấn vào đó đối với những bài hát mà bạn không muốn hiển thị số lượt xem, chẳng hạn như những bài hát bạn vừa tải lên.",
    "click": "Thông tin này được lưu ngay lập tức cho tất cả các bài hát đã chọn và các lựa chọn sẽ bị xóa. Khi công tắc Thông tin trang web được bật, những bài hát đó sẽ hiển thị **Ẩn khỏi khách truy cập** bên dưới số thứ tự trong danh sách này. Bạn có thể nhấn [[Hiện]] bất cứ lúc nào để hoàn tác.",
    "care": "Chỉ có số lượt phát là bị ẩn đi. Các bài hát vẫn phát và số lượt phát vẫn được tính.",
    "like": "Gỡ bỏ nhãn \"đã chơi bao nhiêu lần\" khỏi một số đĩa nhạc. Những đĩa nhạc đó vẫn nằm trên kệ."
  },
  "help.tracks.plays_show": {
    "t": "Hiển thị số lượt phát bài hát này cho khách truy cập.",
    "what": "Điều này quyết định liệu khách truy cập có thấy số lần bài hát này được phát trên trang web của bạn hay không, ví dụ như \"1.234 lượt phát\".",
    "when": "Bỏ chọn tùy chọn này đối với những bài hát mà bạn muốn giữ kín số thứ tự.",
    "click": "Thông tin sẽ được lưu khi bạn nhấn [[Save track]]. Số lượng khách truy cập nhìn thấy được cập nhật mỗi ngày một lần.",
    "care": "Khách truy cập chỉ thấy số lượt xem nếu tùy chọn “Hiển thị số lượt xem cho khách truy cập” được bật trong Thông tin trang web. Khi bạn truy cập trang web của mình sau khi đăng nhập, bạn sẽ tự thấy tất cả các số liệu.",
    "like": "Nó giống như việc bạn chọn xem số lượng \"đã bán\" nhỏ có được hiển thị trên mục này trong cửa hàng của bạn hay không."
  },
  "help.site.plays": {
    "t": "Lượt chơi được tính",
    "what": "Cài đặt cho số liệu hiển thị số lần mỗi bài hát được phát trên trang web của bạn. Số lượt phát trên màn hình aimusiclist.com không nằm trong mục này.",
    "when": "Hãy đến đây để quyết định xem khách tham quan có được phép xem những con số đó hay không.",
    "click": "Tiêu đề này chỉ giải thích về thẻ. Nếu thẻ ghi rằng số lượt chơi sẽ xuất hiện sau khi trang web của bạn bắt đầu tính toán, điều đó có nghĩa là chức năng thống kê chưa được bật — tab Thống kê sẽ hướng dẫn cách bật chức năng này.",
    "care": "Những số liệu này chỉ dành cho trang web của bạn. Chúng không được gửi đến aimusiclist.com và không làm thay đổi thứ hạng của trang web đó.",
    "like": "Đó là bộ đếm nhỏ trên máy nghe nhạc của cửa hàng. Nó sẽ tăng lên mỗi khi có ai đó bật một đĩa nhạc trong cửa hàng của bạn."
  },
  "help.site.plays_switch": {
    "t": "Chương trình này được tính điểm cho khách tham quan.",
    "what": "Khi chức năng này được bật, mỗi bài hát trên trang web của bạn sẽ hiển thị một con số như \"1.234 lượt phát\". Ban đầu nó sẽ tắt.",
    "when": "Hãy bật tính năng này lên khi các con số hữu ích — ví dụ, để cho thấy những bài hát nào được mọi người yêu thích. Tắt tính năng này nếu bạn không muốn hiển thị chúng.",
    "click": "Ứng dụng sẽ lưu lại khoảnh khắc bạn nhấp chuột. Số liệu sẽ thay đổi một lần mỗi ngày, ngay lập tức khi bạn nhấn [[Làm mới ngay]] trong tab Thống kê. Số càng lớn nghĩa là thời gian nghe càng nhiều. Để ẩn số liệu chỉ cho một số bài hát nhất định, hãy sử dụng danh sách bài hát hoặc màn hình chỉnh sửa bài hát.",
    "care": "Khi bạn đăng nhập, bạn sẽ thấy số thứ tự của mọi bài hát trên trang web của mình, kể cả những bài bị ẩn. Chỉ bạn mới thấy chúng. Khách truy cập thì không.",
    "like": "Nó giống như việc đặt quầy bán máy nghe nhạc của cửa hàng ở vị trí mà khách hàng có thể nhìn thấy."
  },
  "help.site.likes": {
    "t": "Lượt thích",
    "what": "Cài đặt cho nút ♥ trên các bài hát của bạn. Khách truy cập nhấn vào nút này để bày tỏ sự yêu thích bài hát.",
    "when": "Đến đây để hiển thị hoặc ẩn nút đó trên toàn bộ trang web của bạn.",
    "click": "Tiêu đề này chỉ giải thích về thẻ. Công tắc bên dưới mới là thứ thực hiện chức năng. Nếu thẻ yêu cầu bật thống kê, thì lượt thích chưa thể được tính – hãy xem tab Thống kê.",
    "care": "Lượt thích chỉ được tính trên trang web của bạn. Chúng không được gửi đến aimusiclist.com và không làm thay đổi thứ hạng của trang web đó.",
    "like": "Đó là bảng dán hình trái tim trong cửa hàng của bạn, nơi khách hàng dán hình trái tim bên cạnh những đĩa nhạc mà họ thích."
  },
  "help.site.likes_switch": {
    "t": "Hiển thị nút thích",
    "what": "Hiển thị hoặc ẩn nút ♥ trên mỗi bài hát trên trang web của bạn. Ban đầu, nút này được bật.",
    "when": "Hãy bật tính năng này để xem khách truy cập yêu thích bài hát nào. Tắt nó đi nếu bạn không muốn có biểu tượng trái tim trên trang web của mình.",
    "click": "Nó lưu lại khoảnh khắc bạn nhấp chuột. Khách truy cập nhấn vào biểu tượng ♥ mà không cần đăng nhập, và có thể nhấn lại để thu nhỏ biểu tượng đó. Số lượt thích thay đổi mỗi ngày một lần. Số càng lớn càng tốt: càng nhiều người thích bài hát đó.",
    "care": "Nút này chỉ xuất hiện khi chức năng thống kê được bật. Tắt công tắc sẽ ẩn nút này đi nhưng số lượt thích đã tặng vẫn được giữ nguyên. Bật lại công tắc và số lượt thích sẽ hiện lại.",
    "like": "Nó giống như việc treo hoặc gỡ tấm bảng dán hình trái tim trong cửa hàng của bạn vậy."
  },
  "help.site.add": {
    "t": "Thêm vào aimusiclist",
    "what": "Cài đặt cho nút \"+ aimusiclist\". Với nút này, khách truy cập có thể thêm bài hát của bạn vào danh sách phát của riêng họ trên aimusiclist.com.",
    "when": "Đến đây để hiển thị hoặc ẩn nút đó trên trang web của bạn.",
    "click": "Tiêu đề này chỉ giải thích về thẻ. Công tắc bên dưới mới là thứ thực hiện chức năng. Nếu thẻ yêu cầu kết nối trước, điều đó có nghĩa là trang web của bạn chưa được liên kết với aimusiclist, vì vậy nút sẽ không hiển thị.",
    "like": "Đó là một nhãn \"đưa sản phẩm này ra thị trường lớn\" trên các bản ghi âm của bạn: khách hàng có thể thêm bài hát vào giỏ hàng của họ tại aimusiclist.com."
  },
  "help.site.add_switch": {
    "t": "Hiển thị nút \"+ aimusiclist\"",
    "what": "Hiển thị hoặc ẩn nút \"+ aimusiclist\" bên cạnh các bài hát và trong trình phát nhạc. Ban đầu, nút này được bật.",
    "when": "Hãy bật chức năng này để người nghe có thể lưu bài hát của bạn vào danh sách phát aimusiclist của họ và quay lại nghe sau. Tắt chức năng này nếu bạn không muốn sử dụng nút đó.",
    "click": "Nó lưu lại khoảnh khắc bạn nhấp chuột. Khi khách truy cập nhấn nút, một cửa sổ nhỏ aimusiclist sẽ mở ra (một tab mới trên điện thoại), và họ có thể chọn danh sách phát mà không cần đăng nhập.",
    "care": "Nút này chỉ hiển thị trên các bài hát được công khai trên aimusiclist và chỉ sau khi trang web của bạn được kết nối. Công tắc này không làm cho bất kỳ bài hát nào trở nên công khai hay riêng tư.",
    "like": "Nó giống như việc thêm một nút \"thêm vào giỏ hàng\" nhỏ vào những đĩa nhạc cũng được bán ở thị trường lớn."
  },
  "help.tracks.bulk_mood": {
    "t": "Thay đổi tâm trạng của các bài hát đã chọn",
    "what": "Thiết lập tâm trạng (ví dụ: Bình tĩnh hoặc Năng động) cho tất cả các bài hát đã chọn cùng một lúc. Nếu bạn chọn một mục khác trong **Những gì cần thay đổi**, nó sẽ thiết lập thông tin bổ sung đó thay vì thiết lập tâm trạng.",
    "when": "Hãy sử dụng tính năng này sau khi tải lên nhiều bài hát, hoặc khi bạn muốn sắp xếp các bài hát theo cảm xúc.",
    "click": "Sẽ không có gì xảy ra cho đến khi bạn nhấn [[Áp dụng]]. Sau đó, tất cả các bài hát đã chọn sẽ nhận cùng một giá trị và giá trị đó được lưu lại. Giá trị này sẽ hiển thị bên cạnh mỗi bài hát trên trang web của bạn và trên aimusiclist.com ngay sau đó.",
    "care": "Giá trị cũ của những bài hát đó sẽ được thay thế. Hộp này chỉ xuất hiện khi aimusiclist.com cung cấp thêm thông tin mà bạn có thể chọn từ danh sách.",
    "like": "Giống như việc dán nhãn cùng màu, ví dụ như \"màu trầm\", lên nhiều đĩa nhạc để người mua có thể tìm thấy chúng bằng cảm nhận."
  },
  "help.tracks.bulk_mood_field": {
    "t": "Cần thay đổi điều gì?",
    "what": "Chọn thông tin bổ sung bạn muốn thiết lập cho các bài hát đã chọn. Tâm trạng được chọn đầu tiên.",
    "when": "Hãy thay đổi cài đặt này khi bạn muốn thiết lập thứ gì đó khác ngoài chế độ \"tâm trạng\" cho nhiều bài hát cùng một lúc.",
    "click": "Việc chọn ở đây chỉ thay đổi các lựa chọn bên dưới. Không có gì được lưu lại cho đến khi bạn nhấn [[Áp dụng]].",
    "care": "Danh sách này được lấy từ aimusiclist.com và có thể được cập nhật theo thời gian. Chỉ những mục bạn chọn từ danh sách mới xuất hiện ở đây.",
    "like": "Giống như việc chọn loại nhãn nào bạn sẽ dán lên đĩa nhạc: nhãn theo tâm trạng, hay nhãn khác."
  },
  "help.tracks.bulk_mood_apply": {
    "t": "Áp dụng",
    "what": "Lưu giá trị bạn đã chọn cho mỗi bài hát đã được chọn.",
    "when": "Nhấn vào nút đó sau khi bạn chọn xong các bài hát và chọn giá trị.",
    "click": "Quá trình lưu diễn ra ngay lập tức và một tin nhắn ngắn sẽ thông báo cho bạn biết có bao nhiêu bài hát đã được thay đổi. Sau đó, các bước kiểm tra sẽ được hoàn tất. aimusiclist.com sẽ hiển thị kết quả ngay sau đó.",
    "care": "Nếu bạn chọn **— xóa (không có giá trị) —** hoặc không chọn gì trong mục nhiều lựa chọn, giá trị sẽ bị xóa khỏi những bài hát đó. Nếu không chọn bài hát nào, bạn chỉ nhận được lời nhắc chọn bài hát trước.",
    "like": "Đây là thời điểm bạn thực sự dán nhãn lên các đĩa nhạc."
  },
  "help.top.lang_fix": {
    "t": "Đặt ngay",
    "what": "Ứng dụng tự động chọn tất cả các bài hát chưa được gán ngôn ngữ, giúp bạn thiết lập tất cả cùng một lúc.",
    "when": "Nhấn vào đó từ thông báo ngôn ngữ bài hát.",
    "click": "Tab Bài hát sẽ mở ra chỉ với những bài hát đã được chọn sẵn. Hộp thoại để thay đổi nhiều bài hát cùng lúc sẽ hiện ra ở mục ngôn ngữ. Chọn ngôn ngữ ở đó và áp dụng. Mọi thứ sẽ không được lưu cho đến khi bạn thực hiện thao tác này.",
    "care": "Nếu các bài hát có ngôn ngữ khác nhau, hãy bỏ chọn một số bài và thực hiện theo vài vòng.",
    "like": "Nó giống như việc gom tất cả các bản ghi âm chưa dán nhãn lên một cái bàn, để bạn có thể dán nhãn cho chúng cùng một lúc."
  },
  "help.tracks.aml_box": {
    "t": "Cũng đăng tải trên aimusiclist.com",
    "what": "Điều này quyết định xem bài hát có được đăng tải lên aimusiclist.com hay không. Trang web của bạn luôn hiển thị bài hát đó trong cả hai trường hợp.",
    "when": "Hãy chọn tùy chọn này cho những bài hát bạn muốn cả thế giới cùng nghe và có cơ hội lọt vào Top 100. Bỏ chọn tùy chọn này cho những bài hát bạn chỉ muốn đăng trên trang web của mình.",
    "click": "Tệp sẽ được lưu khi bạn tải lên hoặc nhấn [[Save track]]. Các bài hát đã xuất bản sẽ hiển thị trên aimusiclist.com sau vài phút. Bạn có thể thay đổi nó sau trong danh sách bài hát.",
    "care": "Ít nhất 10 bài hát phải được giữ ở chế độ công khai (tất cả bài hát nếu bạn có ít hơn 10 bài). Vì vậy, một bài hát mới có thể được xuất bản ngay cả khi ô này không được chọn, và việc lưu bài hát khi ô này không được chọn có thể bị từ chối. Đối với một bài hát trong album công khai, ô này vẫn được chọn và việc bỏ chọn sẽ không có tác dụng gì cho đến khi album được chuyển sang chế độ riêng tư.",
    "like": "Đó là việc lựa chọn những bản thu âm nào từ cửa hàng của bạn cũng sẽ được bày bán trên thị trường lớn."
  },
  "help.tracks.upload": {
    "t": "Tải lên bài hát",
    "what": "Đây là nơi bạn đăng tải các bài hát mới lên trang web của mình. Bạn chọn các tệp âm thanh, điền thông tin vào một vài ô cho mỗi bài hát và nhấn nút tải lên.",
    "when": "Hãy sử dụng tính năng này mỗi khi bạn có bài hát mới. Bạn có thể gửi tối đa 20 bài hát cùng một lúc.",
    "click": "Việc chọn tập tin chỉ đưa chúng vào danh sách ở đây. Không có gì được lưu cho đến khi bạn nhấn [[Upload … song(s)]]. Sau đó, các bài hát sẽ được tải lên trang web của bạn ngay lập tức.",
    "care": "Các bài hát có thể ở định dạng MP3, M4A hoặc WAV. Mỗi bài phải có độ dài từ 30 giây đến 15 phút và dung lượng không quá 15 MB.",
    "like": "Đó là cửa sau của cửa hàng bạn, nơi những đĩa nhạc mới được đưa vào trước khi chúng được bày bán."
  },
  "help.tracks.choose": {
    "t": "Chọn tập tin",
    "what": "Thao tác này sẽ mở một cửa sổ để bạn chọn các tệp âm thanh từ máy tính. Bạn cũng có thể kéo thả các tệp vào ô này.",
    "when": "Sử dụng chức năng này để bắt đầu tải lên. Bạn có thể chọn nhiều tệp cùng một lúc.",
    "click": "Các tệp đã được thêm vào danh sách bên dưới. Hiện chưa có tệp nào được tải lên. Nếu tệp không đúng loại, nó sẽ hiển thị \"Thất bại\" ngay lập tức trong danh sách.",
    "care": "Tối đa 20 tập tin trong danh sách. Các tập tin thừa sẽ bị loại bỏ. Định dạng MP3 và M4A phải có dung lượng 15 MB trở xuống. Định dạng WAV sẽ được chuyển đổi thành MP3 320 kbps, và MP3 đó cũng phải có dung lượng 15 MB trở xuống (khoảng 6 phút rưỡi). Mỗi bài hát phải có độ dài từ 30 giây đến 15 phút.",
    "like": "Nó giống như việc xếp đĩa nhạc vào một cái giỏ. Chúng chưa được đặt trên kệ cho đến khi bạn lấy cái giỏ đó vào."
  },
  "help.tracks.name_tags": {
    "t": "Đọc thể loại, tâm trạng và ngôn ngữ từ ( ) trong tên tệp",
    "what": "Khi bật chức năng này, tên tệp như “Midnight Rain (R&B, Neo Soul; Romantic, en)” sẽ tự động điền vào các ô. Tiêu đề sẽ trở thành “Midnight Rain”.",
    "when": "Hãy bật tính năng này nếu bạn đặt tên bài hát bằng hướng dẫn của AI. Tắt nó đi nếu tên tệp của bạn có dấu ngoặc đơn ( ) là một phần của tiêu đề thực.",
    "click": "Danh sách sẽ được đọc lại ngay lập tức. Chỉ những tệp có ô bạn chưa thay đổi thủ công mới được điền lại. Trình duyệt này sẽ ghi nhớ lựa chọn của bạn.",
    "care": "Trước dấu chấm phẩy là các thể loại (thể loại đầu tiên là thể loại chính). Sau đó là tâm trạng và mã ngôn ngữ. Những từ mà hệ thống không biết sẽ bị bỏ qua và hiển thị bằng màu xám. Những mục như (Live) hoặc (feat. X) vẫn giữ nguyên trong tiêu đề.",
    "like": "Nó giống như một nhân viên bán hàng đọc nhãn dán trên từng hộp đĩa và ghi nhãn kệ cho bạn."
  },
  "help.tracks.common": {
    "t": "Áp dụng cho tất cả các bài hát trong bản tải lên này.",
    "what": "Các ô bên dưới tiêu đề này sẽ hiển thị thông tin của mọi bài hát bạn tải lên lần này: công cụ AI, nghệ sĩ, thông tin bổ sung và đăng tải trên aimusiclist.com.",
    "when": "Thiết lập chúng một lần trước khi nhấn nút tải lên.",
    "click": "Mọi thứ sẽ không được lưu cho đến khi bạn tải lên. Thể loại, tâm trạng và ngôn ngữ bài hát không có ở đây, vì bạn đã chọn chúng cho từng tệp ở trên.",
    "care": "Nếu một bài hát cần chỉnh sửa gì đó, hãy tải bài hát đó lên trước rồi mới thay đổi bằng mã [[Edit]] trong danh sách bài hát.",
    "like": "Nó giống như một nhãn dán bạn dán lên toàn bộ giỏ, chứ không phải lên từng đĩa nhạc riêng lẻ."
  },
  "help.tracks.artist": {
    "t": "Nghệ sĩ",
    "what": "Tên hiển thị là tên ca sĩ hoặc người sáng tác bài hát. Lựa chọn đầu tiên là tên trang web của bạn.",
    "when": "Hãy giữ nguyên tên trang web cho hầu hết các bài hát. Chọn một tên khác nếu bài hát thuộc về một nghệ sĩ khác mà bạn đang sử dụng.",
    "click": "Tệp sẽ được lưu khi bạn tải lên hoặc nhấn [[Save track]]. Nếu bạn giữ nguyên tên trang web và sau đó đổi tên trang web, bài hát sẽ được lưu theo tên mới.",
    "care": "Các tên khác được lấy từ mục “Nghệ sĩ khác” trong tab Thông tin trang web (tối đa 20 tên). Hãy thêm tên vào đó trước.",
    "like": "Đó là tên được in trên bìa đĩa, ngay bên dưới tiêu đề."
  },
  "help.tracks.up_start": {
    "t": "Tải lên … bài hát",
    "what": "Thao tác này sẽ gửi các tập tin đang chờ đến trang web của bạn từng tập một. Con số trên nút thể hiện số lượng bài hát đang chờ.",
    "when": "Nhấn vào đó khi mỗi tập tin đều có thể loại chính và ngôn ngữ bài hát.",
    "click": "Mỗi hàng hiển thị tiến độ của nó. Khi tất cả hoàn tất, các bài hát sẽ được đăng trên trang web của bạn, còn các bài hát công khai sẽ được chuyển đến aimusiclist.com sau khi hoàn thành.",
    "care": "Trang này sẽ bị khóa khi một ô cần thiết đang trống. Hãy giữ trang này mở cho đến khi quá trình hoàn tất, vì trang này đang thực hiện việc gửi dữ liệu. Nếu một số dữ liệu bị lỗi, những dữ liệu khác vẫn được lưu lại.",
    "like": "Nó đang mang giỏ vào cửa hàng và đặt từng đĩa nhạc lên kệ."
  },
  "help.tracks.up_retry": {
    "t": "Thử lại các bài hát bị lỗi",
    "what": "Thao tác này chỉ thử lại những bài hát bị lỗi, ví dụ như do mất kết nối.",
    "when": "Nút này chỉ xuất hiện khi một số bài hát không phát được. Hãy nhấn vào đó sau khi kiểm tra kết nối internet.",
    "click": "Các bài hát bị lỗi sẽ được gửi lại. Bài hát đã được đăng ký chỉ gửi lại âm thanh của nó, vì vậy nó không được tạo ra hai lần.",
    "care": "Tệp có định dạng không phù hợp sẽ không thể được thử lại. Nếu bài hát bị lỗi do độ dài hoặc kích thước, hãy sửa tệp, xóa dòng đó và thêm lại.",
    "like": "Nó đang quay lại để lấy những kỷ lục đã bị rơi ra khỏi giỏ trên đường đi."
  },
  "help.tracks.up_clear": {
    "t": "Xóa danh sách",
    "what": "Thao tác này sẽ xóa toàn bộ danh sách tải lên cùng một lúc.",
    "when": "Sử dụng chức năng này sau khi quá trình tải lên hoàn tất, hoặc khi bạn muốn bắt đầu lại từ đầu.",
    "click": "Tất cả các hàng sẽ biến mất ngay lập tức. Các bài hát đã được tải lên vẫn còn trên trang web của bạn.",
    "care": "Không thể nhấn nút này khi đang tải lên. Các ô bạn đã điền thông tin cho các tệp chưa được tải lên sẽ bị mất.",
    "like": "Nó đang dọn sạch giỏ hàng. Những đĩa nhạc đã có sẵn trên kệ vẫn ở đó."
  },
  "help.tracks.edit": {
    "t": "Biên tập",
    "what": "Biểu mẫu để chỉnh sửa một bài hát đã được tải lên. Biểu mẫu này sẽ mở ra khi bạn nhấn [[Edit]] trên một hàng trong danh sách bài hát.",
    "when": "Sử dụng chức năng này để sửa tiêu đề, thể loại, ngôn ngữ, nghệ sĩ và nhiều hơn nữa, hoặc để thêm tệp âm thanh mới.",
    "click": "Các thay đổi ở phần trên chỉ được lưu bằng mã [[Save track]]. Hình ảnh bài hát và lời bài hát ở phần dưới được lưu ngay khi bạn thay đổi chúng.",
    "care": "Trong khi biểu mẫu này đang mở, nó sẽ thay thế thẻ tải lên. Nhấn [[Hủy]] hoặc lưu để lấy lại thẻ tải lên.",
    "like": "Họ lấy một đĩa nhạc ra khỏi kệ để sửa nhãn."
  },
  "help.tracks.title": {
    "t": "Tiêu đề",
    "what": "Tên bài hát được hiển thị trên trang web của bạn và trên aimusiclist.com.",
    "when": "Hãy thay đổi nó khi tiêu đề từ tên tệp bị sai hoặc cần sửa.",
    "click": "Nó sẽ được lưu khi bạn nhấn [[Save track]]. Các bài hát công khai sẽ hiển thị tiêu đề mới trên aimusiclist.com sau một thời gian ngắn.",
    "care": "Tiêu đề không được để trống. Độ dài tối đa là 100 ký tự.",
    "like": "Đó chính là cái tên nổi tiếng được in trên bìa đĩa."
  },
  "help.tracks.replace_audio": {
    "t": "Thay thế âm thanh (tùy chọn)",
    "what": "Chọn một tệp âm thanh mới ở đây để thay thế âm thanh của bài hát. Tên bài hát, thể loại, hình ảnh và lời bài hát vẫn giữ nguyên.",
    "when": "Hãy sử dụng chức năng này khi bạn tạo ra phiên bản tốt hơn hoặc tải lên tệp tin sai.",
    "click": "Sẽ không có gì xảy ra cho đến khi bạn nhấn [[Save track]]. Sau đó, tệp âm thanh mới sẽ được gửi đi và thay thế âm thanh cũ.",
    "care": "Âm thanh cũ sẽ biến mất sau khi lưu, vì vậy hãy giữ một bản sao trên máy tính của bạn. Các quy tắc tương tự như khi tải lên: MP3, M4A hoặc WAV, từ 30 giây đến 15 phút, dung lượng không quá 15 MB.",
    "like": "Nó giống như việc đặt một kỷ lục mới vào cùng một chiếc vỏ hộp."
  },
  "help.tracks.save": {
    "t": "Lưu theo dõi",
    "what": "Thao tác này sẽ lưu lại tất cả những thay đổi bạn đã thực hiện trong biểu mẫu chỉnh sửa ở trên.",
    "when": "Nhấn vào nút đó khi bạn đã hoàn tất việc thay đổi tiêu đề, thể loại, ngôn ngữ và các ô khác.",
    "click": "Các thay đổi được lưu lại và biểu mẫu đóng lại. Trang web của bạn hiển thị chúng ngay lập tức, còn aimusiclist.com sẽ hiển thị sau một chút đối với các bài hát công khai. Nếu bạn chọn một tệp âm thanh mới, tệp đó cũng được gửi đi và tiến trình của nó sẽ được hiển thị.",
    "care": "Việc lưu có thể bị từ chối, ví dụ như khi không có thể loại chính, hoặc khi việc hủy đăng tải sẽ khiến số lượng bài hát công khai còn lại ít hơn 10. Khi đó, một thông báo màu đỏ sẽ giải thích lý do và không có gì được lưu lại.",
    "like": "Nó đặt đĩa nhạc trở lại kệ với nhãn đã được sửa lại."
  },
  "help.tracks.cancel": {
    "t": "Hủy bỏ",
    "what": "Thao tác này đóng biểu mẫu chỉnh sửa mà không lưu các ô phía trên.",
    "when": "Hãy sử dụng nó khi bạn mở nhầm bài hát hoặc thay đổi ý định.",
    "click": "Biểu mẫu sẽ đóng ngay lập tức và thẻ tải lên hiện lại. Những thay đổi bạn chưa lưu sẽ bị mất.",
    "care": "Hình ảnh bài hát và lời bài hát sẽ được lưu ngay khi bạn thay đổi chúng, vì vậy thao tác Hủy sẽ không hoàn tác những thay đổi đó.",
    "like": "Hành động này giống như đặt đĩa nhạc trở lại kệ mà không hề động đến nhãn đĩa."
  },
  "help.tracks.image": {
    "t": "Hình ảnh bài hát",
    "what": "Hình ảnh nhỏ của bài hát. Nó được hiển thị phía sau nút phát trên trang web của bạn và trên aimusiclist.com.",
    "when": "Hãy thay đổi tùy chọn này khi bạn muốn bài hát có hình ảnh riêng thay vì hình ảnh mặc định.",
    "click": "Các nút bên dưới hoạt động ngay lập tức. Chúng không cần chờ [[Save track]].",
    "care": "Mỗi bài hát đều có ảnh mặc định khi được tải lên. Ảnh của bạn được lưu dưới dạng hình vuông nhỏ (100×100), cộng thêm một hình vuông lớn hơn khi ảnh đủ lớn.",
    "like": "Đó là bìa đĩa mà mọi người nhìn thấy trước khi nhấn nút phát."
  },
  "help.tracks.image_lg": {
    "t": "Làm cho hình ảnh sắc nét trên các tấm thiệp lớn.",
    "what": "Ghi chú này có nghĩa là hình ảnh bài hát của bạn chỉ có phiên bản nhỏ. Trên các thẻ lớn của aimusiclist.com, chẳng hạn như đầu bảng xếp hạng Top 100, hình ảnh có thể bị mờ.",
    "when": "Nó hiển thị cho những bài hát có hình ảnh được tải lên trước khi có hình ảnh kích thước lớn, hoặc từ một bức ảnh quá nhỏ.",
    "click": "Nhấn [[Change image]] và tải ảnh lên lại. Thông báo sẽ biến mất khi ảnh có kích thước lớn được lưu.",
    "care": "Hãy sử dụng hình ảnh có chiều rộng ít nhất 200 pixel cho phần bạn muốn cắt. Hình ảnh nhỏ hơn không thể tạo ra phiên bản lớn hơn.",
    "like": "Nó giống như việc in lại bìa đĩa nhỏ thành kích thước áp phích để trưng bày trong cửa hàng."
  },
  "help.tracks.image_change": {
    "t": "Thay đổi hình ảnh",
    "what": "Tính năng này cho phép bạn chọn một bức ảnh từ máy tính của mình và sử dụng nó làm ảnh đại diện cho bài hát.",
    "when": "Hãy sử dụng nó để tạo nên hình ảnh riêng cho bài hát, hoặc để thay thế hình ảnh mặc định của bài hát.",
    "click": "Một cửa sổ sẽ hiện ra cho phép bạn cắt hoặc thu nhỏ hình ảnh. Khi bạn nhấn [[Save image]], hình ảnh sẽ được lưu ngay lập tức và hiển thị trên trang web của bạn. Các bài hát công khai sẽ hiển thị hình ảnh đó trên aimusiclist.com sau một thời gian ngắn.",
    "care": "Định dạng JPG, PNG, WebP hoặc GIF, dung lượng 2 MB trở xuống. Chỉ hình ảnh đã được thu nhỏ được tải lên, không phải tệp gốc của bạn.",
    "like": "Nó đang bổ sung một chiếc áo khoác mới vào hồ sơ."
  },
  "help.tracks.image_reset": {
    "t": "Trở lại hình ảnh mặc định",
    "what": "Thao tác này sẽ xóa ảnh bạn vừa tải lên và khôi phục ảnh mặc định của bài hát.",
    "when": "Hãy sử dụng nó khi bạn không còn muốn dùng ảnh của riêng mình cho bài hát này nữa.",
    "click": "Việc này diễn ra ngay lập tức, không cần hỏi ý kiến. Trang web của bạn hiển thị hình ảnh mặc định ngay lập tức.",
    "care": "Ảnh bạn vừa tải lên đã bị xóa, cả phiên bản lớn cũng vậy. Để sử dụng lại, vui lòng tải ảnh lên lại với mã [[Change image]].",
    "like": "Nó giống như việc bạn cởi chiếc áo khoác đặt may riêng và mặc lại chiếc áo khoác đồng phục thông thường của công ty."
  },
  "help.tracks.lyrics": {
    "t": "Lời bài hát (.srt)",
    "what": "Lời bài hát được thể hiện dưới dạng tệp .srt. Tệp .srt chứa mỗi dòng lời bài hát kèm theo nhịp điệu tương ứng.",
    "when": "Hãy thêm nó khi bạn muốn người nghe đọc theo. Nhiều công cụ AI âm nhạc có thể cung cấp cho bạn tệp .srt.",
    "click": "Tải lên hoặc xóa tác phẩm ngay lập tức, không cần [[Save track]]. Trên trang web của bạn, khách truy cập nhấn SRT vào bài hát để xem lời bài hát mà không có thời gian.",
    "care": "Tệp phải có đuôi .srt, được lưu dưới dạng văn bản UTF-8 và có dung lượng không quá 100 KB. Tệp phải có các dòng thời gian như 00:00:01,000 --> 00:00:04,000.",
    "like": "Đó là tờ lời bài hát được kẹp bên trong vỏ đĩa."
  },
  "help.tracks.lyrics_upload": {
    "t": "Tải lên tệp .srt / Thay thế tệp .srt",
    "what": "Chương trình này sẽ chọn một tập tin lời bài hát (.srt) từ máy tính của bạn cho bài hát này. Nếu bài hát đã có lời, chương trình sẽ hiển thị \"Thay thế\".",
    "when": "Sử dụng chức năng này để thêm lời bài hát hoặc sửa lời bài hát bằng một tệp mới.",
    "click": "Ngay khi bạn chọn tập tin, nó sẽ được kiểm tra và lưu lại. Lời bài hát cũ (nếu có) sẽ được thay thế. Một thông báo màu đỏ sẽ hiện lên nếu tập tin không đúng.",
    "care": "Chỉ chấp nhận các tệp .srt có dung lượng 100 KB trở xuống, được lưu dưới dạng UTF-8. Tệp không có dòng thời gian sẽ bị từ chối.",
    "like": "Nó đang nhét một tờ lời bài hát mới vào trong bìa."
  },
  "help.tracks.lyrics_view": {
    "t": "Xem tệp",
    "what": "Thao tác này sẽ mở tệp lời bài hát đã được lưu cho bài hát này.",
    "when": "Hãy dùng chức năng này để kiểm tra xem lời bài hát đã được lưu đúng chưa.",
    "click": "Tệp tin mở trong một tab mới, hiển thị đúng thời gian. Mọi thứ vẫn không thay đổi.",
    "like": "Đó là việc lấy tờ lời bài hát ra khỏi áo khoác để đọc."
  },
  "help.tracks.lyrics_delete": {
    "t": "Xóa lời bài hát",
    "what": "Thao tác này loại bỏ lời bài hát khỏi bài hát này.",
    "when": "Hãy sử dụng nó khi lời bài hát bị sai và bạn chưa có file tốt hơn, hoặc khi bài hát đó không nên có lời.",
    "click": "Một câu hỏi yêu cầu bạn xác nhận. Nếu bạn trả lời có, lời bài hát sẽ bị xóa ngay lập tức và dấu SRT cũng biến mất khỏi bài hát.",
    "care": "Không thể hoàn tác được. Để khôi phục lời bài hát, hãy tải lại tệp .srt.",
    "like": "Hành động đó là lấy tờ lời bài hát ra khỏi bìa và vứt đi."
  },
  "help.tracks.upguide": {
    "t": "Tự động điền thể loại và tâm trạng",
    "what": "Một hướng dẫn ngắn gọn giúp bạn không cần phải tự chọn thể loại, tâm trạng và ngôn ngữ cho từng bài hát. Bạn chỉ cần cung cấp một tập tin hướng dẫn cho một AI miễn phí, và nó sẽ đặt tên bài hát của bạn theo một cách đặc biệt.",
    "when": "Hãy đọc kỹ hướng dẫn này trước khi bạn sáng tác bài hát tiếp theo. Nó sẽ hữu ích nhất khi bạn tải lên nhiều bài hát cùng một lúc.",
    "click": "Biểu tượng ✕ thu gọn hướng dẫn thành một nút nhỏ, và nút đó sẽ mở lại hướng dẫn. Trình duyệt này ghi nhớ cách bạn đã mở hướng dẫn trước đó.",
    "care": "Hướng dẫn này không thay đổi cách bạn sáng tác nhạc. Nó chỉ quyết định tên bài hát mà thôi.",
    "like": "Nó giống như việc viết nhãn kệ lên hộp đĩa trước khi hàng đến, để bạn không phải sắp xếp chúng ở cửa."
  },
  "help.tracks.upguide_dl": {
    "t": "Tải xuống tệp hướng dẫn về Trí tuệ nhân tạo (AI).",
    "what": "Thao tác này tải xuống tệp hướng dẫn từ aimusiclist.com. Đây là tệp văn bản thuần túy được thiết kế để trí tuệ nhân tạo (AI) có thể đọc được.",
    "when": "Trước khi tạo bài hát, hãy đính kèm tệp này vào ChatGPT, Claude hoặc Gemini (gói miễn phí cũng được). Sau đó, yêu cầu AI đặt tên bài hát.",
    "click": "Tệp đã được lưu vào máy tính của bạn. Trang web của bạn không có gì thay đổi.",
    "care": "Hãy giữ nguyên tên tệp mà AI âm nhạc cung cấp cho bạn khi bạn tải bài hát xuống. Phần ( ) của tên là phần sẽ được điền vào các ô ở đây.",
    "like": "Đó là một tấm thẻ hướng dẫn công thức mà bạn đưa cho người phụ giúp, để các nhãn dán được dán giống nhau mỗi lần."
  },
  "help.tracks.uf_all": {
    "t": "Hãy sử dụng cách này cho tất cả các tệp.",
    "what": "Thao tác này sao chép giá trị của ô này sang ô tương ứng của mọi tập tin khác trong danh sách.",
    "when": "Sử dụng chức năng này khi nhiều bài hát có cùng thể loại, tâm trạng hoặc ngôn ngữ. Điền thông tin bài hát đầu tiên, sau đó nhấn vào đây.",
    "click": "Các tệp khác thay đổi ngay lập tức và một thông báo cho biết số lượng tệp đã thay đổi. Các tệp đã được tải lên trước đó sẽ không bị ảnh hưởng.",
    "care": "Thao tác này sẽ ghi đè lên các thiết lập bạn đã chọn cho các tập tin khác. Bạn vẫn có thể chỉnh sửa bất kỳ tập tin nào bằng tay sau đó.",
    "like": "Nó giống như con dấu cao su: bạn đóng cùng một nhãn lên tất cả các hộp cùng một lúc."
  },
  "help.tracks.uf_mood": {
    "t": "Tâm trạng",
    "what": "Cảm xúc của bài hát này, có thể là buồn hoặc lãng mạn. aimusiclist.com sẽ quyết định những tâm trạng nào được thể hiện trong danh sách.",
    "when": "Hãy chọn những tâm trạng phù hợp. Việc này là tùy chọn.",
    "click": "Các dấu tích của bạn chỉ được lưu cho tệp này và được lưu lại khi bạn tải lên. Khi bạn đạt đến giới hạn được hiển thị trong ngoặc đơn ( ), các ô khác sẽ bị khóa cho đến khi bạn bỏ chọn một ô.",
    "care": "Hộp này chỉ xuất hiện khi trang web của bạn đã nhận được danh sách trường từ aimusiclist.com.",
    "like": "Đó là một nhãn dán nhỏ có màu sắc trên đĩa nhạc, cho người nghe biết cảm giác của bài hát trước khi họ phát."
  },
  "help.tracks.uf_genre": {
    "t": "Thể loại",
    "what": "Bài hát này thuộc một thể loại chính và tối đa hai thể loại phụ.",
    "when": "Hãy chọn chúng cho từng tập tin. Thể loại chính phải được chọn.",
    "click": "Lựa chọn của bạn chỉ được lưu giữ cho tệp này. Nó được lưu lại khi bạn tải lên.",
    "care": "Thể loại chính sẽ quyết định bài hát nằm trong menu thể loại nào trên aimusiclist.com. Các thể loại phụ sẽ được hiển thị bên cạnh tiêu đề bài hát.",
    "like": "Đó là nhãn dán trên một đĩa nhạc: phần lớn ở trước, sau đó là hai ghi chú nhỏ."
  },
  "help.tracks.uf_lang": {
    "t": "Ngôn ngữ bài hát",
    "what": "Ngôn ngữ của lời bài hát này. Bạn cũng có thể thêm ngôn ngữ thứ hai.",
    "when": "Chọn tùy chọn này cho từng tệp. Nếu bài hát không có lời, hãy chọn “Nhạc không lời”.",
    "click": "Lựa chọn của bạn chỉ được lưu giữ cho tệp này và được lưu lại khi bạn tải lên.",
    "care": "Đây không phải là ngôn ngữ hiển thị trên màn hình trang web của bạn. \"Instrumental\" phải đứng riêng, vì vậy ô thứ hai sẽ bị khóa khi bạn chọn nó. aimusiclist.com sử dụng cách này cho bảng xếp hạng theo ngôn ngữ.",
    "like": "Đó là một ghi chú trên đĩa nhạc cho biết ca sĩ sử dụng ngôn ngữ nào."
  },
  "help.tracks.queue": {
    "t": "Các tệp cần tải lên",
    "what": "Đây là danh sách các tệp bạn đã chọn. Mỗi hàng hiển thị tiêu đề, tên tệp và kích thước, trạng thái của tệp và các ô dành cho bài hát đó.",
    "when": "Hãy kiểm tra trước khi tải lên. Mỗi bài hát cần có thể loại chính và ngôn ngữ bài hát.",
    "click": "Các thay đổi trong các ô sẽ được lưu giữ ở đây cho đến khi bạn tải lên. Thẻ màu xanh lá cây “Được điền từ tên tệp” có nghĩa là các ô đến từ ( ). “Chọn bên dưới” có nghĩa là bạn phải tự chọn chúng.",
    "care": "Các hàng có ô trống được đánh dấu màu đỏ. Trong quá trình tải lên, các ô sẽ gộp lại thành một dòng tổng kết và không thể thay đổi.",
    "like": "Đó là danh sách hàng hóa giao ở cửa sau. Bạn kiểm tra từng thùng trước khi đặt lên kệ."
  },
  "help.tracks.up_remove": {
    "t": "Di dời",
    "what": "Thao tác này sẽ xóa một tệp khỏi danh sách tải lên.",
    "when": "Hãy sử dụng chức năng này khi bạn chọn nhầm tệp hoặc tệp hiển thị \"Thất bại\" do loại hoặc độ dài của tệp.",
    "click": "Hàng đó biến mất ngay lập tức. Tệp trên máy tính của bạn không bị xóa.",
    "care": "Nút này sẽ bị ẩn trong khi quá trình tải lên đang diễn ra và đối với các tệp đã được tải lên. Để xóa một bài hát đã tải lên, hãy sử dụng danh sách bài hát.",
    "like": "Nó giống như việc lấy một đĩa nhạc ra khỏi giỏ trước khi bạn bước vào."
  },
  "help.tracks.up_need": {
    "t": "Hộp rỗng",
    "what": "Cảnh báo này liệt kê các tệp vẫn còn trống trường thể loại chính hoặc ngôn ngữ bài hát.",
    "when": "Nó tự động xuất hiện khi một ô cần thiết bị trống. Nút tải lên sẽ vẫn bị khóa cho đến khi nó biến mất.",
    "click": "Nhấn vào một dòng để nhảy thẳng đến ô trống đó. Cảnh báo sẽ biến mất khi tất cả các ô cần thiết đã được điền đầy đủ.",
    "care": "Chỉ có 12 ô trống đầu tiên được liệt kê. Con số ở trên cùng đếm tổng số ô.",
    "like": "Đó là một danh sách kiểm tra được dán trên cửa: hàng giao không thể vào cho đến khi tất cả các dòng đều được đánh dấu."
  },
  "help.tracks.up_after": {
    "t": "Kiểm tra tin mới trên aimusiclist.com",
    "what": "Một thông báo xuất hiện sau khi tải lên, cho bạn biết nơi tìm các bài hát mới được công khai của mình.",
    "when": "Tính năng này chỉ xuất hiện khi trang web của bạn được kết nối với aimusiclist.com và ít nhất một bài hát mới được công khai.",
    "click": "Liên kết này sẽ mở trang mới của aimusiclist.com trong một tab mới.",
    "care": "Trang aimusiclist.com cần vài phút để cập nhật bài hát mới. Nếu sau khoảng 5 phút mà vẫn chưa thấy bài hát, hãy kiểm tra lại sau.",
    "like": "Nó giống như việc bạn đi đến siêu thị lớn để xem đĩa nhạc mới của mình được bày bán ở đó vậy."
  },
  "help.tracks.pubmin": {
    "t": "Số lượng người dùng công khai: n · Số lượng người dùng tối thiểu: n",
    "what": "Số đầu tiên là số lượng bài hát của bạn hiện đang được công khai trên aimusiclist.com. Số thứ hai là số lượng tối thiểu mà bài hát phải luôn được công khai.",
    "when": "Hãy xem ở đây trước khi tắt bài hát để biết bạn còn có thể tắt bao nhiêu bài.",
    "click": "Đây chỉ là số đếm. Nó sẽ tự động thay đổi khi bạn bật hoặc tắt nhạc.",
    "care": "Quy tắc: nếu bạn có từ 10 bài hát trở lên, ít nhất 10 bài phải được để ở chế độ công khai. Nếu bạn có ít hơn 10 bài, tất cả đều được để ở chế độ công khai. Chỉ những bài hát có tệp âm thanh mới được tính. Một bài hát trong album công khai được tính là công khai. Một album được thiết lập để mở sau chỉ được tính một lần khi nó được mở. Nếu số đầu tiên nhỏ hơn số thứ hai, một hộp màu vàng sẽ yêu cầu bạn bật thêm bài hát. Bạn chọn bài hát nào. Việc xóa bài hát luôn được cho phép.",
    "like": "Sàn thương mại điện tử lớn (aimusiclist.com) yêu cầu mỗi cửa hàng phải giữ ít nhất 10 đĩa nhạc trên kệ. Điều này cho thấy hiện tại bạn đang có bao nhiêu đĩa."
  },
  "help.top.pubmin_go": {
    "t": "Chọn bài hát",
    "what": "Đưa bạn đến nơi bạn chọn những bài hát nào được công khai.",
    "when": "Nhấn vào đó từ thông báo \"chưa đủ bài hát công khai\".",
    "click": "Tab Tracks sẽ mở ra ở dòng 'Public · Minimum'. Bật công tắc công khai cho những bài hát bạn muốn. Mỗi lần bật công tắc sẽ được lưu lại ngay khi bạn nhấn.",
    "care": "Những bài hát không có âm thanh sẽ không được tính. Thông báo sẽ tự biến mất khi bạn đạt đến số lượng tối thiểu.",
    "like": "Nó giống như việc đi thẳng đến tủ trưng bày để đặt thêm vài đĩa nhạc vào đó vậy."
  },
  "help.tracks.pub_tip": {
    "t": "Mẹo chuyển đổi công khai",
    "what": "Một đoạn ghi chú ngắn cho thấy lần đầu tiên bạn sử dụng công tắc công cộng. Nó giải thích khi nào bài hát xuất hiện trên aimusiclist.com.",
    "when": "Hãy đọc nó một lần. Nó chỉ hiển thị sau khi bạn nhấn một nút lần đầu tiên trên trình duyệt này.",
    "click": "[[Không hiện lại]] sẽ ẩn nó vĩnh viễn trên trình duyệt này. [[Đóng]] chỉ ẩn nó cho đến khi bạn mở lại màn hình quản trị.",
    "care": "Việc ẩn ghi chú không làm thay đổi bất cứ điều gì về bài hát của bạn.",
    "like": "Giống như một tấm biển nhỏ bên cạnh kệ: \"Những thứ bạn đặt ở đây sẽ xuất hiện ở chợ lớn chỉ trong một hoặc hai phút\"."
  },
  "help.albums.form": {
    "t": "Album mới / Chỉnh sửa album",
    "what": "Đây là ô để bạn tạo album hoặc chỉnh sửa album. Album là tập hợp các bài hát của bạn được sắp xếp theo thứ tự bạn chọn, kèm theo tiêu đề, ảnh bìa và một đoạn giới thiệu ngắn.",
    "when": "Hãy sử dụng nó khi bạn muốn ghép các bài hát lại với nhau, giống như một album thực thụ. Các album sẽ xuất hiện trên trang web của bạn, và các album công khai cũng sẽ xuất hiện trên aimusiclist.com.",
    "click": "Không có dữ liệu nào trong ô này được lưu lại trong khi bạn điền vào. Tất cả dữ liệu sẽ được lưu cùng nhau khi bạn nhấn [[Save album]]. Nhấn [[Hủy]] sẽ đóng ô và xóa bỏ các thay đổi.",
    "care": "Một album có thể chứa tối đa 35 bài hát. Để được công khai, album cần có từ 6 đến 35 bài hát, và mỗi bài hát phải có tệp âm thanh riêng. Bạn có thể lưu album với ít bài hát hơn, nhưng album vẫn ở chế độ riêng tư.",
    "like": "Nó giống như việc tự tay làm một đĩa nhạc: bạn chọn bài hát, sắp xếp chúng theo thứ tự và gắn bìa đĩa lên."
  },
  "help.albums.title": {
    "t": "Tên album",
    "what": "Tên của album. Khách truy cập sẽ thấy tên này trên trang web của bạn và trên aimusiclist.com nếu album được công khai.",
    "when": "Hãy điền thông tin vào mục này mỗi khi bạn tạo album. Bạn không thể lưu album nếu không có tiêu đề.",
    "click": "Thông tin này sẽ được lưu khi bạn nhấn [[Save album]]. Bạn có thể thay đổi nó sau này bằng cách nhấn [[Edit]] trong danh sách album.",
    "care": "Tối đa 100 ký tự.",
    "like": "Đó chính là cái tên nổi tiếng được in ở mặt trước của bìa đĩa."
  },
  "help.albums.artist": {
    "t": "Nghệ sĩ",
    "what": "Đây là album của ai? Lựa chọn đầu tiên là tên trang web của bạn. Các lựa chọn khác là những tên bạn đã thêm vào mục Nghệ sĩ khác trong tab Thông tin trang web.",
    "when": "Hãy giữ nguyên tên trang web nếu bạn tạo album dưới tên thường dùng của mình. Chọn một tên khác nếu album là dự án phụ hoặc tên khác mà bạn sử dụng.",
    "click": "Thông tin sẽ được lưu khi bạn nhấn [[Save album]]. Tên này sẽ hiển thị bên dưới tiêu đề album trên trang web của bạn và trên aimusiclist.com.",
    "care": "Nếu bạn giữ nguyên lựa chọn đầu tiên, tên album sẽ theo tên trang web của bạn: khi bạn thay đổi tên trang web, tên nghệ sĩ của album cũng sẽ thay đổi theo. Không thể sử dụng tên của một ca sĩ nổi tiếng.",
    "like": "Đây là bảng tên của nhạc sĩ đã thu âm đĩa nhạc này trong cửa hàng của bạn."
  },
  "help.albums.desc": {
    "t": "Giới thiệu album",
    "what": "Vài câu giới thiệu về album. Thông tin này hiển thị ngay bên dưới tiêu đề album, trên trang web của bạn và trên aimusiclist.com.",
    "when": "Hãy viết phần này nếu bạn muốn cho người nghe biết album nói về điều gì, bạn đã thực hiện nó như thế nào, hoặc nó mang lại tâm trạng gì. Bạn cũng có thể để trống phần này.",
    "click": "Thông tin sẽ được lưu khi bạn nhấn [[Save album]]. Con số bên dưới ô hiển thị số ký tự còn lại.",
    "care": "Tối đa 200 ký tự. Khi đạt đến 200 ký tự, bạn không thể nhập thêm. Một biểu tượng cảm xúc được tính là một ký tự. Bạn có thể xuống dòng, nhưng chỉ được dùng cho từ ngữ thông thường (không được dùng hình ảnh hoặc liên kết).",
    "like": "Đó là dòng chữ ngắn được in ở mặt sau của vỏ đĩa."
  },
  "help.albums.pub": {
    "t": "Khi nào nên công bố?",
    "what": "Tại đây, bạn có thể chọn thời điểm phát hành album: ngay lập tức, hoặc vào ngày giờ do bạn lựa chọn.",
    "when": "Chọn [[Now]] cho hầu hết các album. Chọn ngày và giờ bạn muốn phát hành, ví dụ để thông báo cho người hâm mộ của bạn đầu tiên.",
    "click": "Lựa chọn của bạn sẽ được sử dụng khi bạn nhấn [[Save album]]. Album chỉ được công khai nếu có từ 6 đến 35 bài hát và tất cả đều có file âm thanh. Nếu không, nó sẽ được lưu ở chế độ riêng tư.",
    "care": "Đối với album mới, điều này diễn ra tự động. Khi bạn chỉnh sửa album, công tắc chế độ công khai của nó vẫn giữ nguyên. Bạn luôn có thể bật hoặc tắt nó sau này bằng công tắc trong danh sách album.",
    "like": "Nó giống như việc quyết định ngày phát hành một album mới: đưa nó lên kệ ngay hôm nay, hay vào một ngày bạn đánh dấu trên lịch."
  },
  "help.albums.pub_now": {
    "t": "Hiện nay",
    "what": "Album sẽ được công khai ngay khi bạn lưu lại.",
    "when": "Hãy chọn bài hát đó khi album đã hoàn thành và bạn muốn mọi người nghe nó ngay hôm nay.",
    "click": "Sau khi bạn nhấn [[Save album]], một album mới với 6 đến 35 bài hát (tất cả đều có file âm thanh) sẽ được công khai ngay lập tức. Album này sẽ hiển thị trên aimusiclist.com trong vòng một hoặc hai phút. Nếu bạn đã thiết lập ngày trước đó, việc chọn \"Ngay\" sẽ hủy ngày đó.",
    "care": "Nếu album có ít hơn 6 bài hát, hoặc một bài hát không có file âm thanh, nó sẽ được lưu ở chế độ riêng tư. Thông báo sau khi lưu sẽ cho bạn biết trường hợp nào đã xảy ra.",
    "like": "Bạn đưa bản thu âm mới lên kệ của thị trường lớn ngay khi nó hoàn thành."
  },
  "help.albums.pub_at": {
    "t": "Vào ngày giờ do tôi lựa chọn",
    "what": "Album sẽ tự động được phát hành vào ngày giờ bạn chọn.",
    "when": "Hãy sử dụng nó để lên kế hoạch cho ngày phát hành, ví dụ như 8 giờ tối thứ Sáu tuần sau, để bạn có thể thông báo thời gian cho người hâm mộ trước.",
    "click": "Một hộp thoại ngày giờ sẽ hiện ra. Thời gian hiển thị theo múi giờ của thiết bị này. Sau khi bạn nhấn [[Save album]], danh sách sẽ hiển thị thời gian dự kiến. Trước thời gian đó, album sẽ bị ẩn trên trang web của bạn và trên aimusiclist.com. Khoảng một phút sau thời gian đó, album sẽ xuất hiện ở cả hai nơi.",
    "care": "Hãy chọn một thời điểm muộn hơn hiện tại, và không quá 366 ngày trong tương lai. Trong thời gian chờ đợi, các bài hát trong album không thể được đặt ở chế độ riêng tư. Album vẫn cần từ 6 đến 35 bài hát có file âm thanh. Trên phiên bản PHP, quá trình này có thể mất đến khoảng 5 phút.",
    "like": "Nó giống như một cửa hàng đặt đồng hồ báo thức: khi chuông reo, đĩa nhạc mới sẽ tự động được đưa vào tủ trưng bày của cửa hàng."
  },
  "help.albums.cover": {
    "t": "Ảnh bìa",
    "what": "Ảnh vuông của album. Ảnh này hiển thị trên trang web của bạn và, đối với các album công khai, trên aimusiclist.com.",
    "when": "Hãy thêm bìa album bất cứ khi nào có thể. Album có bìa dễ nhận biết và ghi nhớ hơn. Việc này là tùy chọn, nên bạn có thể bỏ qua.",
    "click": "Nhấn [[Choose cover]] để chọn ảnh và điều chỉnh cho vừa với hình vuông. Ảnh bìa mới sẽ được lưu cùng với album khi bạn nhấn [[Save album]].",
    "care": "Ảnh được lưu dưới dạng hình nhỏ 200×200. Xóa album chỉ xóa ảnh bìa, chứ không xóa bài hát bên trong.",
    "like": "Đó chính là bìa đĩa: thứ đầu tiên mọi người nhìn thấy trên kệ."
  },
  "help.albums.pick": {
    "t": "Chọn các bài hát (theo thứ tự)",
    "what": "Ở đây bạn thêm bài hát vào album. Phía bên trái (trên điện thoại, phía trên) là các bài hát của bạn. Phía bên phải (trên điện thoại, phía dưới) là các bài hát đã có trong album này, theo thứ tự phát.",
    "when": "Hãy sử dụng nó khi bạn tạo album hoặc thay đổi bài hát trong album. Nó hoạt động tốt ngay cả khi bạn có hàng trăm bài hát.",
    "click": "Tìm các bài hát ở bên trái, chọn chúng và nhấn [[Add selected →]]. Chúng sẽ được chuyển đến cuối danh sách bên phải. Các bài hát trong album này sẽ biến mất khỏi danh sách bên trái. Không có gì được lưu cho đến khi bạn nhấn [[Save album]].",
    "care": "Tối đa 35 bài hát. Một bài hát có thể xuất hiện trong nhiều album; một thẻ nhỏ sẽ hiển thị tên của album khác. Những bài hát được đánh dấu 'Không có âm thanh' không có tệp âm thanh, và album có bài hát như vậy không thể được công khai.",
    "like": "Phía bên trái là kệ trong kho của bạn. Phía bên phải là đĩa nhạc bạn đang thu âm, từng bài một."
  },
  "help.albums.save": {
    "t": "Lưu album",
    "what": "Lưu trữ tất cả thông tin trong hộp album cùng một lúc: tiêu đề, nghệ sĩ, phần giới thiệu, thời gian phát hành, bìa và các bài hát.",
    "when": "Nhấn vào nút đó khi bạn hoàn tất việc tạo hoặc thay đổi album.",
    "click": "Một thông báo sẽ cho bạn biết điều gì đã xảy ra: công khai ngay bây giờ, công khai vào thời điểm bạn chọn, hoặc được lưu ở chế độ riêng tư vì cần từ 6 đến 35 bài hát có file âm thanh. Sau đó, album sẽ hiển thị trong danh sách bên dưới. Một album công khai sẽ được tải lên aimusiclist.com trong vòng một hoặc hai phút.",
    "care": "Cần có tiêu đề. Ngày và giờ được chọn phải muộn hơn thời điểm hiện tại. Một số thay đổi có thể bị từ chối, ví dụ như nếu chúng khiến số lượng bài hát công khai trên trang web của bạn giảm xuống dưới 10; thông báo màu đỏ sẽ giải thích lý do.",
    "like": "Nó giống như việc gói đĩa nhạc đã hoàn thiện và đặt lên kệ."
  },
  "help.albums.cancel": {
    "t": "Hủy bỏ",
    "what": "Đóng hộp album mà không lưu.",
    "when": "Hãy sử dụng nó khi bạn thay đổi ý định hoặc đã làm hỏng mọi thứ và muốn bắt đầu lại.",
    "click": "Chiếc hộp đóng lại ngay lập tức. Tất cả những gì bạn đã thay đổi kể từ khi mở hộp đều bị vứt bỏ, kể cả bìa album mới mà bạn đã chọn. Album vẫn giữ nguyên trạng thái như trước khi được lưu.",
    "care": "Không có câu hỏi \"Bạn có chắc không?\". Những thay đổi chưa được lưu sẽ bị mất.",
    "like": "Bạn đặt đĩa nhạc chưa hoàn thiện trở lại ngăn kéo mà không thay đổi đĩa nhạc đang nằm trên kệ."
  },
  "help.albums.new": {
    "t": "Album mới",
    "what": "Mở một hộp album trống để bạn có thể tạo album mới.",
    "when": "Nhấn vào nút này khi bạn muốn nhóm một số bài hát của mình vào một album.",
    "click": "Hộp album sẽ mở ra phía trên danh sách. Không có gì được tạo ra cho đến khi bạn nhấn [[Save album]] trong hộp đó.",
    "care": "Khi hộp album đang mở, nút này sẽ bị ẩn. Hãy lưu hoặc hủy trước.",
    "like": "Bạn lấy ra một vỏ đĩa mới, trống rỗng."
  },
  "help.albums.list": {
    "t": "Album của tôi",
    "what": "Tất cả các album bạn đã tạo. Mỗi album đều hiển thị trên trang web của bạn. Các album có bật tính năng này cũng hiển thị trên aimusiclist.com, và các bài hát trong đó cũng được công khai ở đó.",
    "when": "Hãy xem ở đây để biết album nào đang được công khai, để chỉnh sửa album hoặc xóa album.",
    "click": "Mỗi hàng đều có một công tắc công cộng, tiêu đề, số lượng bài hát và các nút [[Edit]] / [[Delete]].",
    "care": "Một album dự kiến ​​phát hành vào thời điểm sau này sẽ được ẩn đi ở mọi nơi, kể cả trên trang web của bạn, cho đến khi album đó được phát hành. Trong khi album đang ở chế độ công khai (hoặc đang chờ được công khai), bạn không thể đặt từng bài hát trong album ở chế độ riêng tư.",
    "like": "Đó là kệ đĩa trong cửa hàng của bạn. Công tắc quyết định những đĩa nhạc nào cũng được đưa ra thị trường lớn."
  },
  "help.albums.pub_switch": {
    "t": "Công khai trên aimusiclist",
    "what": "Công tắc ở mỗi hàng quyết định xem album đó có được hiển thị trên aimusiclist.com hay không. Dù sao thì album đó cũng sẽ có trên trang web của bạn.",
    "when": "Hãy bật tính năng này lên đối với những album bạn muốn nhiều người tìm thấy. Tắt tính năng này đi để xóa album khỏi aimusiclist.com.",
    "click": "Album sẽ được lưu ngay khi bạn nhấn nút. Bật: album và tất cả các bài hát sẽ xuất hiện trên aimusiclist.com trong vòng một hoặc hai phút. Tắt: chúng sẽ biến mất khỏi đó. Các bài hát bạn đã công khai từng bài một vẫn sẽ được công khai.",
    "care": "Nút chuyển đổi màu xám có nghĩa là album cần từ 6 đến 35 bài hát, tất cả đều có tệp âm thanh; chạm vào nút đó để xem lý do. Bạn có thể từ chối tắt tính năng này nếu số lượng bài hát được hiển thị công khai trên trang web của bạn ít hơn 10 bài.",
    "like": "Bạn quyết định những đĩa nhạc nào từ cửa hàng của mình cũng được bày bán trên kệ của thị trường lớn."
  },
  "help.albums.col_title": {
    "t": "Tên album",
    "what": "Cột này hiển thị tiêu đề của mỗi album và bên dưới là tên nghệ sĩ. Các thẻ nhỏ có thể xuất hiện bên cạnh.",
    "when": "Hãy xem ở đây để kiểm tra trạng thái của album một cách nhanh chóng.",
    "click": "'Sẽ được công khai...' nghĩa là album sẽ chờ đến ngày giờ bạn thiết lập. 'Cần 6–35 bài hát có âm thanh' nghĩa là album chưa thể được công khai: hãy thêm hoặc xóa bài hát, hoặc tải lên các tệp âm thanh còn thiếu.",
    "like": "Đó là nhãn dán ở bên cạnh mỗi đĩa nhạc trên kệ."
  },
  "help.albums.col_count": {
    "t": "Số lượng bài hát",
    "what": "Mỗi album có bao nhiêu bài hát?",
    "when": "Hãy xem ở đây để biết liệu một album có thể được công khai hay không. Album cần có từ 6 đến 35 bài hát.",
    "click": "Nếu số lượng nhỏ hơn 6, hãy nhấn [[Edit]] và thêm bài hát. 35 bài là số lượng tối đa mà một album có thể chứa.",
    "like": "Nó giống như việc đếm số bài hát được liệt kê ở mặt sau của đĩa nhạc."
  },
  "help.albums.row_buttons": {
    "t": "Chỉnh sửa / Xóa",
    "what": "Các nút ở cuối mỗi hàng. [[Edit]] mở album để thay đổi nội dung. [[Delete]] xóa album.",
    "when": "Sử dụng nút Chỉnh sửa để thay đổi bài hát, thứ tự, tiêu đề, ảnh bìa hoặc thời gian phát hành. Sử dụng nút Xóa khi bạn không muốn giữ album đó nữa.",
    "click": "Nút Chỉnh sửa sẽ mở hộp album ở đầu trang. Nút Xóa sẽ hỏi bạn trước, sau đó sẽ xóa album và ảnh bìa ngay lập tức. Các bài hát vẫn còn trên trang web của bạn.",
    "care": "Việc xóa không thể hoàn tác. Bạn có thể từ chối xóa một album công khai nếu số lượng bài hát còn lại trên trang web của bạn ít hơn 10 bài.",
    "like": "Chỉnh sửa là lấy một đĩa nhạc ra khỏi kệ để sửa chữa. Xóa là vứt bỏ bìa đĩa và danh sách bài hát; các bài hát được trả lại kho."
  },
  "help.albums.pick_search": {
    "t": "Tìm kiếm tiêu đề bài hát",
    "what": "Nhập một phần tiêu đề bài hát để chỉ hiển thị những bài hát phù hợp ở bên trái.",
    "when": "Hãy sử dụng chức năng này khi bạn có nhiều bài hát và biết tên bài hát mình muốn tìm.",
    "click": "Danh sách sẽ thay đổi khi bạn gõ. Chữ to hay chữ thường đều không quan trọng. Xóa nội dung trong ô để xem lại tất cả bài hát.",
    "care": "Nó chỉ xem xét tiêu đề bài hát, không xem xét nghệ sĩ hay lời bài hát.",
    "like": "Nó giống như việc hỏi người quản lý kho hàng, \"Bài hát này tên là gì...?\""
  },
  "help.albums.pick_genre": {
    "t": "Thể loại",
    "what": "Chỉ hiển thị các bài hát thuộc một thể loại chính ở bên trái. Danh sách chỉ bao gồm các thể loại chính mà bài hát của bạn sử dụng.",
    "when": "Hãy sử dụng tùy chọn này khi bạn muốn một album chỉ có một thể loại nhạc, ví dụ như chỉ toàn nhạc R&B.",
    "click": "Danh sách bên trái thay đổi ngay lập tức. Một bài hát sẽ hiển thị thể loại của nó, hoặc một thể loại chi tiết hơn nằm bên dưới. Chọn Tất cả thể loại để xem lại toàn bộ.",
    "care": "Tính năng này chỉ giúp bạn tìm bài hát, chứ không thay đổi thể loại bài hát.",
    "like": "Nó giống như việc bạn đi đến một lối đi trong nhà kho, lối đi dành riêng cho nhạc R&B."
  },
  "help.albums.pick_sort": {
    "t": "Đặt hàng",
    "what": "Thay đổi thứ tự hiển thị bài hát ở bên trái: bài mới tải lên trước, bài cũ nhất trước hoặc theo tiêu đề.",
    "when": "Sử dụng \"Mới nhất\" để tìm những bài hát bạn vừa tạo. Sử dụng \"Tiêu đề A–Z\" khi tìm kiếm tên.",
    "click": "Danh sách bên trái được sắp xếp lại ngay lập tức. Việc này không thay đổi thứ tự bên trong album; thứ tự đó được thiết lập ở phía bên phải.",
    "like": "Nó giống như việc sắp xếp các kệ hàng trong kho theo ngày tháng hoặc theo tên sản phẩm."
  },
  "help.albums.pick_all": {
    "t": "Chọn tất cả các tùy chọn được hiển thị",
    "what": "Kiểm tra tất cả các bài hát phù hợp với từ khóa tìm kiếm và thể loại bạn vừa nhập. Con số hiển thị số lượng bài hát đã tìm được.",
    "when": "Hãy sử dụng chức năng này sau khi bạn đã thu hẹp danh sách, ví dụ như để chọn tất cả các bài hát thuộc cùng một thể loại cùng một lúc.",
    "click": "Tất cả các bài hát phù hợp đều được chọn, kể cả những bài ở cuối danh sách. Nhấn lại lần nữa (lúc này sẽ hiện chữ \"Xóa lựa chọn\") để bỏ chọn chúng. Các bài hát chưa được thêm vào; nhấn [[Add selected →]] tiếp theo.",
    "care": "Một album chứa tối đa 35 bài hát. Nếu bạn chọn nhiều hơn, chỉ những bài hát đầu tiên phù hợp mới được thêm vào.",
    "like": "Nó giống như việc nói \"cho tôi tất cả mọi thứ trên kệ này\" thay vì chỉ vào từng món đồ."
  },
  "help.albums.pick_add": {
    "t": "Thêm mục đã chọn →",
    "what": "Thêm các bài hát bạn đã chọn vào album. Con số hiển thị số lượng bài hát đã được chọn.",
    "when": "Nhấn vào đó sau khi bạn đã chọn xong các bài hát ở bên trái.",
    "click": "Các bài hát đã chọn sẽ được chuyển đến cuối danh sách bên phải, theo thứ tự hiển thị trong danh sách bên trái. Chúng sẽ biến mất khỏi danh sách bên trái. Bạn có thể thay đổi thứ tự ở bên phải. Album chỉ được lưu khi bạn nhấn [[Save album]].",
    "care": "Nút sẽ có màu xám khi chưa có tùy chọn nào được chọn hoặc album đã có đủ 35 bài hát. Nếu không đủ số lượng bài hát, một thông báo sẽ cho bạn biết có bao nhiêu bài bị thiếu.",
    "like": "Bạn mang những bài hát mình đã chọn từ kệ kho về và thu âm chúng."
  },
  "help.albums.pick_recent": {
    "t": "Thêm bài viết mới nhất của tôi",
    "what": "Ứng dụng này thêm các bài hát bạn tải lên gần đây nhất chỉ trong một bước. Bạn chọn số lượng trong ô số nhỏ (từ 1 đến 35, ban đầu là 10).",
    "when": "Hãy sử dụng tính năng này khi bạn vừa tải lên một loạt bài hát mới và muốn gom tất cả chúng vào cùng một album.",
    "click": "Những bài hát mới nhất có file âm thanh và chưa có trong album này sẽ được xếp ở cuối danh sách bên phải, theo thứ tự mới nhất trước. Các lựa chọn tìm kiếm và thể loại của bạn ở bên trái không có tác dụng ở đây. Không có gì được lưu cho đến khi đạt đến mã [[Save album]].",
    "care": "Các bài hát không có file âm thanh sẽ bị bỏ qua. Album vẫn chỉ chứa tối đa 35 bài hát. Nút sẽ chuyển sang màu xám khi album đầy.",
    "like": "Nó giống như nói \"Hãy đưa cho tôi 10 đĩa nhạc cuối cùng vừa được nhập kho\"."
  },
  "help.albums.picked": {
    "t": "Trong album này",
    "what": "Các bài hát trong album này, theo thứ tự phát. Bên cạnh đó là số lượng bài hát. Số bài hát sẽ chuyển sang màu đỏ nếu không nằm trong khoảng từ 6 đến 35.",
    "when": "Sử dụng nó để kiểm tra các bài hát và sắp xếp thứ tự phát.",
    "click": "Nhấn giữ ⠿ và kéo bài hát lên hoặc xuống, hoặc sử dụng ▲ ▼. ✕ xóa bài hát khỏi album (bài hát vẫn còn trên trang của bạn). Các thay đổi sẽ được lưu khi bạn nhấn [[Save album]].",
    "care": "Một album công khai cần từ 6 đến 35 bài hát, tất cả đều có file âm thanh. Bài hát được đánh dấu 'Không có âm thanh' sẽ ngăn chặn việc xuất bản. Nếu một album đã được công khai, bạn không thể lưu album đó nếu có ít hơn 6 bài hát.",
    "like": "Đây là danh sách các bài hát ở mặt sau của đĩa nhạc: bài 1, bài 2, bài 3…"
  },
  "help.albums.pick_clear": {
    "t": "Xóa tất cả",
    "what": "Ứng dụng này sẽ xóa toàn bộ bài hát trong album cùng một lúc, để bạn có thể bắt đầu chọn bài lại từ đầu.",
    "when": "Hãy sử dụng chức năng này khi bạn muốn bắt đầu lại danh sách bài hát.",
    "click": "Nó sẽ hỏi bạn trước. Sau đó, danh sách bên phải sẽ trống và các bài hát sẽ quay lại danh sách bên trái. Không có gì được lưu cho đến khi nhấn [[Save album]]; hãy nhấn [[Hủy]] để giữ nguyên album như cũ.",
    "care": "Các bài hát không bị xóa. Chúng vẫn còn trên trang web của bạn.",
    "like": "Bạn lấy tất cả các bài hát ra khỏi đĩa và đặt chúng trở lại kệ trong kho."
  },
  "help.albums.cover_pick": {
    "t": "Chọn bìa",
    "what": "Ứng dụng sẽ mở ảnh trong thiết bị của bạn để bạn chọn ảnh bìa. Sau đó, một cửa sổ nhỏ sẽ hiện ra cho phép bạn chọn phần nào muốn giữ lại.",
    "when": "Nhấn vào đó để thêm bìa hoặc thay đổi bìa hiện có.",
    "click": "Sau khi bạn nhấn [[Save image]] trong cửa sổ, ảnh bìa mới sẽ hiển thị ở đây với dòng chữ 'Ảnh bìa mới'. Ảnh bìa chưa được lưu. Nó sẽ được lưu khi bạn nhấn [[Save album]]. Nhấn [[Hủy]] bên cạnh để thả ảnh bìa mới.",
    "care": "Bạn có thể chọn ảnh định dạng JPG, PNG, WebP hoặc GIF có dung lượng 2 MB trở xuống. Ảnh gốc của bạn sẽ không được tải lên, chỉ có bản sao nhỏ được tải lên.",
    "like": "Bạn chọn một bức ảnh và cắt tỉa sao cho vừa với bìa đĩa."
  },
  "help.albums.cover_delete": {
    "t": "Tháo nắp đậy",
    "what": "Gỡ bỏ ảnh bìa của album này. Album và các bài hát trong đó vẫn được giữ nguyên.",
    "when": "Hãy sử dụng chức năng này khi bạn không còn muốn giữ ảnh đó trong album nữa, ví dụ như trong quá trình tạo album mới.",
    "click": "Nó sẽ hỏi bạn trước. Nếu bạn trả lời có, tấm che sẽ được gỡ bỏ ngay lập tức, mà không cần nhấn [[Save album]]. Khách truy cập sau đó sẽ thấy một ô vuông trống.",
    "care": "Thao tác này không thể hoàn tác. Để khôi phục ảnh bìa, hãy chọn lại ảnh.",
    "like": "Bạn tháo lớp vỏ ngoài của đĩa nhạc. Đĩa nhạc bên trong vẫn còn đó."
  },
  "help.skins.use": {
    "t": "Hãy sử dụng giao diện này",
    "what": "Áp dụng giao diện đã cài đặt này cho trang web của bạn. Giao diện bạn đã sử dụng trước đó sẽ được ghi nhớ.",
    "when": "Khi bạn muốn khách truy cập xem trang web của bạn với giao diện này.",
    "click": "Giao diện được lưu ngay lập tức. Khách truy cập sẽ thấy giao diện mới trong khoảng 30 giây. Để hoàn tác, hãy nhấn [[Back to the previous skin]] hoặc chọn giao diện khác.",
    "care": "Giao diện đang sử dụng không có nút nào ở đây, vì nó đã được bật sẵn. Danh sách bài hát và menu của bạn không thay đổi.",
    "like": "Giống như việc bạn lấy một bộ quần áo từ tủ đồ của mình ra và trưng bày trên cửa hàng vậy."
  },
  "help.skins.update": {
    "t": "Cập nhật",
    "what": "Nhà sản xuất giao diện thư viện ảnh mà bạn đã cài đặt vừa phát hành phiên bản mới. Nút này sẽ tải phiên bản đó. Bạn sẽ thấy nó bên cạnh biểu tượng **Phiên bản mới**.",
    "when": "Khi bạn muốn có thiết kế mới nhất của giao diện đó, với các bản sửa lỗi.",
    "click": "Phiên bản mới được kiểm tra và thay thế phiên bản cũ. Việc này không thay đổi giao diện mà trang web của bạn đang sử dụng. Nếu giao diện này đang được sử dụng, khách truy cập sẽ thấy phiên bản mới trong khoảng 30 giây.",
    "care": "Đây chỉ là thiết kế giao diện. Nó hoàn toàn tách biệt với việc cập nhật trang web của bạn. Các giao diện do bạn tự tải lên sẽ không bao giờ hiển thị nút này.",
    "like": "Giống như người thợ may gửi cho bạn một bản sao vừa vặn hơn của bộ trang phục bạn đã có."
  },
  "help.skins.download": {
    "t": "Tải xuống (để chỉnh sửa)",
    "what": "Lưu bản sao của giao diện có sẵn (Sáng hoặc Tối) vào máy tính của bạn. Bạn có thể sử dụng nó làm điểm khởi đầu cho giao diện của riêng mình.",
    "when": "Khi bạn muốn tự tạo giao diện riêng, hãy đưa bản sao cho một trợ lý ảo AI miễn phí (ChatGPT, Claude) và yêu cầu nó thay đổi màu sắc hoặc bố cục.",
    "click": "Trình duyệt của bạn lưu tệp giao diện. Không có gì trên trang web của bạn thay đổi.",
    "care": "Bạn không thể thay đổi trực tiếp các giao diện mặc định. Hãy tải bản sao đã chỉnh sửa của bạn lên với tên mới trong mục **Tải lên giao diện**, sau đó nhấn [[Use this skin]].",
    "like": "Giống như việc mang về nhà một mẫu may để bạn có thể tự may trang phục cho mình."
  },
  "help.skins.delete": {
    "t": "Xóa bỏ",
    "what": "Xóa giao diện bạn đã tải lên hoặc thêm từ thư viện. Các giao diện tích hợp sẵn (Sáng, Tối) không thể bị xóa, vì vậy chúng sẽ hiển thị [[Download (to edit)]] thay thế.",
    "when": "Khi bạn không còn cần đến một skin nào nữa, hoặc bạn đã có đủ 20 skin và muốn có chỗ trống cho một skin mới.",
    "click": "Bạn được yêu cầu xác nhận. Sau đó, giao diện sẽ biến mất ngay lập tức. Nếu đó là giao diện đang được sử dụng, trang web của bạn sẽ chuyển sang giao diện Sáng.",
    "care": "Thao tác này không thể hoàn tác. Bạn có thể thêm lại giao diện thư viện từ mục **Duyệt**. Giao diện bạn tự tải lên sẽ bị mất trừ khi bạn lưu giữ tệp tin đó.",
    "like": "Giống như việc vứt bỏ một bộ quần áo ra khỏi tủ. Hãy giữ lại mẫu thiết kế của riêng bạn nếu bạn có thể muốn dùng lại nó trong tương lai."
  },
  "help.skins.revert": {
    "t": "Trở lại giao diện trước đó",
    "what": "Khôi phục lại giao diện bạn vừa sử dụng trước đó. Nút này hiển thị tên của giao diện đó.",
    "when": "Khi bạn thử một giao diện mới nhưng lại thích giao diện cũ hơn.",
    "click": "Ảnh được lưu ngay lập tức và khách truy cập sẽ thấy trong khoảng 30 giây. Ảnh bạn vừa chụp sẽ trở thành ảnh cũ, vì vậy nhấn lại sẽ quay lại ảnh cũ.",
    "care": "Chỉ có bước lùi lại một bước được ghi nhớ. Nếu giao diện trước đó bị xóa, nút này sẽ biến mất.",
    "like": "Giống như cởi bỏ bộ quần áo mới và mặc lại bộ quần áo cũ."
  },
  "help.skins.title": {
    "t": "Trang phục",
    "what": "Giao diện (skin) là \"trang phục\" mà trang web của bạn khoác lên: màu sắc, phông chữ và bố cục. Việc thay đổi giao diện không bao giờ ảnh hưởng đến các bài hát, album hoặc cài đặt của bạn.",
    "when": "Hãy đến đây khi bạn muốn trang web của mình trông khác biệt, hoặc khi giao diện bạn đang sử dụng có phiên bản mới.",
    "click": "Đây chỉ là tiêu đề. Các nút bên dưới mới là phần quan trọng. Trang web của bạn luôn có hai giao diện mặc định, **Sáng** và **Tối**, và bạn có thể thêm tối đa 20 giao diện khác nữa.",
    "care": "Khách truy cập sẽ thấy giao diện mới trong khoảng 30 giây. Nếu bạn xóa giao diện đang sử dụng, trang web của bạn sẽ quay lại giao diện Light.",
    "like": "Nó giống như việc thay đổi màu sơn và kệ trưng bày trong cửa hàng của bạn. Những đĩa nhạc trên kệ vẫn giữ nguyên như cũ."
  },
  "help.skins.view": {
    "t": "Đã cài đặt / Duyệt",
    "what": "Có hai chế độ xem của tab Giao diện. **Đã cài đặt** hiển thị các giao diện mà trang web của bạn đã có. **Duyệt** hiển thị thư viện giao diện, nơi bạn có thể thử và thêm các giao diện do người khác tạo ra.",
    "when": "Sử dụng mục Đã cài đặt để chuyển đổi, cập nhật hoặc xóa giao diện hiện có và để tải lên giao diện của riêng bạn. Sử dụng mục Duyệt để tìm giao diện mới.",
    "click": "Nó chỉ thay đổi giao diện. Không có gì trên trang web của bạn thay đổi. Lần đầu tiên bạn mở Browse, danh sách giao diện sẽ được tải.",
    "like": "Tủ quần áo của riêng bạn đã được lắp đặt sẵn. Cửa hàng quần áo bên cạnh là nơi bạn có thể tham khảo."
  },
  "help.skins.upload": {
    "t": "Tải lên một giao diện",
    "what": "Thêm giao diện do chính bạn tạo ra. Giao diện là một tệp trang web (.html) tuân theo hướng dẫn về giao diện. Một phần mềm trò chuyện AI miễn phí có thể tạo giao diện cho bạn.",
    "when": "Khi bạn muốn một giao diện mà không có giao diện thư viện nào có. Một khởi đầu tốt là sử dụng giao diện tích hợp sẵn từ [[Download (to edit)]].",
    "click": "Điền tên và tên tệp, sau đó nhấn [[Upload skin]]. Giao diện sẽ được thêm vào danh sách của bạn nhưng chưa được áp dụng. Nhấn [[Use this skin]] để áp dụng.",
    "care": "Tệp tin sẽ được kiểm tra trước. Kích thước tệp phải không quá 100 KB, giữ nguyên vị trí menu, nội dung và trình phát mỗi vị trí một lần, và không được che khuất dòng chữ **Powered by aimusiclist.com**. Không được phép sao chép mã và hình ảnh từ các trang web khác.",
    "like": "Giống như việc tự may quần áo và treo chúng trong tủ quần áo của mình vậy."
  },
  "help.skins.upload_name": {
    "t": "Tên da",
    "what": "Tên loại da của bạn trong danh sách da. Sử dụng các chữ cái thường từ 1 đến 32 (a–z), số, dấu gạch ngang (-) hoặc dấu gạch dưới (_).",
    "when": "Hãy nhập tên trước khi tải lên. Chọn một cái tên ngắn gọn mà bạn dễ nhận biết, ví dụ như my-blue.",
    "click": "Mọi thứ sẽ không được lưu cho đến khi bạn nhấn [[Upload skin]].",
    "care": "Không được phép viết hoa và sử dụng khoảng trắng. Các chế độ **sáng** và **tối** đã được các giao diện có sẵn sử dụng. Nếu bạn sử dụng tên đã có, giao diện cũ sẽ bị thay thế. Nếu giao diện đang sử dụng bị thay thế, khách truy cập sẽ thấy giao diện mới trong khoảng 30 giây.",
    "like": "Giống như tấm thẻ tên bạn may vào trang phục vậy."
  },
  "help.skins.upload_file": {
    "t": "Tệp giao diện",
    "what": "Tệp giao diện trên máy tính của bạn. Tệp này phải là một tập tin .html duy nhất có dung lượng không quá 100 KB.",
    "when": "Hãy chọn tùy chọn này sau khi bạn đã tạo hoặc chỉnh sửa giao diện, ví dụ như với tính năng trò chuyện AI miễn phí.",
    "click": "Nó chỉ chọn tập tin. Không có gì được gửi đi cho đến khi bạn nhấn [[Upload skin]].",
    "care": "Chỉ được phép tải một tập tin duy nhất. Hình ảnh bên trong giao diện không được lấy từ các trang web khác. Nếu tập tin quá lớn, hãy yêu cầu AI thu nhỏ kích thước.",
    "like": "Giống như việc cầm bộ trang phục đã mặc xong lên trước khi treo vào tủ quần áo."
  },
  "help.skins.upload_btn": {
    "t": "Tải lên giao diện",
    "what": "Ứng dụng gửi tệp giao diện của bạn và kiểm tra nó.",
    "when": "Sau khi bạn nhập tên và chọn tệp.",
    "click": "Nếu có lỗi, một thông báo màu đỏ sẽ cho biết cần sửa gì và không có gì được lưu lại. Nếu thành công, bạn sẽ thấy **Đã lưu** và giao diện sẽ xuất hiện trong danh sách của bạn. Giao diện sẽ không được đưa lên trang web của bạn cho đến khi bạn nhấn [[Use this skin]].",
    "care": "Bạn có thể giữ tối đa 20 giao diện ngoài giao diện Sáng và Tối. Hãy xóa bớt một giao diện trước nếu bộ nhớ đã đầy. Việc tải lên đè lên tên giao diện trong thư viện sẽ biến nó thành giao diện của riêng bạn và ngừng cập nhật phiên bản mới.",
    "like": "Giống như một người kiểm tra hàng hóa trước khi đưa vào tủ quần áo."
  },
  "help.skins.gallery": {
    "t": "Bộ sưu tập da",
    "what": "Một kệ chung trưng bày các mẫu giao diện đã được thiết kế sẵn. Mỗi thẻ hiển thị hình ảnh, nhà sản xuất, độ sáng (sáng) hay tối (tối) và phiên bản. Các mẫu mới nhất được hiển thị trước.",
    "when": "Khi bạn muốn có diện mạo mới chỉ với một cú nhấp chuột mà không cần thực hiện bất kỳ thay đổi nào.",
    "click": "Nhấn vào hình ảnh hoặc [[Xem trước]] để thử giao diện trên trang web của bạn. Nhấn [[Áp dụng]] để thêm và áp dụng giao diện đó.",
    "care": "Nếu một thẻ hiển thị **Cập nhật trang web của bạn để sử dụng giao diện này.**, thì giao diện đó cần phiên bản mới hơn của trang web của bạn trước khi sử dụng.",
    "like": "Giống như một cửa hàng quần áo nơi bạn có thể thử đồ trước khi mua về nhà."
  },
  "help.skins.gal_reload": {
    "t": "Làm cho khỏe lại",
    "what": "Tải lại danh sách bộ sưu tập giao diện.",
    "when": "Khi có giao diện mới xuất hiện hoặc khi danh sách không tải được.",
    "click": "Danh sách sẽ tải lại sau một lát. Các phiên bản mới của giao diện đã cài đặt cũng được kiểm tra. Không có gì trên trang web của bạn thay đổi.",
    "care": "Nếu bạn thấy **Hiện tại chúng tôi không thể tải danh sách giao diện.**, hãy đợi một chút và nhấn [[Thử lại]].",
    "like": "Giống như việc hỏi cửa hàng quần áo về cuốn catalog mới nhất của họ vậy."
  },
  "help.skins.gal_filter": {
    "t": "Bộ lọc da",
    "what": "Các nút chỉ hiển thị một số giao diện. **Tất cả**, **Sáng** (nền sáng), **Tối** (nền tối) và #từ mô tả kiểu dáng.",
    "when": "Khi thư viện có nhiều giao diện và bạn đang tìm kiếm một phong cách cụ thể.",
    "click": "Chỉ những thẻ được hiển thị mới thay đổi. Nhấn **Tất cả** để xem lại toàn bộ. Không có gì được lưu lại.",
    "care": "Một #word chỉ xuất hiện khi có từ hai giao diện trở lên sử dụng từ đó. Nếu không có giao diện nào khớp, bạn sẽ thấy **Không có giao diện nào khớp với bộ lọc này.**",
    "like": "Giống như các biển chỉ dẫn trong cửa hàng quần áo: áo khoác hướng này, áo sơ mi hướng kia."
  },
  "help.skins.gal_preview": {
    "t": "Xem trước",
    "what": "Hiển thị trang web của riêng bạn, với các bài hát và hồ sơ của bạn, với giao diện này. Bạn cũng có thể nhấn vào hình ảnh của giao diện.",
    "when": "Trước khi áp dụng giao diện, hãy xem nó trông như thế nào trên trang web của bạn.",
    "click": "Một cửa sổ sẽ mở ra. Không có gì được lưu lại và khách truy cập sẽ không thấy gì. Hãy đóng cửa sổ bằng phím [[Đóng]] hoặc phím Esc. Bạn có thể áp dụng giao diện từ chính cửa sổ đó.",
    "care": "Nhạc không phát và quảng cáo không hiển thị trong bản xem trước. Nếu có thông báo \"**Cập nhật trang web của bạn để sử dụng cái này.**\", thì sẽ không có bản xem trước cho đến khi trang web của bạn được cập nhật.",
    "like": "Giống như phòng thử đồ: bạn thử bộ đồ vào, và vẫn có thể mặc lại."
  },
  "help.skins.gal_apply": {
    "t": "Thoa/Bôi lớp da này lên",
    "what": "Thêm giao diện thư viện ảnh này vào trang web của bạn chỉ với một cú nhấp chuột. Bạn có thể tìm thấy nó trên mỗi thẻ giao diện và trong cửa sổ xem trước.",
    "when": "Khi bạn thích một giao diện nào đó và muốn khách truy cập nhìn thấy nó.",
    "click": "Giao diện được kiểm tra, thêm vào mục **Đã cài đặt** và được áp dụng ngay lập tức. Khách truy cập sẽ thấy giao diện mới trong khoảng 30 giây. Để hủy bỏ, hãy nhấn [[Back to the previous skin]].",
    "care": "Bạn có thể giữ tối đa 20 giao diện ngoài giao diện Sáng và Tối. Nếu bạn đã tải lên giao diện của riêng mình với cùng tên, bạn sẽ được hỏi trước khi nó bị thay thế. Giao diện có đánh dấu **Cập nhật trang web của bạn để sử dụng giao diện này.** hiện chưa thể được áp dụng.",
    "like": "Giống như việc mua một bộ quần áo ở cửa hàng và mặc nó ra khỏi nhà vậy."
  },
  "help.skins.pv_mode": {
    "t": "Máy tính để bàn / Điện thoại",
    "what": "Thay đổi kích thước của bản xem trước. **Máy tính để bàn** hiển thị màn hình máy tính rộng. **Điện thoại** hiển thị màn hình điện thoại hẹp.",
    "when": "Nhiều khách truy cập nghe qua điện thoại, vì vậy hãy kiểm tra cả hai trước khi nộp đơn.",
    "click": "Chỉ có kích thước xem trước thay đổi. Không có gì được lưu lại.",
    "like": "Giống như việc bạn nhìn vào cửa hàng của mình từ ngoài đường rồi nhìn từ cự ly gần hơn."
  },
  "help.site.artist_del": {
    "t": "Xóa bỏ",
    "what": "Xóa tên này khỏi danh sách các nghệ sĩ khác.",
    "when": "Khi bạn không còn muốn chọn tên này cho các bài hát mới nữa.",
    "click": "Ứng dụng sẽ hỏi bạn trước, sau đó tên bài hát sẽ được lưu ngay lập tức. Những bài hát đã sử dụng tên này sẽ giữ nguyên. Chỉ có tùy chọn cho bài hát mới là biến mất.",
    "care": "Để thay đổi nghệ sĩ của một bài hát cũ, hãy chỉnh sửa chính bài hát đó. Bạn có thể thêm lại cùng tên nghệ sĩ đó sau này.",
    "like": "Lấy một tấm thẻ tên ra khỏi ngăn kéo. Những bài hát đã có tấm thẻ đó vẫn tiếp tục đeo nó."
  },
  "help.site.info": {
    "t": "Thông tin trang web",
    "what": "Thẻ này chứa các thông tin cơ bản về trang web của bạn: tên trang web, tên nghệ sĩ, ngôn ngữ chính, mô tả ngắn, quốc gia của bạn và dòng chữ phía dưới.",
    "when": "Hãy điền thông tin này một lần khi bạn bắt đầu. Quay lại khi bạn muốn đổi tên trang web hoặc thay đổi cách giới thiệu trang web.",
    "click": "Không có gì được lưu trong khi bạn đang nhập. Nhấn [[Save site info]] ở cuối thẻ để lưu toàn bộ nội dung cùng một lúc. Trang web của bạn sẽ thay đổi ngay lập tức, và aimusiclist.com sẽ có tên và mô tả mới ngay sau đó.",
    "care": "Các thẻ khác trên tab này (mạng xã hội, số lượt xem, lượt thích, hình ảnh…) tự động được lưu. Chỉ thẻ này cần nút lưu. Nếu bạn đóng tab mà không nhấn nút lưu, dữ liệu bạn đã nhập sẽ bị mất.",
    "like": "Đây là mẫu đăng ký cửa hàng: biển hiệu phía trên cửa, một dòng giới thiệu ngắn gọn và địa chỉ cửa hàng."
  },
  "help.site.name": {
    "t": "Tên trang web",
    "what": "Tên trang web của bạn, từ 1 đến 40 ký tự. Đó là tiêu đề lớn trên trang web của bạn, và aimusiclist.com hiển thị nó bên dưới tiêu đề bài hát của bạn. Mọi người nhấp vào đó để truy cập trang web của bạn.",
    "when": "Hãy chọn tên khi bạn bắt đầu. Chỉ thay đổi khi bạn thực sự muốn một cái tên mới, bởi vì người nghe sẽ quen với bạn qua cái tên đó.",
    "click": "Thông tin sẽ được lưu khi bạn nhấn [[Save site info]]. Nếu tên nghệ sĩ của bạn trùng với tên trang web cũ, nó cũng sẽ được đổi thành tên mới.",
    "care": "Bạn không được sử dụng tên của ca sĩ hoặc nhóm nhạc nổi tiếng, hoặc tên nào đó trông giống với tên của họ. Việc lưu tên sẽ bị chặn nếu tên đó trùng khớp với bất kỳ tên nào chúng tôi đã biết. Nếu có trường hợp nào lọt qua và chúng tôi phát hiện ra, trang web của bạn có thể bị gỡ bỏ khỏi aimusiclist.",
    "like": "Đây là biển hiệu cửa hàng. Khách hàng ở siêu thị lớn (aimusiclist.com) sẽ đọc biển hiệu này để tìm đường đến cửa hàng của bạn."
  },
  "help.site.artist": {
    "t": "Tên nghệ sĩ",
    "what": "Tên của cá nhân hoặc nhóm nhạc sáng tác nhạc trên trang web này. Tên này có thể giống hoặc khác với tên trang web.",
    "when": "Hãy điền vào phần này nếu tên nghệ danh âm nhạc của bạn không trùng với tên trang web. Ví dụ: trang web là My Music Room nhưng bạn hát với nghệ danh Luna.",
    "click": "Thông tin này được lưu khi bạn nhấn [[Save site info]]. Nếu nó khác với tên trang web, khách truy cập sẽ thấy nó bên dưới tên trang web trên trang chủ của bạn. aimusiclist.com cũng sẽ nhận được thông tin này trong vòng một hoặc hai phút.",
    "care": "Tối đa 40 ký tự. Bạn không được sử dụng tên của ca sĩ hoặc nhóm nhạc nổi tiếng, hoặc tên có vẻ giống với họ. Nếu bạn thay đổi tên trang web và ô này vẫn giữ tên trang web cũ, nó sẽ thay đổi theo.",
    "like": "Biển hiệu cửa hàng hiển thị tên cửa hàng. Đây là bảng tên của nhạc sĩ đang làm việc trong cửa hàng."
  },
  "help.site.lang": {
    "t": "Ngôn ngữ chính của trang web của bạn",
    "what": "Ngôn ngữ mà trang web của bạn sử dụng khi không thể xác định ngôn ngữ mà khách truy cập muốn sử dụng. aimusiclist.com cũng được thông báo về ngôn ngữ này.",
    "when": "Hãy chọn ngôn ngữ mà hầu hết người nghe của bạn đọc được, hoặc ngôn ngữ mà bạn dùng để viết phần mô tả.",
    "click": "Thông tin sẽ được lưu khi bạn nhấn [[Save site info]]. Mỗi khách truy cập vẫn sẽ thấy trang web của bạn bằng ngôn ngữ trình duyệt của họ nếu trang web của bạn có hỗ trợ ngôn ngữ đó, hoặc bằng ngôn ngữ họ đã chọn. Chỉ khi cả hai ngôn ngữ trên đều không hoạt động thì họ mới thấy ngôn ngữ này.",
    "care": "Thao tác này không thay đổi ngôn ngữ của trang quản trị này. Nó cũng không dịch tiêu đề bài hát hoặc mô tả mà bạn đã viết.",
    "like": "Đó là ngôn ngữ trên bảng chào mừng của cửa hàng. Khách hàng nói ngôn ngữ khác vẫn có thể yêu cầu thực đơn bằng ngôn ngữ của họ."
  },
  "help.site.desc": {
    "t": "Mô tả ngắn gọn",
    "what": "Một đoạn giới thiệu ngắn về bạn và âm nhạc của bạn, tối đa 200 ký tự. Đoạn giới thiệu này sẽ hiển thị trên trang web của bạn và được gửi đến aimusiclist.com cùng với tên trang web của bạn.",
    "when": "Hãy viết một hoặc hai câu về thể loại nhạc bạn chơi. Bạn có thể thay đổi bất cứ khi nào bạn muốn.",
    "click": "Thông tin này được lưu khi bạn nhấn [[Save site info]]. aimusiclist.com sẽ nhận được văn bản mới ngay sau đó. Hãy để trống nếu bạn muốn không hiển thị mô tả.",
    "care": "Hãy viết ngắn gọn và đơn giản. Đừng dùng tên của một ca sĩ nổi tiếng để tự giới thiệu bản thân, ví dụ như \"người mới [tên nổi tiếng]\".",
    "like": "Đó là tấm thẻ nhỏ được dán dưới biển hiệu cửa hàng, cho người qua đường biết bạn bán gì."
  },
  "help.site.footer": {
    "t": "Văn bản phía dưới",
    "what": "Một dòng văn bản duy nhất ở cuối mỗi trang trên trang web của bạn, tối đa 200 ký tự. Chỉ văn bản – không có hình ảnh hoặc liên kết.",
    "when": "Bạn có thể sử dụng nó cho những ghi chú ngắn gọn, chẳng hạn như dòng ghi chú bản quyền hoặc lời cảm ơn.",
    "click": "Mã số này được lưu khi bạn nhấn [[Save site info]] và hiển thị ngay trên trang web của bạn. Nếu bạn để trống, trang web của bạn sẽ hiển thị \"© năm nay + tên trang web\". Nếu bạn nhập {year}, nó sẽ tự động trở thành số của năm nay.",
    "care": "Dấu xuống dòng được chuyển thành khoảng trắng. Dòng chữ \"Powered by aimusiclist.com\" bên cạnh sẽ luôn được giữ nguyên; hộp này không thể xóa nó.",
    "like": "Đó là dòng chữ nhỏ được in ở cuối hóa đơn của cửa hàng."
  },
  "help.site.save": {
    "t": "Lưu thông tin trang web",
    "what": "Lưu trữ tất cả thông tin trong thẻ thông tin Trang web cùng một lúc: tên, ngôn ngữ, mô tả, quốc gia, văn bản ở cuối trang và thông tin bổ sung.",
    "when": "Hãy nhấn vào nút đó sau khi bạn thay đổi bất kỳ thông tin nào trên thẻ đó.",
    "click": "Trang web của bạn hiển thị các thay đổi ngay lập tức. aimusiclist.com sẽ có tên và mô tả mới ngay sau đó. Nếu có lỗi, một thông báo màu đỏ sẽ xuất hiện bên cạnh nút và không có gì được lưu lại.",
    "care": "Quá trình lưu sẽ bị chặn nếu tên bạn vừa đổi trùng với tên của một nhạc sĩ nổi tiếng. Khi đó, hãy chọn một tên khác và nhấn lại.",
    "like": "Đó là con dấu trên giấy đăng ký cửa hàng. Cho đến khi bạn đóng dấu, những thay đổi chỉ là bản nháp."
  },
  "help.site.artists": {
    "t": "Các nghệ sĩ khác",
    "what": "Đây là danh sách các tên nghệ sĩ bổ sung mà bạn có thể chọn cho một bài hát. Nếu bạn không chọn gì, bài hát sẽ sử dụng tên trang web của bạn làm nghệ sĩ.",
    "when": "Hãy sử dụng nó khi một trang web có các bài hát với nhiều tên khác nhau. Ví dụ, bạn cũng sáng tác nhạc cùng với người khác, hoặc như một dự án phụ.",
    "click": "Tên bạn thêm vào đây sẽ hiển thị trong phần lựa chọn nghệ sĩ khi bạn tải lên hoặc chỉnh sửa bài hát hoặc album. Nghệ sĩ của bài hát sẽ được hiển thị trên trang web của bạn và trên aimusiclist.com.",
    "care": "Bạn có thể lưu tối đa 20 tên. Khi danh sách đầy, nút Thêm sẽ chuyển sang màu xám. Không thể sử dụng tên của các ca sĩ nổi tiếng.",
    "like": "Một cửa hàng, nhưng có nhiều thẻ tên trong ngăn kéo. Với mỗi bài hát, bạn sẽ ghim thẻ tên của người sáng tác ra nó."
  },
  "help.site.artist_add": {
    "t": "Thêm vào",
    "what": "Thêm tên bạn vừa nhập vào danh sách các nghệ sĩ khác.",
    "when": "Nhập tên nghệ sĩ mới vào ô bên trái, sau đó nhấn vào đó.",
    "click": "Tên này được lưu ngay lập tức. Từ giờ trở đi, bạn có thể chọn tên này khi tải lên hoặc chỉnh sửa bài hát.",
    "care": "Tối đa 60 ký tự. Tên đã có trong danh sách hoặc trùng với tên trang web của bạn sẽ không được thêm vào. Tên của các ca sĩ hoặc nhóm nhạc nổi tiếng sẽ bị từ chối.",
    "like": "Làm một thẻ tên mới và đặt vào ngăn kéo."
  },
  "help.site.account": {
    "t": "Tài khoản quản trị",
    "what": "Đây là email và mật khẩu bạn dùng để đăng nhập vào màn hình quản trị này. Dòng phía trên hiển thị email bạn đang sử dụng hiện tại.",
    "when": "Sử dụng chức năng này để thay đổi email đăng nhập hoặc mật khẩu của bạn.",
    "click": "Mọi thứ sẽ không thay đổi cho đến khi bạn điền đầy đủ thông tin vào các ô, nhập mật khẩu hiện tại và nhấn [[Save account]].",
    "care": "Trên trang web meshmelo, bạn chỉ có thể thay đổi email trong tài khoản meshmelo của mình, vì vậy hộp email không được hiển thị ở đây.",
    "like": "Chìa khóa cửa sau của cửa hàng bạn. Chỉ bạn mới nên có nó."
  },
  "help.site.account_email": {
    "t": "Email mới (tùy chọn)",
    "what": "Thêm địa chỉ email mới để đăng nhập. Hãy để trống phần này để giữ nguyên địa chỉ email hiện có.",
    "when": "Khi bạn ngừng sử dụng email cũ hoặc muốn đăng nhập bằng email khác.",
    "click": "Nó chỉ thay đổi sau khi bạn nhập mật khẩu hiện tại và nhấn [[Save account]]. Lần đăng nhập tiếp theo, hãy sử dụng email mới.",
    "care": "Hãy kiểm tra chính tả cẩn thận. Nếu email sai, việc đăng nhập sẽ khó khăn. Ô này không hiển thị trên các trang web meshmelo.",
    "like": "Thay đổi tên được ghi trên chìa khóa cửa sau nhà bạn."
  },
  "help.site.account_pw": {
    "t": "Mật khẩu mới (tùy chọn)",
    "what": "Mật khẩu mới cho màn hình quản trị này. Hãy để trống để giữ nguyên mật khẩu cũ.",
    "when": "Khi bạn nghĩ rằng ai đó biết mật khẩu của mình, hoặc đơn giản là bạn muốn có một mật khẩu mới.",
    "click": "Sau khi bạn nhập lại mật khẩu vào ô tiếp theo, thêm mật khẩu hiện tại và nhấn [[Save account]], mật khẩu sẽ được giữ nguyên. Các điện thoại và máy tính khác sẽ bị đăng xuất. Riêng thiết bị này vẫn đăng nhập.",
    "care": "Ít nhất 6 ký tự. Hãy viết nó ra ở một nơi an toàn. Trên trang web meshmelo, tài khoản meshmelo của bạn cũng sẽ nhận được mật khẩu mới tương tự.",
    "like": "Thay ổ khóa cửa sau. Chìa khóa cũ không còn dùng được nữa."
  },
  "help.site.account_pw2": {
    "t": "Mật khẩu mới",
    "what": "Nhập lại mật khẩu mới đó một lần nữa.",
    "when": "Mỗi khi bạn điền mật khẩu mới vào ô.",
    "click": "Khi bạn nhấn [[Save account]], hai ô sẽ được so sánh. Nếu chúng khác nhau, không có gì được lưu và bạn sẽ thấy một thông báo.",
    "care": "Chức năng này giúp phát hiện lỗi đánh máy. Nếu bạn không nhớ mình đã gõ gì, hãy xóa cả hai ô và gõ lại chậm rãi.",
    "like": "Hãy thử cắm chìa khóa mới vào ổ khóa một lần trước khi về nhà."
  },
  "help.site.account_cur": {
    "t": "Mật khẩu hiện tại (bắt buộc phải thay đổi)",
    "what": "Mật khẩu bạn đang sử dụng hiện tại. Nó chứng minh đó thực sự là bạn trước khi email hoặc mật khẩu khác được thay đổi.",
    "when": "Luôn nhập thông tin này khi bạn thay đổi email hoặc mật khẩu.",
    "click": "Việc gõ vào đây không có tác dụng gì. Nó chỉ được kiểm tra khi bạn nhấn [[Save account]].",
    "care": "Sau 5 lần nhập sai, các thay đổi sẽ bị khóa trong 15 phút. Nếu bạn quên mật khẩu, hãy mở [[Quên mật khẩu?]] bên dưới.",
    "like": "Đưa chìa khóa cũ của bạn cho thợ khóa xem trước khi họ làm cho bạn một chiếc chìa khóa mới."
  },
  "help.site.account_save": {
    "t": "Lưu tài khoản",
    "what": "Lưu lại địa chỉ email và/hoặc mật khẩu mới mà bạn vừa nhập ở trên.",
    "when": "Sau khi bạn điền thông tin muốn thay đổi và mật khẩu hiện tại của mình.",
    "click": "Mật khẩu được lưu ngay lập tức. Mật khẩu mới sẽ đăng xuất bạn khỏi các điện thoại và máy tính khác, nhưng không phải máy này. Nếu cả hai ô nhập mật khẩu đều trống, sẽ không có gì xảy ra.",
    "care": "Khóa sử dụng không được lưu ở đây. Nó có nút [[Lưu khóa]] riêng ở phía dưới.",
    "like": "Đưa chìa khóa mới cho thợ khóa và nói: Được rồi, giờ thì thay khóa đi."
  },
  "help.site.forgot": {
    "t": "Bạn quên mật khẩu?",
    "what": "Các bước để truy cập lại màn hình quản trị khi bạn quên mật khẩu. Nhấn vào tiêu đề để mở chúng.",
    "when": "Khi bạn không thể đăng nhập, hoặc khi ô nhập mật khẩu ở trên liên tục báo là nhập sai.",
    "click": "Việc mở nó ra không làm thay đổi gì cả. Nó chỉ hiển thị các bước. Các bước này khác nhau tùy thuộc vào loại trang web: trong Cloudflare, trong trình quản lý tệp của máy chủ lưu trữ hoặc trên meshmelo qua email.",
    "care": "Hãy làm theo đúng các bước và chỉ xóa những gì được hướng dẫn. Các bài hát, album và liên kết aimusiclist.com của bạn vẫn giữ nguyên.",
    "like": "Có dán hướng dẫn về chìa khóa dự phòng bên trong cửa hàng để phòng trường hợp bạn làm mất chìa khóa."
  },
  "help.site.token_open": {
    "t": "Tạo nó trên Cloudflare",
    "what": "Mở trang Cloudflare, nơi bạn tạo khóa sử dụng, trong một tab mới. Hầu hết các ô đã được điền sẵn cho bạn.",
    "when": "Bước 1 của quá trình tạo chìa khóa. Nhấn nút này khi bạn chưa có chìa khóa sử dụng.",
    "click": "Cloudflare mở [[Create Token]]. Đăng nhập nếu được yêu cầu. Không có gì được lưu ở đây cho đến khi bạn quay lại, dán khóa và nhấn [[Lưu khóa]].",
    "care": "Cloudflare chỉ hiển thị phím một lần. Nhấn [[Sao chép]] ngay lập tức. Nếu các dòng quyền trống, hãy thêm hai dòng được hiển thị trong các bước.",
    "like": "Đến cửa hàng làm chìa khóa với một tờ giấy ghi rõ loại chìa khóa bạn cần."
  },
  "help.site.token": {
    "t": "Xem hướng dẫn sử dụng (tùy chọn)",
    "what": "Nơi để lưu khóa sử dụng từ Cloudflare. Với khóa này, màn hình có thể hiển thị số lần sử dụng miễn phí Cloudflare của bạn ở phía trên.",
    "when": "Khi bạn muốn kiểm tra xem trang web của mình đã sử dụng bao nhiêu dung lượng miễn phí, chẳng hạn như dung lượng lưu trữ và lượt phát.",
    "click": "Sau khi lưu khóa, ô thông tin sử dụng ở phía trên sẽ tự động điền vào. Việc lưu khóa không làm bạn bị đăng xuất.",
    "care": "Hãy tạo khóa trong cùng tài khoản Cloudflare mà bạn đang sử dụng để lưu trữ các bài hát. Khóa từ tài khoản khác không thể đọc được các số. Ngay cả khi không có khóa, trang web của bạn vẫn hoạt động bình thường. Bạn chỉ không nhìn thấy các số mà thôi.",
    "like": "Đây là một chiếc chìa khóa để đọc đồng hồ điện. Nó chỉ cho phép bạn xem các con số, không hơn không kém."
  },
  "help.site.token_change": {
    "t": "Thay đổi",
    "what": "Một khóa đã được lưu. Chỉ có điểm bắt đầu và kết thúc được hiển thị, vì vậy không ai có thể sao chép nó. Nút này cho phép bạn nhập một khóa khác.",
    "when": "Khi số liệu sử dụng ngừng hiển thị, khi bạn xóa khóa trong Cloudflare, hoặc khi các bài hát của bạn được chuyển sang tài khoản Cloudflare khác.",
    "click": "Hộp đựng chìa khóa sẽ mở ra. Chìa khóa cũ vẫn hoạt động cho đến khi bạn lưu chìa khóa mới. Nhấn [[Hủy]] để giữ lại chìa khóa cũ.",
    "care": "Nếu xuất hiện dòng chữ màu đỏ cho biết kho lưu trữ bài hát của bạn nằm trong một tài khoản khác, hãy tạo khóa mới trong tài khoản mới đó.",
    "like": "Đổi chìa khóa đọc chỉ số công tơ điện cũ lấy chìa khóa mới. Chìa khóa cũ vẫn hoạt động cho đến khi bạn trả lại chìa khóa mới."
  },
  "help.site.token_input": {
    "t": "Khóa sử dụng",
    "what": "Ô này là nơi bạn dán khóa đã sao chép từ Cloudflare. Các chữ cái sẽ bị ẩn đi khi bạn dán.",
    "when": "Ngay sau khi bạn tạo khóa trên Cloudflare và nhấn [[Sao chép]].",
    "click": "Chỉ dán thôi thì không lưu được gì. Hãy nhấn phím [[Lưu khóa]] bên cạnh.",
    "care": "Hãy dán toàn bộ khóa, không có khoảng trắng. Khóa này chỉ có thể đọc số và tên tài khoản của bạn. Nó không thể thay đổi hoặc xóa bất cứ thứ gì, nhưng vẫn đừng chia sẻ nó với người khác.",
    "like": "Khe cắm để đặt chìa khóa đọc chỉ số công tơ điện."
  },
  "help.site.token_save": {
    "t": "Lưu khóa",
    "what": "Kiểm tra khóa với Cloudflare và lưu lại.",
    "when": "Sau khi bạn dán khóa sử dụng vào ô.",
    "click": "Nó kiểm tra khóa trước. Nếu hoạt động, khóa sẽ được lưu lại và số liệu sử dụng sẽ hiển thị ngay lập tức ở phía trên. Bạn vẫn được đăng nhập. Nếu có lỗi, một thông báo màu đỏ sẽ cho bạn biết cần sửa lỗi gì.",
    "care": "Nếu hệ thống báo rằng khóa không thể truy cập danh sách tài khoản của bạn, một hộp thoại mới sẽ yêu cầu bạn nhập ID tài khoản Cloudflare. Hãy điền thông tin và nhấn lại. Khóa từ một tài khoản Cloudflare khác sẽ bị từ chối.",
    "like": "Thử cắm chìa khóa vào hộp đồng hồ điện. Nếu nó xoay được, thì cứ để nguyên như vậy."
  },
  "help.site.token_account_id": {
    "t": "Mã tài khoản Cloudflare (chỉ khi được yêu cầu)",
    "what": "Số tài khoản Cloudflare của bạn, gồm 32 chữ cái và chữ số. Số này chỉ xuất hiện khi công cụ tìm kiếm không thể tự tìm thấy tài khoản của bạn.",
    "when": "Khi lưu khóa, hệ thống báo không thể thấy danh sách tài khoản của bạn. Điều này xảy ra nếu khóa chỉ có một dòng quyền thay vì hai dòng.",
    "click": "Điền thông tin vào và nhấn [[Lưu khóa]] một lần nữa. Nếu số và mã số trùng khớp, mã số sẽ được lưu.",
    "care": "Chỉ sử dụng các ký tự từ 0 đến 9 và a đến f, chính xác 32 ký tự. Cách khắc phục dễ hơn thường là tạo lại khóa với [[Tạo trên Cloudflare]], để cả hai dòng đều được điền đầy đủ.",
    "like": "Hãy ghi số nhà lên chìa khóa đồng hồ điện, vì chìa khóa không thể tự tìm thấy nhà."
  },
  "help.site.token_howto": {
    "t": "Cách tạo khóa sử dụng (2 phút)",
    "what": "Hướng dẫn từng bước tạo khóa sử dụng trên Cloudflare. Nhấn vào tiêu đề để mở hoặc đóng.",
    "when": "Lần đầu tiên bạn tạo chìa khóa, hoặc khi các số ở phía trên không còn hiển thị nữa.",
    "click": "Việc mở nó ra không làm thay đổi gì cả. Nó sẽ tự động mở cho đến khi lưu được mật khẩu, sau đó nó sẽ gập lại.",
    "care": "Khóa này cần hai dòng quyền: Quyền đọc phân tích tài khoản và Quyền đọc cài đặt tài khoản. Cloudflare chỉ hiển thị khóa một lần, vì vậy hãy sao chép ngay lập tức.",
    "like": "Một bản đồ nhỏ chỉ dẫn đến cửa hàng bán chìa khóa, có đánh dấu vị trí quầy hàng."
  },
  "help.site.mm_r2": {
    "t": "Lưu trữ bài hát (R2)",
    "what": "Hiển thị nơi lưu trữ các bài hát và hình ảnh của bạn: tên kho lưu trữ và số tài khoản Cloudflare của bạn. Kho lưu trữ này thuộc về bạn, không phải của meshmelo.",
    "when": "Hãy xem ở đây khi bạn muốn kiểm tra xem trang web của mình đang sử dụng tài khoản và dung lượng lưu trữ Cloudflare nào.",
    "click": "Thẻ này chỉ hiển thị thông tin. Để thay đổi thông tin, hãy sử dụng [[Đổi kho lưu trữ]].",
    "care": "Đừng xóa dữ liệu lưu trữ này trong Cloudflare. Nếu không, các bài hát của bạn sẽ ngừng phát ở mọi nơi.",
    "like": "Địa chỉ kho hàng của riêng bạn, nơi lưu giữ mọi hồ sơ về cửa hàng của bạn."
  },
  "help.site.mm_r2_change": {
    "t": "Thay đổi lưu trữ",
    "what": "Mở trang meshmelo của bạn trong một tab mới. Tại đó, bạn có thể chuyển sang bộ nhớ khác hoặc tài khoản Cloudflare khác.",
    "when": "Khi bạn chuyển các bài hát của mình sang nơi lưu trữ mới hoặc sang tài khoản Cloudflare khác.",
    "click": "Chỉ một tab mới được mở ra. Mọi thứ sẽ không thay đổi cho đến khi bạn hoàn thành các bước trên trang meshmelo.",
    "care": "Đã chuyển sang tài khoản Cloudflare khác? Vậy thì hãy tạo một khóa sử dụng mới trong tài khoản đó và lưu vào thẻ bên dưới. Khóa cũ không thể đọc được tài khoản mới.",
    "like": "Gọi cho công ty vận chuyển để họ chuyển hồ sơ của bạn đến kho mới."
  },
  "help.site.mm_card": {
    "t": "Trang web meshmelo của bạn",
    "what": "Trang web của bạn nằm trên meshmelo, nhưng các bài hát và hình ảnh của bạn được lưu trữ riêng. Thẻ này cho phép bạn mang trang web của mình đi theo hoặc đóng nó lại.",
    "when": "Khi bạn muốn sao lưu dữ liệu, khi bạn chuyển sang máy chủ riêng hoặc khi bạn muốn ngừng sử dụng meshmelo.",
    "click": "Thẻ này tự nó không có chức năng gì. Hãy sử dụng [[Xuất trang của tôi]] để tải xuống bản sao, hoặc [[Tài khoản meshmelo của tôi]] để mở trang meshmelo của bạn.",
    "like": "Bạn thuê một gian hàng trong trung tâm thương mại, nhưng hồ sơ trong kho của bạn vẫn thuộc về bạn. Bạn có thể thu dọn và chuyển đi bất cứ lúc nào."
  },
  "help.site.mm_export": {
    "t": "Xuất trang web của tôi",
    "what": "Tải xuống một tập tin nén (zip) chứa danh sách bài hát, album, cài đặt, giao diện và sổ lưu bút của bạn. Các tập tin âm thanh và hình ảnh của bạn không có trong đó. Chúng đã được lưu trữ sẵn trong bộ nhớ của bạn.",
    "when": "Nên sao lưu dữ liệu định kỳ, hoặc trước khi chuyển trang web của bạn sang máy chủ riêng.",
    "click": "Quá trình tải xuống bắt đầu ngay lập tức. Không có gì thay đổi trên trang web của bạn.",
    "care": "Hãy giữ bí mật tệp tin này. Nó chứa thông tin đăng nhập của bạn và mã bí mật kết nối trang web của bạn với aimusiclist.com. Bạn có thể xuất tệp tin này ngay cả khi trang web của bạn đang tạm dừng hoạt động.",
    "like": "Một bản sao toàn bộ sổ tay cửa hàng của bạn, để bạn có thể mở một cửa hàng tương tự ở nơi khác."
  },
  "help.site.mm_delete": {
    "t": "Xóa trang web của tôi",
    "what": "Đóng trang web của bạn trên meshmelo vĩnh viễn: các trang, cài đặt và danh sách bài hát sẽ bị xóa. Nhấn vào tiêu đề để mở hộp xóa.",
    "when": "Chỉ khi bạn thực sự muốn dừng lại. Nếu bạn đang di chuyển, hãy nhấn [[Xuất trang của tôi]] trước.",
    "click": "Việc mở nó ra không làm thay đổi gì cả. Để xóa, bạn phải nhập tên trang web và mật khẩu của mình, sau đó nhấn nút màu đỏ.",
    "care": "Không thể hoàn tác. Các bài hát của bạn sẽ bị xóa khỏi aimusiclist.com ngay lập tức. Các tệp trong bộ nhớ của bạn sẽ không bị ảnh hưởng. Tên trang web của bạn sẽ không được cung cấp cho bất kỳ ai khác.",
    "like": "Trả lại chìa khóa cửa hàng bạn thuê. Hồ sơ trong kho của bạn vẫn thuộc về bạn."
  },
  "help.site.mm_delete_name": {
    "t": "Nhập tên trang web của bạn để xác nhận",
    "what": "Nhập tên trang web của bạn vào đây, chính xác như hình minh họa, để chứng minh bạn thực sự muốn xóa.",
    "when": "Chỉ khi bạn xóa trang web của mình.",
    "click": "Việc gõ chữ một mình không có tác dụng gì. Nó chỉ được kiểm tra khi bạn nhấn nút xóa màu đỏ.",
    "care": "Nó phải khớp từng chữ cái một. Nếu khác nhau, không có gì bị xóa và bạn sẽ thấy một thông báo.",
    "like": "Ký tên vào mẫu đơn đóng cửa cửa hàng của bạn."
  },
  "help.site.mm_delete_btn": {
    "t": "Xóa trang web của tôi",
    "what": "Nút cuối cùng thực sự xóa trang web meshmelo của bạn.",
    "when": "Sau khi bạn đã nhập tên trang web và mật khẩu hiện tại của mình vào phía trên.",
    "click": "Nó hỏi lại một lần nữa. Nếu bạn trả lời có, trang web sẽ bị xóa ngay lập tức, bạn bị đăng xuất và trang meshmelo của bạn sẽ được mở ra.",
    "care": "Không thể hoàn tác. Hãy xuất dữ liệu trước nếu bạn có thể cần dùng đến sau này. Sau 5 lần nhập mật khẩu sai, bạn phải đợi một giờ.",
    "like": "Tắt đèn cửa hàng và khóa cửa lần cuối."
  },
  "help.site.images": {
    "t": "Ảnh bìa và ảnh đại diện",
    "what": "Hai hình ảnh cho trang web của bạn: một banner rộng ở phía trên cùng và một ảnh đại diện hình tròn.",
    "when": "Hãy thêm chúng để trang web của bạn mang đậm dấu ấn cá nhân. Bạn có thể thay đổi chúng bất cứ khi nào bạn muốn.",
    "click": "Mỗi hình ảnh sẽ được lưu ngay lập tức sau khi bạn chọn và nhấn lưu trong cửa sổ hình ảnh. Không có nút lưu riêng cho thẻ này.",
    "care": "Bạn có thể chọn ảnh có dung lượng tối đa 2 MB (JPG, PNG, WebP hoặc GIF). Chỉ ảnh đã chỉnh sửa (kích thước nhỏ) được tải lên, chứ không phải ảnh gốc của bạn.",
    "like": "Đó là mái hiên của cửa hàng phía trên cửa ra vào và bức ảnh của chủ cửa hàng đặt cạnh quầy."
  },
  "help.site.banner": {
    "t": "Biểu ngữ đầu trang",
    "what": "Hình ảnh khổ lớn hiển thị phía trên tiêu đề trang web của bạn. Kích thước có thể lên đến 1600×400.",
    "when": "Hãy sử dụng hình ảnh có chiều rộng và chiều sâu thấp, chẳng hạn như ảnh phong cảnh hoặc tác phẩm nghệ thuật của bạn được kéo giãn theo chiều ngang.",
    "click": "Nhấn [[Choose image]]. Trong cửa sổ hình ảnh, bạn có thể di chuyển khung hình để cắt xén hoặc thu nhỏ toàn bộ hình ảnh mà vẫn giữ nguyên kích thước. Nhấn [[Save image]] và hình ảnh sẽ hiển thị ngay trên trang web của bạn.",
    "care": "Ảnh được lưu dưới dạng ảnh nhẹ có dung lượng tối đa 300 KB. Ảnh chiều cao thường bị cắt bớt, vì vậy ảnh chiều rộng sẽ trông đẹp hơn. Nếu bạn không thêm ảnh chiều rộng, phần banner sẽ không hiển thị.",
    "like": "Đó là mái hiên lớn được sơn màu phía trên cửa sổ cửa hàng của bạn."
  },
  "help.site.image_choose": {
    "t": "Chọn hình ảnh",
    "what": "Mở trình chọn ảnh trên thiết bị của bạn để chọn ảnh bìa hoặc ảnh đại diện.",
    "when": "Nhấn vào đó để thêm ảnh lần đầu tiên hoặc để thay thế ảnh hiện có.",
    "click": "Sau khi bạn chọn ảnh, một cửa sổ chỉnh sửa sẽ mở ra. Mọi thứ sẽ không thay đổi cho đến khi bạn nhấn nút lưu trong cửa sổ đó ([[Save image]] cho ảnh bìa, [[Áp dụng]] cho ảnh đại diện). Sau đó, ảnh mới sẽ ngay lập tức thay thế ảnh cũ.",
    "care": "Chọn ảnh định dạng JPG, PNG, WebP hoặc GIF có dung lượng 2 MB trở xuống. Ảnh động (GIF) sẽ trở thành ảnh tĩnh. Sử dụng Chrome, Edge hoặc Firefox nếu trình duyệt của bạn không thể hiển thị ảnh.",
    "like": "Nó giống như việc bạn lấy một bức ảnh mới ra khỏi túi để cho vào khung ảnh của cửa hàng vậy."
  },
  "help.site.image_delete": {
    "t": "Di dời",
    "what": "Gỡ bỏ banner hoặc ảnh đại diện khỏi trang web của bạn.",
    "when": "Hãy sử dụng tùy chọn này khi bạn không muốn hiển thị bất kỳ hình ảnh nào ở đó.",
    "click": "Bạn sẽ được hỏi xác nhận một lần. Nếu bạn trả lời có, ảnh đại diện sẽ biến mất khỏi trang của bạn ngay lập tức. Ảnh đại diện bị xóa cũng sẽ biến mất khỏi aimusiclist.com ngay sau đó.",
    "care": "Thao tác này không thể hoàn tác. Để hiển thị lại hình ảnh, hãy chọn lại hình ảnh đó bằng mã [[Choose image]]. Bạn không cần phải xóa trước khi thay đổi hình ảnh — chỉ cần chọn một hình ảnh mới.",
    "like": "Nó giống như việc lấy bức ảnh ra khỏi khung ảnh của cửa hàng và để lại chiếc khung trống không."
  },
  "help.site.profile": {
    "t": "Ảnh đại diện",
    "what": "Hình ảnh hoặc logo của bạn, kích thước 200×200, được hiển thị dưới dạng hình tròn. aimusiclist.com cũng hiển thị nó trong mục \"Nghệ sĩ mới\" và bên cạnh trang web của bạn.",
    "when": "Thêm hình ảnh khuôn mặt hoặc logo rõ ràng mà mọi người có thể nhận ra ngay cả khi kích thước nhỏ.",
    "click": "Nhấn [[Choose image]]. Kéo ảnh để đặt vị trí, phóng to hoặc xoay ảnh, sau đó nhấn [[Áp dụng]]. Ảnh sẽ được lưu ngay lập tức. Trang web của bạn cũng sẽ tự động chọn màu nền phù hợp. aimusiclist.com sẽ nhận được ảnh mới ngay sau đó.",
    "care": "Các góc bị cắt bởi hình tròn, vì vậy hãy giữ phần quan trọng ở giữa. Hình ảnh được lưu dưới dạng ảnh nhẹ với dung lượng tối đa 100 KB.",
    "like": "Ảnh của chủ cửa hàng được in trên danh thiếp, và cũng được phát ở các chợ lớn."
  },
  "help.site.ads": {
    "t": "Google AdSense",
    "what": "Cho phép bạn hiển thị quảng cáo Google trên trang web của mình và kiếm tiền từ chúng. Bạn chỉ cần nhập các dãy số từ tài khoản AdSense của mình. Trang web của bạn sẽ tự động tạo quảng cáo.",
    "when": "Hãy sử dụng nó sau khi Google đã chấp nhận trang web của bạn trong AdSense.",
    "click": "Điền thông tin vào các ô, đánh dấu chọn [[Show ads on my site]] và nhấn [[Save AdSense]]. Quảng cáo sẽ không hiển thị trên trang quản trị này, mà chỉ hiển thị trên trang web của bạn.",
    "care": "Google chỉ chấp thuận các trang web có địa chỉ riêng. Nếu trang web của bạn vẫn đang sử dụng địa chỉ workers.dev, hãy kết nối tên miền của bạn trước trong tab \"Tên miền của tôi\". Không dán mã quảng cáo vào đây — chỉ dán ID.",
    "like": "Nó giống như việc bạn cho một nhà quảng cáo thuê một không gian nhỏ để dán áp phích trong cửa sổ cửa hàng của mình, và họ sẽ trả tiền cho bạn."
  },
  "help.site.ads_client": {
    "t": "Mã định danh nhà xuất bản (ca-pub-…)",
    "what": "Mã số AdSense của bạn. Mã số này bắt đầu bằng ca-pub- và có 16 chữ số phía sau.",
    "when": "Hãy tìm mã này trong tài khoản AdSense của bạn và sao chép vào đây. Bạn cần mã này trước khi bất kỳ quảng cáo nào có thể hiển thị.",
    "click": "Nó được lưu khi bạn nhấn [[Save AdSense]]. Nó cũng tự động tạo trang ads.txt của bạn.",
    "care": "Sao chép chính xác: ca-pub- và sau đó là 16 chữ số, không thêm gì khác. Nếu nhập liệu khác, một thông báo màu đỏ sẽ hiện ra và dữ liệu sẽ không được lưu.",
    "like": "Đó là số tài khoản của bạn tại công ty quảng cáo, để họ biết tấm áp phích được dán ở cửa sổ cửa hàng nào."
  },
  "help.site.ads_top": {
    "t": "ID đơn vị quảng cáo hàng đầu",
    "what": "Số thứ tự của không gian quảng cáo hiển thị gần đầu trang web của bạn, ngay bên dưới banner.",
    "when": "Hãy tạo một đơn vị quảng cáo trong tài khoản AdSense của bạn, sau đó sao chép số hiệu của đơn vị đó vào đây.",
    "click": "Thông tin này sẽ được lưu khi bạn nhấn [[Save AdSense]]. Nếu bạn để trống, quảng cáo sẽ không hiển thị ở đầu trang.",
    "care": "Chỉ nhập số, từ 6 đến 20 chữ số. Không dán toàn bộ mã quảng cáo.",
    "like": "Đó là số hiệu của khung tranh treo ngay dưới mái hiên cửa hàng của bạn."
  },
  "help.site.ads_left": {
    "t": "Mã định danh đơn vị quảng cáo bên trái (tùy chọn)",
    "what": "Số thứ tự của vị trí quảng cáo thứ hai ở cột bên trái trang web của bạn.",
    "when": "Chỉ điền vào mục này nếu da của bạn có cột bên trái, ví dụ như da tối màu.",
    "click": "Nó được lưu khi bạn nhấn [[Save AdSense]]. Nếu giao diện của bạn không có cột bên trái, quảng cáo này sẽ không hiển thị, ngay cả khi có số ở đây.",
    "care": "Chỉ hiển thị số, từ 6 đến 20 chữ số. Nếu sau này bạn chuyển sang giao diện không có cột bên trái, quảng cáo này sẽ tự động biến mất.",
    "like": "Đây là khung tranh thứ hai, nhưng chỉ những cửa hàng có tường bên hông mới có đủ chỗ để treo nó."
  },
  "help.site.ads_on": {
    "t": "Hiển thị quảng cáo trên trang web của tôi",
    "what": "Công tắc bật/tắt cho tất cả quảng cáo trên trang web của bạn.",
    "when": "Tích chọn ô này khi ID của bạn đã sẵn sàng. Bỏ tích chọn để tạm dừng quảng cáo mà không làm mất ID của bạn.",
    "click": "Mọi thứ sẽ không thay đổi cho đến khi bạn nhấn [[Save AdSense]]. Sau khi lưu, quảng cáo sẽ xuất hiện trên trang web của bạn trong vòng 30 giây, hoặc biến mất nếu bạn bỏ chọn tùy chọn này.",
    "care": "Không thể bật tính năng này nếu không có ID nhà xuất bản. ID của bạn vẫn hiển thị trong các ô khi quảng cáo bị tắt.",
    "like": "Đây là công tắc đèn cho các khung tranh trưng bày trong cửa sổ cửa hàng của bạn."
  },
  "help.site.ads_save": {
    "t": "Lưu AdSense",
    "what": "Lưu trữ mọi thứ trong thẻ AdSense Google: ba ID và dấu tích bật/tắt.",
    "when": "Hãy nhấn vào nút đó sau khi bạn thay đổi bất kỳ thông tin nào trên thẻ đó.",
    "click": "Các con số được kiểm tra trước. Nếu có bất kỳ số nào không chính xác, một thông báo màu đỏ sẽ hiện lên và dữ liệu không được lưu. Nếu mọi thứ đều ổn, quảng cáo sẽ xuất hiện trên trang web của bạn (hoặc biến mất) trong vòng 30 giây.",
    "care": "Quảng cáo có thể vẫn trống trong một thời gian ngay cả sau khi đã lưu. Đó là do Google quyết định, chứ không phải trang web của bạn. Hãy kiểm tra tài khoản AdSense của bạn nếu chúng không bao giờ xuất hiện.",
    "like": "Họ đang trao hợp đồng quảng cáo đã ký cho nhà quảng cáo."
  },
  "help.site.ads_txt": {
    "t": "ads.txt",
    "what": "Một trang nhỏ Google kiểm tra để đảm bảo rằng các quảng cáo trên trang web của bạn thực sự thuộc về bạn. Trang web của bạn tự tạo ra trang này dựa trên ID nhà xuất bản của bạn.",
    "when": "Bạn không cần làm gì cả. Chỉ cần mở liên kết nếu AdSense yêu cầu bạn xác nhận.",
    "click": "Liên kết này sẽ mở trang đó trong một tab mới để bạn có thể xem. Nó hiển thị một dòng với ID Nhà xuất bản của bạn. Bạn không thể chỉnh sửa nó ở đây — nó sẽ giữ nguyên ID mà bạn đã lưu.",
    "care": "Nếu không lưu ID nhà xuất bản, trang sẽ trống. Sau khi bạn thay đổi ID, Google có thể mất một lúc mới nhận ra.",
    "like": "Giấy phép được dán bên trong cửa sổ cửa hàng của bạn là bằng chứng chứng minh rằng bạn được phép dán những tấm áp phích đó ở đó."
  },
  "help.site.country": {
    "t": "Quốc gia mà bạn đang hoạt động",
    "what": "Quốc gia nơi bạn sáng tác nhạc. aimusiclist.com sử dụng thông tin này để xếp hạng nghệ sĩ của bạn tại quốc gia đó.",
    "when": "Chọn tùy chọn này nếu bạn muốn tên mình xuất hiện trong bảng xếp hạng quốc gia. Đây là tùy chọn.",
    "click": "Thông tin sẽ được lưu khi bạn nhấn [[Save site info]]. Nếu bạn để nguyên tùy chọn — Chưa thiết lập —, bạn chỉ xuất hiện trong bảng xếp hạng Toàn cầu.",
    "care": "Hãy chỉ chọn một quốc gia, quốc gia mà bạn thực sự làm việc. Bạn có thể thay đổi sau này.",
    "like": "Đây là quốc kỳ của quốc gia bạn trên gian hàng tại chợ lớn (aimusiclist.com), để khách hàng từ quê nhà có thể tìm thấy bạn."
  },
  "help.site.fields": {
    "t": "Các trường bổ sung (từ aimusiclist.com)",
    "what": "Hiển thị danh sách các ô bổ sung (ví dụ: Tâm trạng) mà trang web của bạn nhận được từ aimusiclist.com. Các ô này xuất hiện trong mục \"Thông tin bổ sung\" khi bạn tải lên hoặc chỉnh sửa bài hát, và trong Thông tin trang web.",
    "when": "Hãy xem ở đây nếu bạn thắc mắc tại sao một hộp mới xuất hiện, hoặc tại sao một hộp mà bạn mong đợi lại biến mất.",
    "click": "Thẻ này chỉ hiển thị trạng thái. Dòng chữ cho biết phiên bản danh sách, số lượng ô và thời điểm được kiểm tra lần cuối. Trang web của bạn tự động kiểm tra mỗi ngày một lần, vì vậy bạn không cần làm gì cả.",
    "care": "Nếu việc tạo danh sách mới thất bại, một thông báo màu đỏ sẽ hiển thị lý do. Trang web của bạn vẫn tiếp tục sử dụng danh sách hợp lệ gần nhất và việc tải lên vẫn hoạt động bình thường.",
    "like": "Đây là đơn đặt hàng mà siêu thị lớn (aimusiclist.com) gửi đến mọi cửa hàng, ghi rõ cần dán nhãn gì lên đĩa nhạc."
  },
  "help.site.fields_update": {
    "t": "Cập nhật các trường",
    "what": "Hãy hỏi aimusiclist.com để có danh sách các hộp bổ sung mới nhất ngay bây giờ, thay vì chờ đến khi kiểm tra hàng ngày.",
    "when": "Hãy nhấn vào nút này khi aimusiclist.com thông báo về một sản phẩm mới và bạn muốn sở hữu nó ngay hôm nay.",
    "click": "Một thông báo ngắn sẽ cho bạn biết kết quả: đã cập nhật (với phiên bản mới), đã cập nhật hoặc lý do thất bại. Nếu danh sách thay đổi, màn hình sẽ được vẽ lại để hiển thị các ô mới.",
    "care": "Bạn có thể nhấn nút một lần mỗi phút. Nếu nhấn lại quá sớm, bạn sẽ được thông báo phải đợi bao nhiêu giây. Câu trả lời của bạn trong các ô cũ sẽ không bao giờ bị mất.",
    "like": "Thay vì chờ thư gửi vào sáng hôm sau, họ gọi điện cho thị trường lớn để hỏi: \"Có mẫu đơn đặt hàng mới không?\"."
  },
  "help.site.sns": {
    "t": "Mạng xã hội",
    "what": "Địa chỉ mạng xã hội của bạn. Năm ô đầu tiên là cố định: YouTube, Instagram, TikTok, Facebook và X.",
    "when": "Thêm vào đây những nơi bạn đăng tải nhạc hoặc trò chuyện với người hâm mộ. Để trống một ô nếu bạn không sử dụng địa điểm đó.",
    "click": "Nhập địa chỉ đầy đủ bắt đầu bằng https:// và nhấp chuột ra ngoài khung. Nó sẽ tự động lưu lại. Khách truy cập sẽ tìm thấy tất cả chúng trên trang \"Liên kết\" của trang web của bạn. aimusiclist.com hiển thị các biểu tượng nhỏ bên cạnh các bài hát của bạn. Bỏ chọn ô để xóa biểu tượng đó.",
    "care": "Địa chỉ phải thuộc về mạng xã hội đó. Ví dụ, ô YouTube chỉ chấp nhận địa chỉ YouTube. Tối đa 200 ký tự. Địa chỉ sai sẽ hiển thị màu đỏ và không được lưu – địa chỉ hợp lệ cuối cùng sẽ được giữ lại.",
    "like": "Đó là tấm bảng nhỏ bên cạnh cửa hàng: \"Bạn cũng có thể tìm thấy chúng tôi ở đây.\""
  },
  "help.site.sns_tools": {
    "t": "Lên · Xuống · Xóa",
    "what": "Các nút trên mỗi hàng \"Mạng xã hội khác\". [[Up]] và [[Down]] thay đổi thứ tự. [[Remove]] xóa hàng đó đi.",
    "when": "Hãy sử dụng chúng để ưu tiên hiển thị các mạng xã hội quan trọng nhất hoặc loại bỏ những mạng xã hội bạn không còn sử dụng nữa.",
    "click": "Thay đổi được lưu ngay lập tức và trang \"Liên kết\" của bạn sẽ hiển thị thứ tự mới. [[Remove]] xóa hàng ngay lập tức, không cần hỏi trước.",
    "care": "Địa chỉ đã xóa sẽ biến mất. Để khôi phục, hãy thêm lại một hàng và nhập địa chỉ. Năm ô cố định không thể di chuyển; chúng luôn được đặt ở vị trí đầu tiên.",
    "like": "Nó giống như việc di chuyển các ghi chú trên bảng cạnh cửa, hoặc bóc một ghi chú ra vậy."
  },
  "help.site.sns_more": {
    "t": "Mạng xã hội khác",
    "what": "Có chỗ cho tối đa 5 mạng xã hội khác không nằm trong 5 ô cố định, chẳng hạn như SoundCloud, Spotify, Threads hoặc Discord.",
    "when": "Hãy sử dụng nó khi bạn đang hoạt động trên một dịch vụ ngoài năm dịch vụ lớn nhất.",
    "click": "Trong mỗi hàng, trước tiên hãy chọn dịch vụ từ danh sách, sau đó nhập địa chỉ của dịch vụ đó. Thông tin sẽ tự động được lưu khi bạn nhấp chuột ra ngoài ô. Các liên kết này sẽ xuất hiện trên trang \"Liên kết\" của bạn theo thứ tự này. Trên aimusiclist.com, tất cả chúng đều dùng chung một biểu tượng 🔗.",
    "care": "Mỗi dịch vụ chỉ được chọn một lần. Ô địa chỉ sẽ bị khóa cho đến khi bạn chọn một dịch vụ. Việc thay đổi dịch vụ trong cùng một hàng sẽ xóa địa chỉ đã lưu, vì vậy hãy nhập lại.",
    "like": "Đó là khoảng trống bổ sung trên bảng hiệu cạnh cửa, dành cho những vị trí nhỏ hơn giúp mọi người dễ dàng tìm thấy bạn."
  },
  "help.site.sns_add": {
    "t": "+ Thêm các mạng xã hội khác",
    "what": "Thêm một hàng trống vào mục \"Mạng xã hội khác\".",
    "when": "Nhấn vào nút này khi bạn muốn thêm một dịch vụ không có trong năm ô cố định.",
    "click": "Một hàng mới hiện ra với danh sách dịch vụ sẵn sàng để lựa chọn. Chưa có gì được lưu lại cho đến khi bạn chọn một dịch vụ và nhập địa chỉ của dịch vụ đó. Khi đã có đủ 5 hàng, nút sẽ chuyển sang màu xám.",
    "care": "Một hàng trống bạn để lại sẽ không được lưu lại. Nó sẽ biến mất vào lần mở trang tiếp theo.",
    "like": "Nó giống như việc ghim một tờ giấy trắng lên bảng cạnh cửa, sẵn sàng để viết lên."
  },
  "help.site.sns_view": {
    "t": "Xem trang Liên kết",
    "what": "Mở trang \"Liên kết\" của trang web, trang mà khách truy cập xem tất cả các liên kết mạng xã hội của bạn.",
    "when": "Hãy sử dụng công cụ này để kiểm tra xem danh sách mạng xã hội của bạn trông như thế nào đối với khách truy cập.",
    "click": "Trang sẽ mở trong một tab mới. Không có gì thay đổi ở đây. Nút này chỉ hiển thị sau khi ít nhất một địa chỉ mạng xã hội được lưu.",
    "like": "Nó giống như việc bước ra ngoài để nhìn bảng hiệu cạnh cửa theo cách mà khách hàng nhìn thấy."
  },
  "help.guestbook.title": {
    "t": "Sổ lưu bút",
    "what": "Một khu vực trên trang web của bạn nơi khách truy cập để lại những lời nhắn ngắn. Họ có thể viết về toàn bộ trang web hoặc về một bài hát cụ thể.",
    "when": "Khi bạn muốn nghe phản hồi từ người nghe, hoặc kiểm tra và chỉnh sửa tin nhắn của họ.",
    "click": "Đây chỉ là tiêu đề. Sử dụng [[Open the guestbook]] để bật hoặc tắt, và danh sách tin nhắn bên dưới để đọc và xóa.",
    "like": "Giống như một cuốn sổ đặt ở cửa hàng, nơi khách hàng viết vài lời tốt đẹp."
  },
  "help.guestbook.on": {
    "t": "Mở sổ lưu bút",
    "what": "Bật hoặc tắt sổ lưu bút cho khách truy cập. Khi bật, họ sẽ thấy **Sổ lưu bút** trong menu của bạn và nút 💬 trên mỗi bài hát.",
    "when": "Hãy bật tính năng này để nghe phản hồi từ người nghe. Tắt đi nếu bạn nhận được quá nhiều tin nhắn không mong muốn hoặc cần nghỉ ngơi.",
    "click": "Cài đặt được lưu ngay lập tức. Khách truy cập sẽ thấy sự thay đổi trong khoảng 30 giây. Bạn có thể khôi phục lại cài đặt cũ bất cứ lúc nào.",
    "care": "Tắt chức năng này chỉ ẩn nó đi thôi. Các tin nhắn cũ vẫn được lưu giữ và bạn vẫn có thể đọc và xóa chúng tại đây.",
    "like": "Giống như việc bạn để cuốn sổ tay ở cửa hàng, hoặc mang nó vào trong một lúc."
  },
  "help.guestbook.list": {
    "t": "Tin nhắn",
    "what": "Tất cả các tin nhắn trong sổ lưu niệm, tin nhắn mới nhất được hiển thị trước, 20 tin nhắn mỗi trang. Mỗi tin nhắn hiển thị tên, thời gian và bài hát mà nó đề cập đến (♪). Số bên cạnh tiêu đề là tổng số tin nhắn.",
    "when": "Hãy thường xuyên kiểm tra để đọc tin nhắn mới và xóa những tin nhắn không cần thiết.",
    "click": "Sử dụng các nút trang ở phía dưới để xem các tin nhắn cũ hơn. Bạn không thể chỉnh sửa hoặc trả lời tin nhắn ở đây, chỉ có thể xóa tin nhắn.",
    "care": "Khách truy cập có thể viết tên (tối đa 20 ký tự) và tin nhắn (tối đa 500 ký tự), không được chứa liên kết, và tối đa 50 tin nhắn mỗi ngày cho mỗi người. Tin nhắn sẽ được lưu giữ cho đến khi bạn xóa chúng, ngay cả khi sổ lưu bút đã tắt. **Bài hát đã xóa** có nghĩa là bài hát đó đã bị gỡ bỏ.",
    "like": "Giống như lật từng trang sổ tay ở cửa hàng, trang mới nhất luôn ở trước."
  },
  "help.guestbook.delete": {
    "t": "Xóa bỏ",
    "what": "Xóa một tin nhắn trong sổ lưu bút.",
    "when": "Dùng cho những tin nhắn thô tục, thư rác hoặc bất cứ điều gì bạn không muốn khách truy cập đọc được.",
    "click": "Bạn được yêu cầu xác nhận. Sau đó, thông báo sẽ biến mất khỏi trang web của bạn ngay lập tức và danh sách được cập nhật.",
    "care": "Việc này không thể đảo ngược. Xóa tin nhắn không ngăn người đó viết lại.",
    "like": "Giống như việc xé một trang giấy ra khỏi cuốn sổ tay đặt ở cửa hàng của bạn."
  },
  "help.domain.mm": {
    "t": "Tên miền của tôi",
    "what": "Hiện tại trang web của bạn đã hiển thị địa chỉ. Trang web của bạn nằm trên meshmelo, vì vậy tên miền của bạn được kết nối với cổng meshmelo, chứ không phải ở đây.",
    "when": "Khi bạn muốn kiểm tra địa chỉ của mình, hoặc muốn sử dụng tên miền riêng như mymusic.com.",
    "click": "Không có gì để nhấn ở đây cả. Hãy truy cập my.meshmelo.com → Trang của tôi → Tên miền của tôi. Nếu bạn chưa thấy, nó sẽ sớm xuất hiện thôi.",
    "care": "Địa chỉ hiện tại của bạn vẫn hoạt động bình thường, vì vậy bạn có thể chia sẻ nó mà không cần lo lắng.",
    "like": "Giống như việc thuê một cửa hàng trong trung tâm thương mại lớn: văn phòng của trung tâm thương mại sẽ lo việc lắp đặt biển hiệu đường phố mới cho bạn."
  },
  "help.domain.title": {
    "t": "Tên miền của tôi",
    "what": "Hiện tại, trang web của bạn sẽ hiển thị địa chỉ và cho phép bạn sử dụng địa chỉ riêng (tên miền) như mymusic.com thay vì địa chỉ dài miễn phí.",
    "when": "Khi bạn đã mua một tên miền, hoặc muốn có một địa chỉ ngắn gọn dễ nhớ. Google AdSense cũng yêu cầu tên miền của riêng bạn.",
    "click": "Đây chỉ là tiêu đề. Hãy làm theo hướng dẫn bên dưới, sau đó nhập tên miền của bạn và nhấn [[Kết nối]]. Khi kết nối thành công, bạn sẽ thấy biểu tượng ✓ và tên miền của mình.",
    "care": "Nếu màn hình hiển thị địa chỉ được thiết lập trong cài đặt Cloudflare, bạn không thể thay đổi địa chỉ đó ở đây và ô đó sẽ bị làm mờ.",
    "like": "Giống như việc di chuyển biển hiệu cửa hàng của bạn từ một số nhà dài ở con phố nhỏ sang một địa chỉ dễ nhận biết hơn ở phố chính."
  },
  "help.domain.guide": {
    "t": "Cách kết nối tên miền của riêng bạn",
    "what": "Hướng dẫn từng bước cách đăng ký tên miền và trỏ nó đến trang web của bạn. Quá trình này mất khoảng 10 phút.",
    "when": "Hãy đọc kỹ trước khi nhấn [[Kết nối]]. Các bước trên màn hình Cloudflare phải được thực hiện trước.",
    "click": "Nhấn vào tiêu đề để mở hoặc đóng các bước. Các bước sẽ được mở cho đến khi tên miền của bạn được kết nối.",
    "care": "Bạn tự trả tiền cho tên miền. Cloudflare có thể đổi tên màn hình của nó, vì vậy hãy tìm tên gần giống nhất. Nếu bạn đang sử dụng phiên bản hosting của trang web, các bước này dành cho bảng điều khiển hosting của bạn.",
    "like": "Giống như một bản đồ chỉ dẫn cách treo biển hiệu cửa hàng tại địa chỉ mới."
  },
  "help.domain.input": {
    "t": "Tên miền của tôi (hộp)",
    "what": "Nhập tên miền bạn đã mua, ví dụ như mymusic.com.",
    "when": "Sau khi bạn hoàn thành các bước trong hướng dẫn và trang web của bạn đã mở được tại tên miền đó.",
    "click": "Sẽ không có gì xảy ra cho đến khi bạn nhấn [[Kết nối]].",
    "care": "Chỉ nhập tên miền. Không thêm http://, https:// hoặc dấu / kèm theo các từ khác sau đó. Để chuyển sang tên miền khác sau này, hãy nhập tên miền mới và kết nối lại.",
    "like": "Giống như việc viết địa chỉ mới lên biển hiệu cửa hàng của bạn vậy."
  },
  "help.domain.connect": {
    "t": "Kết nối",
    "what": "Chương trình kiểm tra xem trang web của bạn có thực sự mở tại tên miền bạn đã nhập hay không, sau đó đặt tên miền đó làm địa chỉ chính của trang web.",
    "when": "Sau khi bạn nhập tên miền của mình vào ô.",
    "click": "Quá trình kiểm tra có thể mất đến 30 giây. Nếu thành công, tên miền của bạn sẽ được lưu và aimusiclist.com sẽ tự động thay đổi địa chỉ của bạn. Khách truy cập khi mở địa chỉ miễn phí cũ sẽ được chuyển hướng đến tên miền của bạn. Trên phiên bản hosting, địa chỉ cũ vẫn hoạt động bình thường.",
    "care": "Nếu bạn thấy lỗi, có thể trang web của bạn chưa mở tại tên miền đó hoặc nó mở một trang web khác. Hãy kiểm tra các bước hướng dẫn, đợi vài phút và thử lại. Các bài hát đã có trong danh sách phát của người dùng vẫn tiếp tục phát.",
    "like": "Giống như việc bưu điện kiểm tra địa chỉ cửa hàng mới của bạn trước khi chuyển tiếp thư đến đó."
  },
  "help.menus.form": {
    "t": "Thêm menu / Chỉnh sửa menu",
    "what": "Tại đây, bạn tạo các nút menu mà khách truy cập nhìn thấy ở đầu trang web của bạn. Mỗi menu hiển thị các bài hát thuộc một thể loại nhất định.",
    "when": "Hãy sử dụng chức năng này khi bạn muốn khách truy cập tìm kiếm bài hát của mình theo thể loại, ví dụ như menu nhạc R&B và menu nhạc Hip-hop.",
    "click": "Chọn 1. thể loại chính, 2. thể loại chi tiết nếu muốn, 3. tên nếu muốn, sau đó nhấn [[Save menu]]. Số bên cạnh nút hiển thị số lượng bài hát trên trang web của bạn sẽ xuất hiện trong menu đó.",
    "care": "Các thể loại được lấy từ danh sách trên aimusiclist.com, vì vậy menu của bạn sẽ khớp với trang web chính. Bạn có thể có tối đa 30 menu, và chỉ một menu cho mỗi thể loại.",
    "like": "Nó giống như việc bạn dán nhãn lên kệ trong cửa hàng: 'Nhạc R&B ở đây', 'Nhạc Hip-hop ở đó'."
  },
  "help.menus.main": {
    "t": "1. Thể loại chính",
    "what": "Các thể loại chính trong menu này bao gồm R&B, Hip-hop hoặc Dance. Danh sách giống như trên aimusiclist.com.",
    "when": "Luôn chọn mục này đầu tiên. Không thể lưu thực đơn nếu thiếu mục này.",
    "click": "Sau khi bạn chọn, danh sách thể loại chi tiết sẽ hiện ra với các thể loại thuộc thể loại đó, và bạn sẽ thấy có bao nhiêu bài hát của mình thuộc các thể loại đó.",
    "care": "Nếu bạn chỉ chọn một thể loại chính, menu sẽ hiển thị các bài hát có đúng thể loại đó trong một trong ba ô thể loại.",
    "like": "Đó là tấm biển lớn phía trên một lối đi trong cửa hàng của bạn, ví dụ như chữ 'R&B'."
  },
  "help.menus.sub": {
    "t": "2. Thể loại chi tiết",
    "what": "Một thể loại nhỏ hơn nằm trong thể loại chính, nhằm thu hẹp menu. Tính năng này là tùy chọn.",
    "when": "Hãy sử dụng chức năng này khi bạn có nhiều bài hát thuộc cùng một thể loại chính và muốn có một menu chỉ dành cho một kiểu nhạc cụ thể trong thể loại đó.",
    "click": "Danh sách chỉ hiển thị các thể loại chi tiết của thể loại chính mà bạn đã chọn. Hãy để nguyên là 'Tất cả của…' để sử dụng thể loại chính. Số lượng bài hát bên cạnh [[Save menu]] sẽ thay đổi ngay lập tức.",
    "care": "Menu sẽ có màu xám cho đến khi bạn chọn thể loại chính. Khi chọn thể loại chi tiết, menu chỉ hiển thị những bài hát có thể loại chi tiết đó trong một trong các ô thể loại của chúng.",
    "like": "Đó là một nhãn nhỏ trên một kệ hàng bên trong lối đi."
  },
  "help.menus.label": {
    "t": "3. Tên thực đơn",
    "what": "Từ mà khách truy cập nhìn thấy trên nút menu. Việc chọn từ này là tùy chọn.",
    "when": "Nếu muốn tên thân thiện hơn, hãy viết tên riêng của bạn, ví dụ như 'Night Songs'. Để trống nếu muốn dùng tên thể loại nhạc.",
    "click": "Thông tin này được lưu khi bạn nhấn [[Save menu]]. Nếu để trống, nút sẽ hiển thị tên thể loại, và tên đó sẽ thay đổi tùy thuộc vào ngôn ngữ của người truy cập.",
    "care": "Tối đa 30 ký tự. Tên bạn nhập sẽ được hiển thị giống nhau trong mọi ngôn ngữ.",
    "like": "Đó là những từ ngữ bạn tự viết trên nhãn kệ hàng."
  },
  "help.menus.save": {
    "t": "Lưu menu",
    "what": "Lưu lại menu bạn đã thiết lập ở trên.",
    "when": "Nhấn vào đó sau khi bạn chọn thể loại (và tên nếu muốn).",
    "click": "Nó được lưu ngay lập tức. Menu mới được thêm vào cuối danh sách. Khách truy cập sẽ thấy menu mới trên trang web của bạn trong vòng 30 giây.",
    "care": "Bạn không thể tạo hai menu cho cùng một thể loại. Khi đã có 30 menu, bạn không thể thêm nữa. Một thông báo màu đỏ sẽ cho bạn biết lý do.",
    "like": "Bạn dán nhãn đã hoàn thành lên kệ."
  },
  "help.menus.order": {
    "t": "Lên / Xuống",
    "what": "Di chuyển một mục menu lên hoặc xuống một vị trí trong dãy menu.",
    "when": "Hãy sử dụng nó để ưu tiên hiển thị thực đơn quan trọng nhất của bạn.",
    "click": "Đơn hàng được lưu ngay lập tức. Khách truy cập sẽ thấy đơn hàng mới trong vòng 30 giây.",
    "care": "Menu đầu tiên không thể di chuyển lên và menu cuối cùng không thể di chuyển xuống, vì vậy các nút đó có màu xám.",
    "like": "Bạn đổi vị trí hai nhãn kệ để kệ được ưa chuộng hơn được đặt lên trước."
  },
  "help.menus.edit": {
    "t": "Biên tập",
    "what": "Mở menu này trong ô phía trên để bạn có thể thay đổi thể loại hoặc tên.",
    "when": "Sử dụng chức năng này để đổi tên menu hoặc chuyển hướng menu sang thể loại khác.",
    "click": "Trang sẽ di chuyển đến ô chứa menu này. Thay đổi menu và nhấn [[Save menu]]; nó sẽ giữ nguyên vị trí trong danh sách. Nhấn [[Hủy]] sẽ đóng trang mà không thay đổi gì.",
    "like": "Bạn gỡ nhãn kệ xuống, viết lại nội dung, rồi đặt lại vào vị trí cũ."
  },
  "help.menus.delete": {
    "t": "Xóa bỏ",
    "what": "Xóa menu này khỏi trang web của bạn.",
    "when": "Hãy sử dụng nó khi bạn không cần đến thực đơn nữa.",
    "click": "Nó sẽ hỏi bạn trước. Sau đó, menu sẽ biến mất ngay lập tức, và khách truy cập sẽ không còn nhìn thấy nó trong vòng 30 giây.",
    "care": "Chỉ có menu biến mất. Các bài hát vẫn còn trên trang web của bạn và vẫn có thể được tìm thấy trên Trang chủ hoặc trong các menu khác. Bạn không thể hoàn tác, nhưng bạn có thể tạo lại menu.",
    "like": "Bạn lấy một nhãn đĩa ra khỏi kệ. Các đĩa nhạc trên kệ vẫn ở nguyên vị trí."
  },
  "help.menus.list": {
    "t": "Menu trên trang web của bạn",
    "what": "Tất cả các menu của bạn, theo thứ tự khách truy cập nhìn thấy ở đầu trang web. Số trong ngoặc đơn cho biết bạn có bao nhiêu menu trong tổng số 30 menu.",
    "when": "Hãy xem ở đây để kiểm tra, sắp xếp lại, thay đổi hoặc xóa thực đơn.",
    "click": "Mỗi hàng hiển thị tên menu, thể loại và số lượng bài hát trong đó. Khách truy cập luôn thấy mục 'Trang chủ' trước tiên, và 'Album' nếu bạn có album.",
    "care": "'Thể loại không có trong danh sách' nghĩa là aimusiclist.com không còn thể loại đó nữa. Hãy nhấn [[Edit]] và chọn thể loại khác. Một menu với 0 bài hát vẫn được hiển thị cho khách truy cập, nhưng trống rỗng.",
    "like": "Đây là dãy nhãn kệ trong cửa hàng của bạn, từ trái sang phải."
  },
  "help.tab.menus": {
    "t": "Thực đơn",
    "what": "Menu của trang web. Mỗi mục menu hiển thị các bài hát thuộc một thể loại, được chọn từ danh sách thể loại của aimusiclist.com.",
    "when": "Hãy đến đây để quyết định những gì khách truy cập sẽ thấy trong menu trang web của bạn và thứ tự hiển thị.",
    "click": "Nhấn phím Tab chỉ chuyển đổi chế độ xem. Việc thêm, chỉnh sửa, di chuyển hoặc xóa menu sẽ được lưu ngay lập tức.",
    "care": "Tối đa 30 menu. Trước tiên, hãy chọn thể loại chính, sau đó chọn thể loại phụ nếu muốn, rồi chọn tên (tối đa 30 ký tự, tùy chọn). Việc sử dụng các thể loại của aimusiclist.com giúp trang web của bạn và aimusiclist.com được sắp xếp theo cùng một cách.",
    "like": "Đó chính là những nhãn dán trên kệ hàng trong cửa hàng của bạn: 'Nhạc R&B ở đây, nhạc Hip-hop ở đó.'"
  },
  "help.stats.title": {
    "t": "Thống kê trang web",
    "what": "Tab này hiển thị số lượng người truy cập trang web của bạn và số bài hát họ đã nghe. Bạn cũng có thể xem số liệu từ aimusiclist.com tại đây.",
    "when": "Hãy mở nó lên mỗi ngày hoặc mỗi tuần một lần. Bạn có thể xem những bài hát nào được mọi người yêu thích và liệu trang web của bạn có đang phát triển hay không.",
    "click": "Không có gì thay đổi trên trang web của bạn khi bạn xem. Chọn một khoảng thời gian ở trên cùng, và mọi thẻ bên dưới sẽ hiển thị khoảng thời gian đó.",
    "care": "Hầu hết các lượt tải xuống được tính **một lần mỗi ngày** (sáng sớm, giờ UTC). Bài hát bạn tải lên hôm nay sẽ được tính vào số liệu của ngày mai.",
    "like": "Nó giống như cuốn sổ tay của một chủ cửa hàng. Mỗi sáng bạn ghi lại số lượng khách đến và những bài hát họ đã nghe."
  },
  "help.stats.period": {
    "t": "Thời hạn (7 / 30 / 90 ngày)",
    "what": "Các nút này dùng để chọn số ngày mà các con số cộng lại. Bạn có thể chọn 7 ngày, 30 ngày hoặc 90 ngày.",
    "when": "Chọn 7 ngày để xem những gì đã xảy ra trong tuần này. Chọn 90 ngày để xem bức tranh toàn cảnh trong khoảng ba tháng.",
    "click": "Các số liệu, biểu đồ và bảng trên tab này thay đổi ngay lập tức. Nút màu là nút đang được sử dụng. Không có dữ liệu nào được lưu hoặc gửi đi nơi khác.",
    "care": "Khoảng thời gian kết thúc **hôm qua** (UTC). Ngày hôm nay được hiển thị riêng trong dòng nhỏ **Hôm nay** của mỗi ô. Mũi tên **so với những ngày trước đó** so sánh với cùng số ngày ngay trước đó.",
    "like": "Nó giống như việc bạn chọn đọc bao nhiêu trang trong sổ tay cửa hàng của mình cùng một lúc: một tuần, một tháng, hay ba tháng."
  },
  "help.stats.note.off": {
    "t": "Lượt xem trên trang web của tôi không được tính.",
    "what": "Trên loại hình lưu trữ này, lượt xem trên chính trang web của bạn chưa được tính. Vì vậy, thứ hạng **Phổ biến** của trang web bạn sẽ sử dụng aimusiclist để thay thế.",
    "when": "Thông tin này sẽ tự động hiển thị. Bạn không cần làm gì nếu hài lòng với các số aimusiclist.",
    "click": "Hãy đọc kỹ thông báo. Nếu thông báo nêu tên một bước thiết lập (ví dụ như kết nối thiết bị xử lý âm thanh), thì việc thực hiện bước đó sẽ bật chế độ đếm. Sau đó, số thứ tự sẽ bắt đầu từ ngày tiếp theo.",
    "care": "Các số được nhập trước khi chức năng đếm được bật không thể được điền thêm sau này.",
    "like": "Nó giống như một cửa hàng không có quầy thu ngân. Bạn không thể biết có bao nhiêu khách đến, vì vậy bạn chỉ có thể nhìn vào số liệu của thị trường lớn mà thôi."
  },
  "help.stats.note.dataset": {
    "t": "Chức năng ghi thống kê đã tắt.",
    "what": "Trang web của bạn chưa ghi lại lượt truy cập và lượt phát. Bạn cần bật chức năng đếm lượt truy cập trong tài khoản Cloudflare của mình.",
    "when": "Hãy làm điều đó một lần, khi bạn muốn xem số liệu của trang web của chính mình.",
    "click": "Hãy làm theo các bước trong tin nhắn: tạo kho lưu trữ số liệu thống kê trong Cloudflare với tên chính xác như hiển thị. Sau đó, trên trang GitHub của trang web của bạn, xóa dấu \"#\" ở đầu ba dòng mà tin nhắn hiển thị và nhấn [[Commit changes]]. Trang web của bạn sẽ cập nhật trong 1-3 phút. Số liệu sẽ xuất hiện từ lần thống kê hàng ngày tiếp theo.",
    "care": "Tên phải chính xác là **aml_site_stats**. Nếu bạn bỏ qua bước Cloudflare và chỉ thay đổi ba dòng, quá trình cập nhật trang web sẽ thất bại. Sau đó hãy thêm lại dấu \"#\".",
    "like": "Nó giống như việc lắp đặt một quầy thu ngân ở cửa hàng của bạn. Cho đến khi lắp đặt xong, chưa ai được tính vào số lượng khách."
  },
  "help.stats.note.token": {
    "t": "Khóa sử dụng bị thiếu",
    "what": "Để đọc được số điện thoại của chính mình, trang web của bạn cần khóa sử dụng từ Cloudflare. Hiện tại khóa này chưa có.",
    "when": "Thêm một lần. Mã này cũng hiển thị phòng miễn phí của bạn ở đầu màn hình quản trị.",
    "click": "Vào tab **Thông tin trang web** và dán khóa vào đó. Khóa cần có quyền được hiển thị trong thông báo. Số liệu của bạn sẽ xuất hiện từ lần kiểm đếm hàng ngày tiếp theo.",
    "care": "Hãy tạo khóa trong cùng tài khoản **Cloudflare** với trang web này. Giữ bí mật khóa. Đừng đăng tải nó ở bất cứ đâu.",
    "like": "Nó giống như chìa khóa phòng đo điện. Không có chìa khóa, bạn không thể đọc chỉ số đồng hồ, ngay cả khi nó đang hoạt động."
  },
  "help.stats.note.no_visits": {
    "t": "Lượt truy cập không được tính.",
    "what": "Trên dịch vụ lưu trữ này, các trang được gửi dưới dạng các tệp đã được tạo sẵn. Vì vậy, số lượt truy cập không thể được tính, nhưng số lần phát lại thì có.",
    "when": "Hiện tượng này tự động xuất hiện. Đó là điều bình thường đối với dịch vụ lưu trữ này.",
    "click": "Không có gì để nhấn. Ô và biểu đồ **Lượt truy cập** đang bị ẩn. Số quốc gia, thiết bị và ngôn ngữ được tính dựa trên số lượt chơi.",
    "like": "Nó giống như một cửa hàng không thể đếm được số người bước vào, nhưng lại có thể đếm được mỗi bài hát được bật trên máy phát nhạc."
  },
  "help.stats.note.error": {
    "t": "Không thể đọc được số liệu thống kê.",
    "what": "Lần kiểm đếm cuối cùng không thành công. Lý do được ghi trong tin nhắn.",
    "when": "Điều này sẽ tự xuất hiện khi có sự cố xảy ra.",
    "click": "Nếu hiển thị **Đang hiển thị các số liệu đã lưu gần đây nhất**, bạn sẽ thấy các số liệu hợp lệ gần nhất. Thông thường, việc kiểm đếm hàng ngày tiếp theo sẽ khắc phục được sự cố. Nếu thông báo tương tự vẫn hiển thị trong nhiều ngày, hãy kiểm tra khóa sử dụng trong **Thông tin trang web**.",
    "care": "Những ngày bị mất sẽ không bị coi là mất trắng nếu việc tính toán được khôi phục sớm. Những ngày quá cũ có thể sẽ không quay trở lại.",
    "like": "Nó giống như một buổi sáng khi người đọc công tơ điện không đến. Số liệu đọc của ngày hôm qua vẫn được ghi trên bảng cho đến lần đến tiếp theo."
  },
  "help.stats.updated": {
    "t": "Khi các con số được tạo ra",
    "what": "Dòng này cho biết lần cuối cùng số liệu được kiểm đếm là khi nào. Nó cũng cho biết các con số này chỉ là gần đúng, chứ không chính xác tuyệt đối.",
    "when": "Hãy kiểm tra ở đây khi thấy một con số cũ. Nếu thời gian là từ hôm qua, thì lần kiểm kê tiếp theo vẫn chưa diễn ra.",
    "care": "Số liệu được đếm một lần mỗi ngày, ngay sau 00:00 UTC. Mỗi trang web được tính một phút riêng, như hiển thị ở đây. **Bot** (chương trình robot) và **lượt truy cập của chính bạn** khi bạn đang đăng nhập sẽ không được tính, vì vậy con số sẽ nhỏ hơn một chút so với tổng số lượt nhấp chuột.",
    "like": "Nó giống như ngày tháng được in trên hóa đơn. Nó cho bạn biết khi nào việc kiểm đếm được thực hiện."
  },
  "help.stats.csv.days": {
    "t": "Tải xuống CSV hàng ngày",
    "what": "Thao tác này lưu một tệp với một hàng tương ứng với mỗi ngày trong khoảng thời gian đã chọn: lượt truy cập, lượt phát, lượt phát từ aimusiclist, bài đăng trong sổ khách và số aimusiclist.",
    "when": "Sử dụng nó để lưu giữ số liệu của bạn, hoặc để tạo biểu đồ riêng trong bảng tính như Excel hoặc Google Sheets.",
    "click": "Tệp tin được tạo ngay trên trình duyệt của bạn và được lưu vào thư mục tải xuống. Không có gì trên trang web của bạn thay đổi.",
    "care": "Ngày được tính theo múi giờ UTC. Trước tiên hãy chọn khoảng thời gian (7, 30 hoặc 90 ngày), vì tệp tin sẽ tuân theo khoảng thời gian đó.",
    "like": "Nó giống như việc bạn sao chép các trang trong sổ tay cửa hàng để giữ ở nhà."
  },
  "help.stats.csv.tracks": {
    "t": "Tải xuống bài hát định dạng CSV",
    "what": "Thao tác này lưu một tệp với mỗi hàng tương ứng với một bài hát: thứ hạng, thay đổi thứ hạng, số lần phát, số lần phát từ aimusiclist và aimusiclist cùng thứ hạng.",
    "when": "Sử dụng nó để so sánh các bài hát trong bảng tính hoặc để ghi lại kết quả của từng bài hát.",
    "click": "Tệp tin được tạo ngay trên trình duyệt của bạn và được lưu vào thư mục tải xuống. Không có gì trên trang web của bạn thay đổi.",
    "care": "Các lượt chơi sẽ diễn ra theo khoảng thời gian bạn đã chọn. Các số aimusiclist luôn là số của 7 ngày gần nhất. Các ô trống có nghĩa là không có số nào được nhập.",
    "like": "Nó giống như việc bạn chép danh sách các sản phẩm bán chạy nhất từ ​​tường cửa hàng vào sổ tay của mình vậy."
  },
  "help.stats.refresh": {
    "t": "Làm mới ngay",
    "what": "Nút này sẽ đếm số lượt truy cập vào trang web của bạn và phát lại ngay lập tức, kể cả hôm nay.",
    "when": "Hãy sử dụng chức năng này khi bạn vừa chia sẻ một bài hát và muốn xem mọi người có truy cập hay không. Nếu không có nó, số liệu chỉ thay đổi một lần mỗi ngày.",
    "click": "Sau vài giây, các con số trên tab này sẽ thay đổi. Số lượt phát trong danh sách bài hát và trên trang web của bạn cũng thay đổi. Sau đó, nút sẽ đợi **1 phút** trước khi bạn có thể nhấn lại.",
    "care": "Có giới hạn hàng ngày: **200 lần** mỗi ngày đối với trang web bạn tự cài đặt, **30 lần** mỗi ngày đối với meshmelo. Số aimusiclist không thay đổi khi sử dụng nút này. Chúng vẫn được tính một lần mỗi ngày. Nếu bạn không thấy nút này, nghĩa là dịch vụ lưu trữ của bạn hiện không thể tính số lần truy cập đó.",
    "like": "Nó giống như việc bạn tự kiểm tra công tơ điện giữa trưa, thay vì chờ đến sáng hôm sau để có số liệu."
  },
  "help.stats.tile.visits": {
    "t": "Lượt thăm",
    "what": "Số lần người dùng truy cập trang web của bạn trong khoảng thời gian đã chọn. Con số này được hiển thị dưới dạng **khoảng**, vì nó chỉ là gần đúng chứ không chính xác.",
    "when": "Hãy xem liệu việc chia sẻ của bạn trên mạng xã hội có thu hút được người xem hay không.",
    "click": "Dưới con số lớn, bạn sẽ thấy một mũi tên: hướng lên (▲) nghĩa là nhiều hơn số ngày trước, hướng xuống (▼) nghĩa là ít hơn. **Hôm nay** hiển thị số liệu của ngày hôm nay sau [[Làm mới ngay]], hoặc – nếu chưa được tính.",
    "care": "Số lượng càng lớn càng tốt. Số lượt truy cập từ bot và lượt truy cập của chính bạn sẽ không được tính. Nếu số lượt truy cập đột nhiên tăng vọt trong một ngày, hãy kiểm tra mục **Nguồn khách truy cập** bên dưới để xem lý do.",
    "like": "Đó là số lượng khách hàng đã bước qua cửa hàng của bạn."
  },
  "help.stats.tile.plays": {
    "t": "Các trận đấu bắt đầu",
    "what": "Trong khoảng thời gian đã chọn, bài hát đó đã được phát lại từ đầu bao nhiêu lần trên trang web của bạn?",
    "when": "Đây là chỉ số quan trọng nhất đối với âm nhạc của bạn. Hãy theo dõi nó sau khi bạn tải lên bài hát mới.",
    "click": "Mũi tên so sánh với những ngày trước đó. **Hôm nay** hiển thị số của ngày hôm nay sau [[Làm mới ngay]].",
    "care": "Càng nhiều càng tốt. Một lượt phát được tính khi bài hát **bắt đầu**, ngay cả khi người nghe dừng sớm. Lượt phát của bạn khi đang đăng nhập sẽ không được tính. Nếu số lượt phát bằng 0 trong nhiều ngày, hãy kiểm tra các thông báo ở đầu thẻ này.",
    "like": "Đó là số lần một đĩa nhạc được đặt lên máy phát nhạc trong cửa hàng của bạn."
  },
  "help.stats.tile.plays_aml": {
    "t": "Phát từ aimusiclist",
    "what": "Các bài hát được phát trên aimusiclist.com được gửi từ trang web của bạn. Con số này thể hiện số lượt phát đó.",
    "when": "Hãy nhìn vào đó để thấy thị trường lớn giúp âm nhạc của bạn được nhiều người biết đến như thế nào.",
    "click": "Nhìn vào thì chẳng có gì thay đổi cả. Mũi tên chỉ sự so sánh với những ngày trước đó.",
    "care": "Càng lớn càng tốt. Những lượt chơi này **không** được sử dụng cho thứ hạng **Phổ biến** của trang web của bạn. aimusiclist có bảng xếp hạng riêng cho chúng. Con số này có thể hơi khác so với thẻ aimusiclist bên dưới, vì hai vị trí được tính theo cách khác nhau.",
    "like": "Những bản thu âm của bạn được phát tại một quầy hàng ở chợ lớn, nhưng âm nhạc lại phát ra từ chính kho hàng của bạn. Điều này giúp thống kê số lần điều đó xảy ra."
  },
  "help.stats.tile.gb": {
    "t": "Bài đăng trong sổ khách",
    "what": "Có bao nhiêu bài đăng mới được mọi người viết trong sổ lưu bút của bạn trong khoảng thời gian đã chọn?",
    "when": "Hãy xem có bao nhiêu người hâm mộ đang trò chuyện với bạn.",
    "click": "Nhìn vào thì chẳng có gì thay đổi cả. Mũi tên chỉ sự so sánh với những ngày trước đó.",
    "care": "Số lượng bài đăng nhiều hơn thường đồng nghĩa với việc có nhiều người hâm mộ hơn. Bài đăng của chính bạn sẽ không được tính. Nếu số lượng bài đăng tăng đột biến, hãy kiểm tra mục thư rác (bài đăng không cần thiết).",
    "like": "Đó là số lượng lời nhắn mà khách hàng để lại trong sổ lưu bút đặt cạnh cửa hàng của bạn."
  },
  "help.stats.trend": {
    "t": "Biểu đồ theo ngày",
    "what": "Mỗi thanh biểu thị một ngày. Thanh càng cao nghĩa là số lượt chơi (hoặc lượt truy cập) trong ngày đó càng nhiều.",
    "when": "Hãy sử dụng nó để tìm những ngày tốt lành. Ví dụ, ngày bạn chia sẻ một bài hát trên mạng xã hội.",
    "click": "Di chuột vào thanh (hoặc chạm vào thanh) để xem ngày và số. Phía bên trái hiển thị tỷ lệ.",
    "care": "Ngày được tính theo giờ UTC, vì vậy một ngày có thể bắt đầu vào buổi sáng hoặc buổi tối ở nơi bạn sống. Ô trống có nghĩa là 0 hoặc ngày đó không được tính.",
    "like": "Nó giống như một hàng tiền xu xếp chồng lên nhau, mỗi chồng tượng trưng cho một ngày. Những chồng tiền xu càng cao thì ngày càng bận rộn."
  },
  "help.stats.table_view": {
    "t": "Hiển thị dưới dạng bảng",
    "what": "Thao tác này hiển thị các số liệu giống như một bảng: mỗi hàng tương ứng với một ngày, ngày mới nhất được hiển thị trước.",
    "when": "Hãy sử dụng nó khi bạn muốn có số liệu chính xác cho một ngày, hoặc khi biểu đồ khó đọc.",
    "click": "Nhấn vào đó để mở hoặc đóng bảng. Không có gì được lưu lại.",
    "care": "Chỉ hiển thị khoảng thời gian đã chọn. Để giữ lại các số, hãy sử dụng [[Tải CSV theo ngày]] ở phía dưới.",
    "like": "Vẫn là cuốn sổ tay cửa hàng đó, nhưng các hình ảnh đã được thay thế bằng những dòng số đơn giản."
  },
  "help.stats.col.date": {
    "t": "Ngày (UTC)",
    "what": "Mỗi hàng đều được tính theo ngày. Ngày được tính theo múi giờ **UTC**, giờ chuẩn thế giới.",
    "when": "Bạn có thể dùng nó để ghép một ngày với một hoạt động bạn đã làm, ví dụ như chia sẻ một bài hát.",
    "care": "UTC không phải là giờ địa phương của bạn. Ở Hàn Quốc, một ngày theo giờ UTC bắt đầu lúc 9 giờ sáng. Vì vậy, một bài hát được chia sẻ vào đêm khuya có thể được tính vào ngày hôm sau hoặc ngày hôm trước.",
    "like": "Nó giống như một cuốn sổ tay cửa hàng luôn sử dụng cùng một đồng hồ thế giới, vì vậy mọi cửa hàng trong siêu thị lớn đều ghi cùng một ngày tháng."
  },
  "help.stats.col.rank": {
    "t": "Thứ hạng",
    "what": "Vị trí bài hát trong bảng xếp hạng **Phổ biến** trên trang web của bạn. Bên cạnh đó, bạn có thể thấy thứ hạng của bài hát đã thay đổi như thế nào so với ngày hôm trước.",
    "when": "Hãy xem danh sách này để tìm những bài hát yêu thích nhất của bạn.",
    "click": "Không có gì để nhấn. ▲ nghĩa là tăng bấy nhiêu bậc, ▼ nghĩa là giảm, – nghĩa là không thay đổi. **NEW** là mục mới. **RE** nghĩa là quay lại sau khi bị xóa khỏi danh sách.",
    "care": "Số càng nhỏ càng tốt (1 là cao nhất). – có nghĩa là bài hát không có thứ hạng vì không ai nghe nó trong 7 ngày qua.",
    "like": "Đó là con số trên danh sách bán chạy nhất trong cửa sổ cửa hàng của bạn."
  },
  "help.stats.col.plays": {
    "t": "Các vở kịch (vào những ngày đã chọn)",
    "what": "Bài hát này đã được phát trên trang web của bạn bao nhiêu lần trong khoảng thời gian đã chọn?",
    "when": "Sử dụng nó để so sánh các bài hát với nhau.",
    "care": "Càng nhiều càng tốt. Các lượt phát đến từ aimusiclist sẽ hiển thị ở cột bên cạnh, không phải ở đây. Nếu một bài hát mới hiển thị 0, hãy chờ đến lượt thống kê hàng ngày tiếp theo.",
    "like": "Đó là số lần đĩa nhạc này được phát trên máy phát nhạc của cửa hàng bạn."
  },
  "help.stats.col.plays_aml": {
    "t": "Từ aimusiclist",
    "what": "Bài hát này đã được phát bao nhiêu lần trên aimusiclist.com trong khoảng thời gian đã chọn, được gửi từ trang web của bạn?",
    "when": "Hãy dùng nó để xem những bài hát nào được mọi người tìm kiếm nhiều trên thị trường âm nhạc lớn.",
    "care": "Càng nhiều càng tốt. Những lượt xem này không làm thay đổi thứ hạng Phổ biến của trang web bạn. Nó có thể hơi khác so với lượt xem của **aimusiclist (7 ngày)**, vì hai vị trí này được tính theo cách khác nhau.",
    "like": "Đó là số lần đĩa nhạc này rời khỏi kho của bạn để được phát tại thị trường lớn."
  },
  "help.stats.col.likes": {
    "t": "Thích ♥",
    "what": "Bài hát này đã nhận được bao nhiêu lượt thích ♥ trên trang của bạn, từ lúc bắt đầu đến giờ?",
    "when": "Hãy sử dụng công cụ này để xem người hâm mộ của bạn yêu thích bài hát nào nhất.",
    "care": "Đây là **tổng số lượt thích từ trước đến nay**, không phải là khoảng thời gian đã chọn. Lượt thích được tính một lần mỗi ngày. Lượt thích trên aimusiclist được tính riêng trong thẻ aimusiclist.",
    "like": "Nó giống như việc đếm số trái tim mà người hâm mộ vẽ trên tấm thiệp bài hát trong cửa hàng của bạn vậy."
  },
  "help.stats.col.aml_plays7": {
    "t": "aimusiclist phát (7 ngày)",
    "what": "Bài hát này đã được phát bao nhiêu lần trên aimusiclist.com trong 7 ngày qua, theo thống kê của aimusiclist.",
    "when": "Hãy sử dụng công cụ này để xem bài hát của bạn đang được đón nhận như thế nào trên thị trường lớn tuần này.",
    "care": "Luôn luôn là **7 ngày**, bất kể khoảng thời gian bạn chọn là bao nhiêu. Con số này xuất hiện mỗi ngày một lần. Càng lớn càng tốt.",
    "like": "Đó là cách mà thị trường lớn tự ghi nhận tần suất bài hát của bạn được phát ở đó trong tuần này."
  },
  "help.stats.col.aml_valid7": {
    "t": "Lượt chơi hợp lệ (7 ngày)",
    "what": "Đã phát trên aimusiclist trong 7 ngày qua với thời lượng **30 giây trở lên**.",
    "when": "Hãy sử dụng nó để kiểm tra khả năng nghe thực sự. Việc bỏ qua một đoạn nhạc nhanh không được tính là một lượt chơi hợp lệ.",
    "care": "Càng nhiều càng tốt. Nó luôn nhỏ hơn một chút so với tổng số lượt phát. Nếu nhỏ hơn nhiều, mọi người có thể bỏ qua sớm. Hãy thử bắt đầu bài hát mạnh mẽ hơn hoặc chọn bản cover hay hơn. aimusiclist sử dụng các lượt phát hợp lệ để tạo ra bảng xếp hạng công bằng.",
    "like": "Đó là những vị khách đã nán lại gian hàng của bạn đủ lâu để thực sự nghe được bài hát, chứ không phải những người chỉ đi ngang qua."
  },
  "help.stats.col.chart": {
    "t": "Xếp hạng trên bảng xếp hạng",
    "what": "Vị trí của bài hát trên bảng xếp hạng hàng tuần aimusiclist (danh sách Top 100). Bên cạnh đó, bạn có thể thấy sự thay đổi vị trí của bài hát so với bảng xếp hạng trước đó.",
    "when": "Hãy xem để biết bài hát của bạn có lọt vào bảng xếp hạng lớn hay không.",
    "care": "Số càng nhỏ càng tốt. **MỚI** nghĩa là bài hát vừa mới được thêm vào. – nghĩa là bài hát hiện không có trong bảng xếp hạng. Điều này là bình thường đối với hầu hết các bài hát.",
    "like": "Đó chính là vị trí của album của bạn trên bảng xếp hạng bán chạy nhất của thị trường lớn."
  },
  "help.stats.col.genre_rank": {
    "t": "Xếp hạng thể loại",
    "what": "Vị trí của bài hát trên bảng xếp hạng aimusiclist trong thể loại của nó (như R&B hoặc Hip-hop).",
    "when": "Hãy sử dụng công cụ này để xem bài hát của bạn được đánh giá như thế nào so với các bài hát cùng thể loại.",
    "care": "Số càng nhỏ càng tốt. Bảng xếp hạng thể loại nhỏ hơn bảng xếp hạng chính, vì vậy việc đạt thứ hạng ở đây dễ hơn. – có nghĩa là chưa có thứ hạng thể loại.",
    "like": "Đó là vị trí của bạn trên một kệ trong thị trường lớn, ví dụ như chỉ có kệ dành cho nhạc R&B."
  },
  "help.stats.col.all_rank": {
    "t": "Tất cả các bài hát đều được xếp hạng",
    "what": "Đây là vị trí của bài hát trong số **tất cả các bài hát** mà mọi người đã nghe trên aimusiclist tuần này (từ thứ Sáu đến thứ Năm). Bên dưới là thứ hạng cao nhất mà bài hát từng đạt được.",
    "when": "Hãy sử dụng nó ngay cả khi bài hát của bạn không nằm trong Top 100. Bạn vẫn có thể thấy nó leo hạng.",
    "click": "Không có gì để nhấn. ▲ và một con số cho biết nó đã tăng bao nhiêu bậc so với tuần trước. ▼ cho biết nó đã giảm bao nhiêu bậc.",
    "care": "Số càng ít càng tốt. Nó thay đổi **mỗi thứ Sáu**. Một bài hát mà không ai nghe trong tuần này sẽ được hiển thị –.",
    "like": "Ngay cả khi hồ sơ của bạn không hiển thị trên bảng chính, bạn vẫn có thể thấy số thứ tự của nó trong danh sách đầy đủ của thị trường lớn."
  },
  "help.stats.tracks": {
    "t": "Những bài hát nổi tiếng",
    "what": "Bảng này hiển thị số lượt nghe và thứ hạng của các bài hát của bạn. Bảng hiển thị tối đa 100 bài hát, bài có thứ hạng cao nhất được hiển thị trước.",
    "when": "Hãy sử dụng nó để xem bài hát nào đang là hit hiện tại của bạn và bài hát nào cần được nhiều người yêu thích hơn.",
    "click": "Không có gì thay đổi khi bạn nhìn vào. Cột **Plays** sẽ hiển thị theo khoảng thời gian bạn đã chọn ở trên cùng. Các cột aimusiclist luôn hiển thị dữ liệu của 7 ngày gần nhất.",
    "care": "Thứ hạng ở đây giống với thứ hạng của nút **Phổ biến** trên trang web của bạn. Thứ hạng này thay đổi mỗi ngày một lần. Các cột aimusiclist chỉ xuất hiện khi aimusiclist.com gửi số điện thoại của bạn.",
    "like": "Đó là danh sách các sản phẩm bán chạy nhất mà bạn treo trên tường cửa hàng của mình."
  },
  "help.stats.rank_basis": {
    "t": "Cách thức xếp hạng phổ thông được thực hiện",
    "what": "Dòng này cho biết yếu tố quyết định thứ hạng **Phổ biến** của trang web bạn. Nó sẽ hiển thị lượt phát trên trang web của bạn, hoặc aimusiclist sẽ hiển thị nếu trang web của bạn không thể tính điểm.",
    "when": "Hãy đọc bài viết này khi bạn thắc mắc tại sao một bài hát lại được đánh giá cao hơn bài hát khác.",
    "care": "Chỉ số liệu của **7 ngày gần nhất** mới được tính, và chỉ những bài hát đã được phát mới được xếp hạng (tối đa 100). Nếu hai bài hát có số lượt phát bằng nhau, aimusiclist sẽ được ưu tiên, sau đó bài hát được tải lên gần đây hơn sẽ được xếp hạng trước. Các lượt phát đến từ aimusiclist sẽ không được sử dụng ở đây.",
    "like": "Đó là tấm thẻ quy tắc nằm cạnh danh sách sách bán chạy nhất, giải thích cho mọi người biết danh sách đó được lập ra như thế nào."
  },
  "help.stats.albums": {
    "t": "Album",
    "what": "Một bảng liệt kê các album của bạn. Mỗi hàng hiển thị tổng số lượt phát của tất cả các bài hát trong album đó.",
    "when": "Hãy sử dụng nó để xem mọi người nghe album nào nhiều nhất.",
    "care": "Bảng được sắp xếp theo thứ tự album được phát nhiều nhất trước. Một bài hát xuất hiện trong hai album sẽ được tính trong cả hai album.",
    "like": "Nó giống như việc tính doanh số bán hàng theo bộ sưu tập thay vì theo từng đĩa đơn."
  },
  "help.stats.album.plays": {
    "t": "Album được phát (vào những ngày đã chọn)",
    "what": "Tất cả lượt phát các bài hát trong album này trong khoảng thời gian đã chọn. Nó bao gồm lượt phát trên trang web của bạn **và** lượt phát đến từ aimusiclist.",
    "when": "Sử dụng nó để so sánh các album.",
    "care": "Càng nhiều càng tốt. Một album có nhiều bài hát có thể trông \"dày\" chỉ đơn giản vì nó có nhiều bài hát hơn. Hãy nhìn vào cột **Số bài hát** nữa.",
    "like": "Đó là tổng số lượt phát của tất cả các đĩa nhạc trong một bộ hộp đã được phát, tại cửa hàng của bạn và tại quầy hàng lớn ở chợ."
  },
  "help.stats.album.aml_plays7": {
    "t": "Album aimusiclist được phát trong (7 ngày)",
    "what": "Tổng số lượt nghe các bài hát trong album này của aimusiclist trong 7 ngày qua, theo thống kê của aimusiclist.",
    "when": "Hãy sử dụng nó để xem album nào đang được ưa chuộng trên thị trường lớn tuần này.",
    "care": "Thời gian luôn là **7 ngày**, bất kể bạn chọn khoảng thời gian nào. Càng dài càng tốt.",
    "like": "Đây là số lượng do chính thị trường lớn thống kê cho toàn bộ bộ hộp đĩa của bạn trong tuần này."
  },
  "help.stats.listeners": {
    "t": "Người nghe (theo lượt xem)",
    "what": "Thẻ này hiển thị thông tin về người nghe nhạc của bạn: quốc gia, thiết bị, ngôn ngữ và thời gian trong ngày.",
    "when": "Hãy sử dụng nó để quyết định nơi bạn nên chia sẻ âm nhạc của mình và ngôn ngữ bạn nên sử dụng để viết.",
    "care": "Máy chủ của bạn không thể đếm lượt truy cập, vì vậy thẻ này được tạo từ **lượt phát**, không phải lượt truy cập. Không có thông tin cá nhân nào được lưu giữ. Phần trăm là thị phần trong danh sách bạn thấy.",
    "like": "Nó giống như việc để ý xem những người đưa đĩa nhạc của bạn đến từ thị trấn nào."
  },
  "help.stats.countries": {
    "t": "Các quốc gia",
    "what": "Các quốc gia mà người nghe hoặc khách truy cập của bạn đến từ. Top 10 được hiển thị, lớn nhất trước.",
    "when": "Sử dụng chức năng này để chọn ngôn ngữ cho tiêu đề bài hát hoặc lên kế hoạch chia sẻ tại một quốc gia cụ thể.",
    "care": "**Không xác định** có nghĩa là không tìm thấy quốc gia. Một tỷ lệ nhỏ trường hợp không xác định là bình thường.",
    "like": "Nó giống như những chiếc ghim trên bản đồ thế giới trong cửa hàng của bạn, mỗi chiếc tượng trưng cho một quốc gia quê hương của khách hàng."
  },
  "help.stats.devices": {
    "t": "Thiết bị",
    "what": "Mọi người đã sử dụng thiết bị nào để truy cập trang web của bạn: điện thoại, máy tính bảng hoặc máy tính.",
    "when": "Hãy sử dụng nó khi bạn chọn giao diện (thiết kế trang web). Nếu hầu hết mọi người sử dụng điện thoại, hãy kiểm tra xem trang web của bạn trông như thế nào trên điện thoại.",
    "care": "Các thiết bị không thể phân biệt được sẽ không được hiển thị.",
    "like": "Nó giống như việc để ý xem khách đến bằng cách đi bộ, đi xe đạp hay đi ô tô."
  },
  "help.stats.langs": {
    "t": "Ngôn ngữ",
    "what": "Ngôn ngữ được thiết lập trên điện thoại hoặc máy tính của khách truy cập. 10 ngôn ngữ phổ biến nhất được hiển thị.",
    "when": "Hãy sử dụng công cụ này để quyết định ngôn ngữ nào phù hợp cho văn bản trên trang web và tiêu đề bài hát của bạn.",
    "care": "Đây là ngôn ngữ của thiết bị, không phải lúc nào cũng là ngôn ngữ họ nói tốt nhất. **Không xác định** có nghĩa là thiết bị không cung cấp thông tin.",
    "like": "Nó giống như việc bạn nghe được khách của mình nói những ngôn ngữ nào khi họ bước vào."
  },
  "help.stats.audience": {
    "t": "Khán giả",
    "what": "Thẻ này hiển thị thông tin về khách truy cập của bạn: quốc gia, nơi họ đến, thiết bị họ sử dụng, ngôn ngữ và thời gian trong ngày.",
    "when": "Hãy sử dụng nó để quyết định nơi bạn nên chia sẻ âm nhạc của mình và ngôn ngữ bạn nên sử dụng để viết.",
    "click": "Mọi thứ vẫn không thay đổi khi bạn nhìn vào. Mỗi danh sách đều tuân theo khoảng thời gian bạn đã chọn.",
    "care": "Không có thông tin cá nhân nào được lưu giữ. Chỉ những nhóm lớn như \"Hàn Quốc\" hoặc \"Điện thoại\" mới được thống kê. Tỷ lệ phần trăm thể hiện thị phần trong danh sách bạn thấy.",
    "like": "Nó giống như việc một chủ cửa hàng nhận thấy \"hôm nay có rất nhiều khách đến từ thị trấn kế bên, đi bộ vào buổi tối\"."
  },
  "help.stats.refs": {
    "t": "Khách du lịch đến từ đâu",
    "what": "Cách mọi người tìm thấy trang web của bạn, theo các nhóm lớn: nhập địa chỉ hoặc đánh dấu trang, tìm kiếm, ứng dụng mạng xã hội và âm nhạc, aimusiclist.com, các trang web khác và di chuyển bên trong trang web của bạn.",
    "when": "Hãy sử dụng công cụ này để xem phương thức chia sẻ nào phù hợp nhất với bạn.",
    "care": "**Trực tiếp / đánh dấu trang** cũng bao gồm các liên kết được mở từ các ứng dụng trò chuyện mà không cho biết chúng đến từ đâu. **Bên trong trang web của bạn** có nghĩa là di chuyển từ trang này sang trang khác trên trang web của bạn.",
    "like": "Nó giống như việc hỏi từng vị khách đến cửa rằng \"Bạn biết đến cửa hàng của tôi bằng cách nào?\""
  },
  "help.stats.domains": {
    "t": "Các trang web giới thiệu hàng đầu",
    "what": "Tên của các trang web đã gửi nhiều lượt truy cập nhất đến trang web của bạn. Tối đa 10 trang web sẽ được hiển thị.",
    "when": "Hãy sử dụng nó để tìm hiểu bài đăng hoặc trang nào đang thu hút người xem. Sau đó, bạn có thể cảm ơn họ hoặc chia sẻ lại ở đó.",
    "care": "Chỉ hiển thị tên trang web, không hiển thị trang cụ thể. Các lượt truy cập từ bên trong trang web của chính bạn sẽ không có trong danh sách này.",
    "like": "Nó giống như một danh sách các cửa hàng lân cận có biển chỉ dẫn đến cửa hàng của bạn."
  },
  "help.stats.hours": {
    "t": "Thời gian trong ngày",
    "what": "Mỗi thanh biểu thị một giờ trong ngày (0:00 đến 23:00). Thanh càng cao nghĩa là càng có nhiều lượt chơi hoặc lượt truy cập trong giờ đó, được tính tổng trong khoảng thời gian đã chọn.",
    "when": "Hãy sử dụng nó để chọn thời điểm thích hợp chia sẻ bài hát mới. Chia sẻ trước giờ cao điểm nhé.",
    "click": "Di chuột vào thanh (hoặc chạm vào đó) để xem giờ và số.",
    "care": "Giờ được hiển thị theo **giờ của máy tính bạn**. Tiêu đề cho biết khoảng cách so với giờ UTC. Ở một số nơi sử dụng múi giờ nửa tiếng, giờ vẫn được giữ nguyên theo giờ UTC.",
    "like": "Nó giống như việc bạn biết cửa hàng của mình đông khách nhất vào giờ ăn trưa và sau giờ học."
  },
  "help.stats.aml.title": {
    "t": "Trên aimusiclist.com",
    "what": "Thẻ này hiển thị số liệu của bạn trên aimusiclist.com: lượt phát, lượt phát hợp lệ, lượt thích và lượt thêm vào danh sách phát, kèm theo biểu đồ hàng ngày và quốc gia.",
    "when": "Hãy sử dụng nó để xem các bài hát đã phát hành của bạn được đón nhận như thế nào trên thị trường lớn.",
    "click": "Khi nhìn vào, mọi thứ vẫn không thay đổi. Các ô gạch vẫn theo chủ đề thời kỳ bạn đã chọn ở phía trên.",
    "care": "Những con số này được cập nhật **một lần mỗi ngày** (vào buổi sáng). [[Làm mới ngay]] không thay đổi chúng. Nếu bạn thấy \"Chưa kết nối\", hãy kết nối trang web của bạn với aimusiclist.com trước. Chỉ những bài hát bạn đã công khai trên aimusiclist mới được tính.",
    "like": "Đó là bản báo cáo mà chợ lớn gửi cho bạn mỗi sáng về gian hàng của bạn."
  },
  "help.stats.aml.plays": {
    "t": "aimusiclist chơi",
    "what": "Số lần bài hát của bạn được phát trên aimusiclist.com trong khoảng thời gian đã chọn.",
    "when": "Hãy sử dụng nó để xem liệu có nhiều người nghe thấy bạn hơn ở thị trường lớn hay không.",
    "care": "Càng lớn càng tốt. Mũi tên so sánh với số liệu của những ngày trước đó. Số liệu này chỉ tính những bài hát bạn đã công khai trên aimusiclist. Nếu nó đột nhiên giảm xuống 0, hãy kiểm tra xem các bài hát của bạn vẫn đang được công khai và trang web của bạn vẫn đang được kết nối hay không.",
    "like": "Đó là số lần đĩa nhạc của bạn được phát tại quầy hàng của bạn ở chợ lớn."
  },
  "help.stats.aml.valid": {
    "t": "Lượt chơi hợp lệ (30 giây trở lên)",
    "what": "aimusiclist phát khi có người nghe trong 30 giây trở lên, trong khoảng thời gian đã chọn.",
    "when": "Hãy sử dụng nó để quan sát quá trình nghe thực sự, chứ không phải những đoạn bỏ qua nhanh.",
    "care": "Càng lớn càng tốt. Nếu nó nhỏ hơn nhiều so với **Lượt chơi**, nhiều người sẽ bỏ qua sớm. aimusiclist sử dụng các lượt chơi hợp lệ cho bảng xếp hạng công bằng của mình, vì vậy con số này quan trọng nhất đối với thứ hạng của bạn trên bảng xếp hạng.",
    "like": "Đó là những vị khách đã nán lại gian hàng của bạn đủ lâu để thực sự nghe được bài hát ấy."
  },
  "help.stats.aml.likes": {
    "t": "aimusiclist thích",
    "what": "Số lượt thích bài hát của bạn trên aimusiclist.com trong khoảng thời gian đã chọn là bao nhiêu?",
    "when": "Hãy sử dụng nó để xem người hâm mộ cảm nhận như thế nào về những bài hát mới của bạn.",
    "care": "Càng nhiều càng tốt. Đây là số lượt thích trên aimusiclist, không phải trên trang web của bạn. Số lượt thích trên trang web của bạn nằm trong cột **Lượt thích ♥** của bảng Bài hát phổ biến.",
    "like": "Nó giống như những trái tim được để lại trên tấm bảng của gian hàng bạn ở chợ lớn vậy."
  },
  "help.stats.aml.adds": {
    "t": "Đã được thêm vào danh sách phát",
    "what": "Số lần người dùng thêm bài hát của bạn vào danh sách phát của họ trên aimusiclist.com trong khoảng thời gian đã chọn.",
    "when": "Hãy sử dụng nó để xem mọi người có muốn nghe đi nghe lại các bài hát của bạn hay không.",
    "care": "Càng nhiều càng tốt. Việc thêm vào danh sách phát là một dấu hiệu mạnh mẽ: người đó dự định sẽ quay lại nghe bài hát đó.",
    "like": "Nó giống như việc một vị khách mua đĩa nhạc của bạn để mang về nhà, thay vì chỉ nghe một lần tại quầy hàng."
  },
  "help.stats.aml.trend": {
    "t": "aimusiclist lượt chơi mỗi ngày",
    "what": "Mỗi cột biểu thị số lượt chơi trong một ngày trên aimusiclist.com. Cột càng cao nghĩa là số lượt chơi trong ngày đó càng nhiều.",
    "when": "Hãy sử dụng công cụ này để xem khi nào các bài hát của bạn phổ biến trên thị trường lớn, ví dụ như tuần bài hát đó lọt vào bảng xếp hạng.",
    "click": "Di chuột vào thanh (hoặc chạm vào thanh) để xem ngày và số.",
    "care": "Biểu đồ kết thúc vào cùng ngày với số liệu của trang web của bạn (ngày hôm qua, UTC). Các ô trống có nghĩa là 0 hoặc không có số liệu nào trong ngày hôm đó.",
    "like": "Đây là một dãy các chồng tiền xu dành cho gian hàng của bạn tại chợ lớn, mỗi ngày một chồng."
  },
  "help.stats.aml.countries": {
    "t": "aimusiclist quốc gia người nghe",
    "what": "Danh sách quốc gia của những người đã nghe nhạc của bạn trên aimusiclist.com. Tối đa 10 quốc gia được hiển thị, quốc gia lớn nhất được hiển thị trước.",
    "when": "Hãy sử dụng công cụ này để tìm những quốc gia nơi âm nhạc của bạn đang phát triển mạnh trên thị trường lớn.",
    "care": "Danh sách này do aimusiclist lập và được cập nhật mỗi ngày một lần. Danh sách này có thể khác với danh sách các quốc gia trên trang web của bạn.",
    "like": "Đó là thị trường lớn cho bạn biết khách hàng đến gian hàng của bạn đến từ những quốc gia nào."
  },
  "help.stats.free.r2_storage": {
    "t": "Không gian lưu trữ",
    "what": "Dung lượng mà các bài hát và hình ảnh của bạn chiếm trong bộ nhớ Cloudflare. Gói miễn phí cung cấp cho bạn **10 GB**.",
    "when": "Hãy kiểm tra trước khi tải lên nhiều bài hát hoặc các tệp tin dung lượng lớn.",
    "care": "Nếu bạn vượt quá dung lượng miễn phí, Cloudflare sẽ tính phí vào tài khoản của bạn. Xóa những bài hát bạn không cần sẽ giải phóng dung lượng. Các tệp WAV có dung lượng lớn hơn nhiều so với các tệp MP3.",
    "like": "Điều đó thể hiện mức độ đầy của kho hàng của bạn."
  },
  "help.stats.free.workers": {
    "t": "Yêu cầu trang web hôm nay",
    "what": "Hôm nay trang web của bạn nhận được bao nhiêu lượt truy cập (trang, bài hát, hình ảnh)? Gói miễn phí cho phép **100.000 lượt truy cập mỗi ngày**.",
    "when": "Hãy kiểm tra vào ngày có nhiều người truy cập, ví dụ như sau khi có nhiều lượt chia sẻ.",
    "care": "Nếu lượng truy cập vượt quá 100.000 trong một ngày, trang web của bạn sẽ **tạm dừng hoạt động trong phần còn lại của ngày hôm đó** (không tính phí). Trang web sẽ hoạt động trở lại lúc 00:00 UTC (9 giờ sáng giờ Hàn Quốc).",
    "like": "Nó giống như cánh cửa hàng chỉ có thể mở một số lần nhất định trong ngày. Sau đó, cánh cửa sẽ đóng kín cho đến ngày mai."
  },
  "help.stats.free.r2_class_a": {
    "t": "Storage viết bài này trong tháng này",
    "what": "Số lần thao tác được lưu vào bộ nhớ của bạn trong tháng này, ví dụ như tải bài hát lên hoặc thay đổi cài đặt. Gói miễn phí cho phép **1 triệu lần lưu mỗi tháng**.",
    "when": "Hãy kiểm tra mục này nếu bạn thường xuyên tải lên hoặc thay đổi nội dung.",
    "care": "Mức sử dụng thông thường luôn thấp hơn nhiều so với giới hạn. Nếu bạn vượt quá, Cloudflare sẽ tính phí vào tài khoản của bạn. Quá trình tính toán sẽ bắt đầu lại mỗi tháng.",
    "like": "Đó là số lần thùng hàng được đưa vào kho của bạn trong tháng này."
  },
  "help.stats.free.r2_class_b": {
    "t": "Lượng dữ liệu lưu trữ trong tháng này",
    "what": "Tháng này, có bao nhiêu lần dữ liệu được lấy ra khỏi bộ nhớ của bạn, chủ yếu là các bài hát được phát? Gói miễn phí cho phép **10 triệu lượt lấy mỗi tháng**.",
    "when": "Hãy kiểm tra khi bài hát của bạn nhận được nhiều lượt nghe.",
    "care": "Nếu bạn vượt quá số lượt chơi, Cloudflare sẽ tính phí vào tài khoản của bạn. Số lượt chơi sẽ được tính lại mỗi tháng. Nhiều lượt chơi là điều tốt, vì vậy thanh tiến độ này sẽ tăng lên khi bạn trở nên nổi tiếng.",
    "like": "Đó là số lần hồ sơ được lấy ra khỏi kho của bạn trong tháng này."
  },
  "help.stats.free.ae": {
    "t": "Số liệu thống kê hôm nay",
    "what": "Hôm nay trang web của bạn đã ghi bao nhiêu dòng vào sổ thống kê (một dòng cho mỗi lượt truy cập, lượt chơi hoặc bài đăng trong sổ khách)? Số dòng miễn phí là **100.000 dòng mỗi ngày**.",
    "when": "Hãy kiểm tra vào một ngày đông khách.",
    "care": "Thanh này chỉ hiển thị khi số liệu của ngày hôm nay đã được tính, ví dụ như sau [[Làm mới ngay]]. Một trang web thông thường sẽ có số lượt truy cập thấp hơn nhiều so với mức miễn phí. Các trang khách và bài hát của bạn không phụ thuộc vào thanh này.",
    "like": "Đó là số dòng mà nhân viên quầy tiếp tân đã ghi vào sổ tay hôm nay."
  },
  "help.stats.free.title": {
    "t": "Phòng trống theo kế hoạch",
    "what": "Các thanh biểu thị mức độ sử dụng gói miễn phí Cloudflare của trang web bạn. Trang web của bạn hoạt động miễn phí miễn là mỗi thanh này vẫn dưới 100%.",
    "when": "Thỉnh thoảng hãy xem lại, và luôn luôn xem sau khi đã tải lên nhiều bài hát.",
    "click": "Không có gì thay đổi khi bạn nhìn vào. Thanh hiển thị chuyển sang màu cảnh báo ở mức **70%** và màu nguy hiểm ở mức **90%**.",
    "care": "Nếu một thanh tiến trình gần đạt 100%, hãy ngừng tải lên các tệp lớn và kiểm tra xem thanh nào đang đầy. Gói miễn phí đủ dùng cho khoảng 1.000 bài hát (khoảng 10 MB mỗi bài) và vài nghìn lượt truy cập mỗi ngày.",
    "like": "Nó giống như đồng hồ đo nước và điện trong cửa hàng của bạn. Miễn là bạn sử dụng dưới mức miễn phí, bạn sẽ không phải trả tiền."
  },
  "help.an.title": {
    "t": "Phân tích",
    "what": "Tab này hiển thị sự thay đổi của các bài hát của bạn theo thời gian: thứ hạng tăng giảm, các bài hát đang nổi lên và tin tức từ aimusiclist.com.",
    "when": "Mở ứng dụng này mỗi tuần một lần để xem xu hướng. Tab **Thống kê** cho bạn biết \"số lượng\". Tab này cho bạn biết \"đang tăng hay giảm\".",
    "click": "Việc điều chỉnh giao diện không làm thay đổi gì trên trang web của bạn. Hãy chọn một khoảng thời gian ở đầu trang, và các biểu đồ và bảng sẽ hiển thị theo đó.",
    "care": "Trang web của bạn ghi lại một dòng mỗi ngày. Vì vậy, vào ngày đầu tiên sẽ không có gì để vẽ. Từ sáng hôm sau, biểu đồ sẽ được điền dữ liệu từng ngày một. Các bản ghi cũ hơn khoảng 2 năm sẽ bị xóa.",
    "like": "Nó giống như một cuốn nhật ký mà cửa hàng của bạn ghi chép mỗi ngày. Sau vài tuần, bạn có thể lật lại và xem mọi thứ đã thay đổi như thế nào."
  },
  "help.an.period": {
    "t": "Thời hạn (7 / 30 / 90 ngày / Tất cả)",
    "what": "Các nút này chọn số ngày mà biểu đồ và bảng hiển thị. **Tất cả** hiển thị tất cả các ngày đã được ghi nhận cho đến nay.",
    "when": "Chọn 7 ngày cho tuần này, 30 hoặc 90 ngày để xem toàn bộ câu chuyện của một bài hát, và **Tất cả** để xem toàn bộ câu chuyện.",
    "click": "Các biểu đồ và bảng thay đổi ngay lập tức. **Tất cả** có thể mất vài giây trong lần đầu tiên, vì các bản ghi cũ cũng được mở.",
    "care": "Một số mục luôn hiển thị dữ liệu trong 7 ngày gần nhất, bất kể bạn chọn mục nào: **Bài hát đang lên của tôi**, cột **Thay đổi trong 7 ngày** và các số aimusiclist. **Lượt thích và thêm vào danh sách phát** hiển thị tối đa 90 ngày.",
    "like": "Nó giống như việc bạn chọn đọc bao nhiêu trang nhật ký cửa hàng mỗi lần."
  },
  "help.an.note.start": {
    "t": "Việc ghi nhận bắt đầu từ hôm nay.",
    "what": "Trang web của bạn vừa mới bắt đầu viết nhật ký hàng ngày. Hiện chưa có nhật ký nào được hiển thị trong những ngày trước đó.",
    "when": "Điều này sẽ hiển thị vào ngày đầu tiên sau khi bạn kích hoạt tính năng này.",
    "click": "Không có gì để làm. Quay lại vào ngày mai. Mỗi buổi sáng, một ngày nữa được thêm vào biểu đồ.",
    "care": "Những ngày trước hôm nay không thể được điền thêm sau, vì vậy biểu đồ bắt đầu từ ngày hôm nay.",
    "like": "Đây là trang đầu tiên của một cuốn nhật ký hoàn toàn mới. Ngày mai nó sẽ chỉ có một dòng."
  },
  "help.an.note.since": {
    "t": "Ghi âm từ",
    "what": "Ngày đầu tiên trang web của bạn bắt đầu ghi lại dữ liệu hàng ngày. Biểu đồ không thể hiển thị dữ liệu trước ngày này.",
    "when": "Hãy chú ý khi biểu đồ có vẻ bắt đầu muộn.",
    "care": "Hồ sơ được lưu giữ trong khoảng 2 năm. Các tháng cũ hơn sẽ được xóa riêng.",
    "like": "Đó là ngày được ghi trên trang đầu tiên của sổ nhật ký cửa hàng của bạn."
  },
  "help.an.note.feed": {
    "t": "Dữ liệu aimusiclist",
    "what": "Mỗi ngày, trang web của bạn sẽ nhận được một báo cáo ngắn từ aimusiclist.com: các bài hát đang nổi lên, thứ hạng trên bảng xếp hạng và tin tức. Dòng này hiển thị ngày của báo cáo mà bạn nhận được.",
    "when": "Hãy xem lại khi danh sách tăng trưởng hoặc tin tức trông có vẻ cũ.",
    "click": "Không có gì phải nhấn. Báo cáo sẽ tự động được gửi đến mỗi ngày một lần. Nếu báo cáo cho biết dữ liệu chưa được gửi đến, hãy kiểm tra lại vào ngày mai.",
    "care": "Việc mở tab này nhiều lần sẽ không hỏi lại mã aimusiclist. Nó chỉ hiển thị báo cáo đã lưu. Vì vậy, bạn không mất phí gì cả.",
    "like": "Nó giống như tờ báo mà siêu thị lớn để trước cửa hàng của bạn mỗi sáng."
  },
  "help.an.note.feed_old": {
    "t": "Dữ liệu hôm nay không có sẵn.",
    "what": "Trang web của bạn đã cố gắng tải báo cáo hôm nay từ aimusiclist.com, nhưng không thành công. Bạn đang xem báo cáo mới nhất.",
    "when": "Điều này tự nó đã thể hiện rõ.",
    "click": "Không có gì phải làm. Trang web của bạn sẽ tự động thử lại vào ngày mai.",
    "care": "Các số của riêng bạn không bị ảnh hưởng. Chỉ các hộp aimusiclist mới có thể bị lỗi một ngày. Nếu lỗi kéo dài nhiều ngày, hãy kiểm tra kết nối trang web của bạn với aimusiclist.com.",
    "like": "Sáng nay báo không đến. Tờ báo hôm qua vẫn còn nằm trên bàn."
  },
  "help.an.news": {
    "t": "Tin tức aimusiclist",
    "what": "5 tin nhắn mới nhất từ ​​aimusiclist.com. **Báo cáo biểu đồ** cung cấp thông tin về các biểu đồ. **Thông báo** thông báo về những thay đổi đối với dịch vụ.",
    "when": "Hãy đọc khi bạn thấy dấu chấm trên tab **Phân tích**. Dấu chấm đó có nghĩa là có tin tức mới.",
    "click": "Nhấn **Đọc thêm** để mở toàn bộ bài viết trên aimusiclist.com trong một tab mới. Việc mở tab này sẽ xóa dấu chấm.",
    "care": "Tin tức được cập nhật mỗi ngày một lần với dữ liệu aimusiclist. Hình ảnh không được hiển thị ở đây để giữ cho màn hình sáng sủa.",
    "like": "Đây là bảng thông báo của chợ lớn, với năm tấm áp phích mới nhất."
  },
  "help.an.rank.basis": {
    "t": "Nên rút thăm hạng nào",
    "what": "Hãy chọn thứ hạng mà biểu đồ hiển thị. **Thứ hạng aimusiclist** là vị trí của tất cả các bài hát trên aimusiclist. **Thứ hạng trang web của tôi** là thứ hạng phổ biến của trang web bạn. **Cả hai** sẽ vẽ hai biểu đồ.",
    "when": "Hãy sử dụng thứ hạng aimusiclist để xem bạn đang hoạt động như thế nào trên thị trường lớn, và thứ hạng trang web của tôi để xem khách truy cập của bạn thích gì.",
    "click": "Biểu đồ thay đổi ngay lập tức. Các bài hát bạn đã chọn sẽ quay lại top 3 bài hát. Lựa chọn này cũng thay đổi cột **Bài hát đang lên của tôi** và cột **Thay đổi trong 7 ngày**.",
    "care": "Ban đầu, biểu đồ sử dụng thứ hạng aimusiclist nếu nó tồn tại. Một bài hát chưa từng được xếp hạng sẽ không xuất hiện trong danh sách để chọn.",
    "like": "Nó giống như việc phải lựa chọn giữa bảng hiệu của siêu thị lớn và bảng hiệu của cửa hàng mình vậy."
  },
  "help.an.rank": {
    "t": "Thay đổi thứ hạng",
    "what": "Biểu đồ đường thể hiện thứ hạng các bài hát của bạn theo từng ngày. Mỗi bài hát có một màu sắc, kiểu đường và hình dạng chấm riêng.",
    "when": "Hãy sử dụng nó để xem một bài hát đang tăng dần, giảm dần hay giữ nguyên, và để so sánh một vài bài hát.",
    "click": "Chọn bài hát bên dưới tiêu đề. Di chuột vào dấu chấm (hoặc chạm vào đó) để xem tên bài hát, ngày phát hành và thứ hạng.",
    "care": "**Vị trí càng cao trên biểu đồ càng tốt** (1 ở trên cùng). Nếu thứ hạng cách nhau quá xa, thang đo sẽ bị thu hẹp để tất cả các đường đều nằm gọn trên biểu đồ. Khi đó, khoảng cách giữa các vạch chia sẽ không bằng nhau.",
    "like": "Nó giống như một bản đồ leo núi. Mỗi bài hát là một người leo núi, và đỉnh của bản đồ là ngọn núi."
  },
  "help.an.rank.pick": {
    "t": "Chọn bài hát",
    "what": "Tên các bài hát dưới dòng này là các công tắc. Bài hát được chọn sẽ được đánh dấu bằng một đường trên biểu đồ.",
    "when": "Hãy chọn một vài bài hát mà bạn muốn so sánh, ví dụ như bài hát mới nhất và bài hát hay nhất của bạn.",
    "click": "Chạm vào tên bài hát để thêm hoặc xóa. Biểu đồ sẽ thay đổi ngay lập tức. Ban đầu, 3 bài hát được xếp hạng cao nhất của bạn sẽ được chọn.",
    "care": "Bạn có thể chọn **tối đa 8 bài hát**. Sau 8 bài, bạn sẽ không thể chọn thêm bài nào nữa cho đến khi bạn xóa bớt một bài. Các lựa chọn của bạn sẽ không được lưu lại. Chúng sẽ được đặt lại khi bạn thay đổi loại xếp hạng.",
    "like": "Nó giống như việc lựa chọn nên theo dõi những người leo núi nào trên bản đồ núi vậy."
  },
  "help.an.rank.gap": {
    "t": "Ngắt dòng",
    "what": "Dấu gạch ngang nghĩa là bài hát đó không có thứ hạng nào trong ngày hôm đó.",
    "when": "Hãy đọc khi một dòng dừng lại rồi lại bắt đầu.",
    "care": "Điều này là bình thường. Một bài hát sẽ không được xếp hạng nếu không ai nghe nó trong 7 ngày qua, hoặc nếu số liệu của ngày đó chưa được cập nhật. Một dấu chấm đơn không có gạch ngang nghĩa là chỉ có một ngày được xếp hạng.",
    "like": "Nó giống như một người leo núi đã rời khỏi đường mòn một lúc rồi quay trở lại."
  },
  "help.an.sort": {
    "t": "Loại",
    "what": "Chọn thứ tự hiển thị trong bảng. **Được nghe nhiều nhất**, **Thời gian nghe**, **Đang tăng** (bước nhảy hạng lớn nhất tuần này) hoặc **Mới nhất** (video mới tải lên trước).",
    "when": "Sử dụng Rising để tìm bài hát muốn chia sẻ ngay. Sử dụng Newest để kiểm tra xem các bài hát mới đang được đón nhận như thế nào.",
    "click": "Bảng dữ liệu thay đổi thứ tự ngay lập tức. Không có dữ liệu nào được lưu lại.",
    "care": "Các bài hát có cùng giá trị được sắp xếp theo tiêu đề. Trong **Rising**, các bài hát vừa được xếp hạng (NEW) sẽ đứng sau mọi bài hát có sự thay đổi thực sự, và các bài hát không có thứ hạng sẽ đứng cuối cùng.",
    "like": "Nó giống như việc sắp xếp các đĩa nhạc trên kệ của bạn theo doanh số bán ra, theo thời lượng phát, theo xu hướng hoặc theo ngày phát hành."
  },
  "help.an.table": {
    "t": "Tổng quan về các bài hát của tôi",
    "what": "Bảng tổng hợp tất cả bài hát của bạn bao gồm số lượt phát, thời gian nghe, xếp hạng aimusiclist, thay đổi trong 7 ngày và ngày tải lên.",
    "when": "Hãy sử dụng nó để tìm những bài hát hay nhất của bạn và những bài hát đang bắt đầu nổi lên.",
    "click": "Sử dụng các nút sắp xếp bên cạnh tiêu đề để thay đổi thứ tự hiển thị. Tối đa 200 bài hát được hiển thị.",
    "care": "Chỉ những bài hát có file âm thanh mới được hiển thị. Trên màn hình điện thoại nhỏ, cột **Đã tải lên** được ẩn đi để tiết kiệm không gian.",
    "like": "Đây là bảng giá đầy đủ của mọi đĩa nhạc có trên kệ cửa hàng của bạn."
  },
  "help.an.own_off": {
    "t": "Lượt xem trên trang web của tôi không được tính.",
    "what": "Trang web của bạn chưa thể tự đếm số lượt phát. Vì vậy, cột **Lượt phát** hiển thị số lượt phát của aimusiclist trong 7 ngày qua.",
    "when": "Điều này tự nó đã thể hiện rõ.",
    "click": "Không có gì để nhấn. Nếu bạn bật tính năng đếm lượt chơi (xem thông báo trên tab **Thống kê**), cột này sẽ chuyển sang hiển thị các lượt chơi của chính bạn.",
    "care": "Trong trường hợp này, Plays không tuân theo các nút dấu thời gian. Nó luôn luôn là 7 ngày gần nhất.",
    "like": "Cửa hàng của bạn không có quầy thu ngân ở cửa ra vào, vì vậy hiện tại bạn phải mượn số liệu của siêu thị lớn."
  },
  "help.an.col.plays": {
    "t": "Các vở kịch",
    "what": "Bài hát đã được phát trên trang web của bạn bao nhiêu lần trong khoảng thời gian đã chọn?",
    "when": "Hãy sử dụng công cụ này để tìm những bài hát bạn nghe nhiều nhất.",
    "care": "Càng nhiều càng tốt. Các lượt phát đến từ aimusiclist không có ở đây. – có nghĩa là bài hát này không có số thứ tự.",
    "like": "Đó là số lần đĩa nhạc này được phát trên máy phát nhạc của cửa hàng bạn."
  },
  "help.an.col.time": {
    "t": "Thời gian nghe",
    "what": "Tính tổng thời gian mọi người nghe bài hát này. Công thức là **số lần phát × thời lượng bài hát**.",
    "when": "Hãy sử dụng nó để so sánh một bài hát ngắn và một bài hát dài một cách công bằng hơn.",
    "care": "Đây chỉ là **ước tính**. Trang web của bạn không biết liệu người nghe có dừng lại giữa chừng hay không, vì vậy thời gian thực tế có thể ngắn hơn. Những bài hát không được lưu thời lượng sẽ hiển thị -.",
    "like": "Nó giống như việc đoán xem máy hát đĩa đã hoạt động được bao lâu: số vòng quay nhân với độ dài của một mặt đĩa."
  },
  "help.an.col.rank": {
    "t": "aimusiclist rank",
    "what": "Vị trí mới nhất của bài hát này trong số tất cả các bài hát trên aimusiclist.",
    "when": "Hãy sử dụng nó để xem bài hát nào của bạn bán chạy nhất trên thị trường lớn.",
    "care": "Số càng nhỏ càng tốt. Nó thay đổi mỗi tuần một lần (vào thứ Sáu). – có nghĩa là chưa có thứ hạng, điều này là bình thường đối với một bài hát không ai chơi trong tuần này.",
    "like": "Đó là số thứ tự hồ sơ của bạn trong danh sách đầy đủ của thị trường lớn."
  },
  "help.an.col.rise": {
    "t": "Thay đổi trong 7 ngày",
    "what": "Thứ hạng bài hát đã tăng bao nhiêu bậc so với 7 ngày trước?",
    "when": "Hãy sử dụng nó để phát hiện những bài hát đang bắt đầu nổi lên.",
    "click": "Không có gì để nhấn. ▲ nghĩa là tăng bấy nhiêu bậc, ▼ nghĩa là giảm, – nghĩa là không thay đổi. **MỚI** nghĩa là không có thứ hạng nào cách đây 7 ngày.",
    "care": "▲ là tốt. Nó sử dụng loại thứ hạng bạn đã chọn trong **Thay đổi thứ hạng** (aimusiclist hoặc trang web của tôi). Nếu thiếu một ngày, ngày gần nhất trong 3 ngày trước đó sẽ được sử dụng.",
    "like": "Nó giống như việc kiểm tra xem một người leo núi đã leo được bao nhiêu bậc thang trong tuần này."
  },
  "help.an.col.uploaded": {
    "t": "Đã tải lên",
    "what": "Ngày bạn tải bài hát lên trang web của mình.",
    "when": "Hãy dùng nó để so sánh các bài hát mới với các bài hát cũ.",
    "care": "Trên màn hình điện thoại nhỏ, cột này bị ẩn. Hãy xoay ngang điện thoại hoặc sử dụng máy tính để xem.",
    "like": "Đó là ngày được đóng dấu trên hộp khi đĩa nhạc đến cửa hàng của bạn."
  },
  "help.an.mine": {
    "t": "Những bài hát đang lên của tôi",
    "what": "Hiển thị tối đa 5 bài hát của bạn có thứ hạng tăng cao nhất trong tuần này, kèm theo một dòng ngắn gọn trong 14 ngày qua.",
    "when": "Hãy dùng công cụ này để chọn bài hát muốn chia sẻ ngay bây giờ. Một bài hát đang nổi lên sẽ càng phát triển nhanh hơn với một chút hỗ trợ.",
    "click": "Không cần nhấn nút nào. Mỗi thẻ hiển thị số bậc đã tăng và thứ hạng từ 7 ngày trước đến nay.",
    "care": "Nó luôn xem xét **7 ngày gần nhất**. Nó tuân theo loại xếp hạng bạn đã chọn trong **Thay đổi xếp hạng**, được hiển thị ở cuối dòng nhỏ bên dưới tiêu đề. Chỉ những bài hát thực sự tăng hạng mới được liệt kê.",
    "like": "Đây là khu vực \"hàng hot tuần này\" của cửa hàng bạn."
  },
  "help.an.aml.genre": {
    "t": "Thể loại",
    "what": "Chọn thể loại để chỉ xem những bài hát đang nổi lên thuộc thể loại đó. **Tất cả thể loại** sẽ hiển thị toàn bộ danh sách.",
    "when": "Hãy chọn thể loại nhạc bạn thích để xem mình sẽ cạnh tranh với ai.",
    "click": "Danh sách thay đổi ngay lập tức. Không có gì được lưu lại.",
    "care": "Danh sách chỉ bao gồm những thể loại nhạc có những bài hát đang nổi lên hiện nay.",
    "like": "Cảm giác như chỉ đi dọc theo lối đi dành riêng cho nhạc R&B trong siêu thị lớn vậy."
  },
  "help.an.aml": {
    "t": "Tăng giá trên aimusiclist",
    "what": "Các bài hát từ tất cả mọi người trên aimusiclist đang có thứ hạng cao nhanh chóng hiện nay. Bài hát của bạn được đánh dấu **Bài hát của tôi**.",
    "when": "Hãy sử dụng nó để xem loại nhạc nào đang thịnh hành hiện nay và tìm kiếm những nghệ sĩ để học hỏi.",
    "click": "Nhấn vào tiêu đề để mở trang bài hát đó trên aimusiclist trong một tab mới. Bạn có thể nghe nhạc ở đó. Nhạc sẽ không được phát trên màn hình này.",
    "care": "Danh sách này được cập nhật mỗi ngày một lần cùng với dữ liệu aimusiclist. ▲ hiển thị số bậc tăng lên, **NEW** nghĩa là mục mới. Số người nghe thể hiện số người đã nghe.",
    "like": "Nó giống như việc đi dạo trong khu chợ lớn để xem hôm nay gian hàng nào có nhiều người xếp hàng."
  },
  "help.an.s1": {
    "t": "Bài hát mới bắt đầu",
    "what": "Biểu đồ thể hiện số lượt phát trên trang web của bạn tăng lên trong 7 ngày đầu tiên sau khi mỗi bài hát mới được tải lên. Tối đa 6 bài hát mới nhất của bạn sẽ được hiển thị.",
    "when": "Hãy dùng nó để so sánh phần mở đầu bài hát mới của bạn với những bài hát trước đó. Bài này có phần mở đầu mạnh mẽ hơn không?",
    "click": "Di chuột vào một chấm (hoặc chạm vào đó) để xem tên bài hát, ngày và tổng số lượt phát. Danh sách bên dưới biểu đồ cho biết đường nào tương ứng với bài hát nào.",
    "care": "Chỉ những bài hát được tải lên **sau khi quá trình ghi âm bắt đầu** mới hiển thị. Nếu trang web của bạn không thể tự đếm lượt phát, ô này sẽ để trống.",
    "like": "Nó giống như một cuộc đua mà mỗi kỷ lục mới đều bắt đầu từ con số không, và bạn sẽ theo dõi xem ai chạy xa nhất trong tuần đầu tiên."
  },
  "help.an.s2": {
    "t": "Khoảng cách đến Top 100",
    "what": "Với tối đa 5 bài hát của bạn, công cụ này cho biết khoảng cách của chúng đến bảng xếp hạng Top 100 aimusiclist.",
    "when": "Hãy sử dụng nó để đặt mục tiêu, ví dụ như \"có thêm khoảng 20 người nghe nữa trong tuần này\".",
    "click": "Không có gì để nhấn. Mỗi dòng cho biết bài hát đã nằm trong Top 100 chưa, cần thêm bao nhiêu lượt nghe nữa, hoặc có thể sắp đạt được vị trí đó.",
    "care": "Đây chỉ là **phỏng đoán**, không phải lời hứa. Bảng xếp hạng thực tế cũng kiểm tra nhiều yếu tố khác, vì vậy một bài hát có thể gần đạt tiêu chuẩn mà vẫn không được vào. Nếu Top 100 chưa đầy, những bài hát đáp ứng tiêu chí sẽ được vào.",
    "like": "Nó giống như một tấm biển chỉ dẫn trên đường lên núi: \"Còn khoảng 200 bậc thang nữa là lên đến đỉnh\"."
  },
  "help.an.s2.note": {
    "t": "Vì sao nó là một ước tính",
    "what": "aimusiclist does not tell your site the exact number of listeners. So this box guesses from aimusiclist **valid plays** in the last 7 days.",
    "when": "Hãy đọc phần này nếu bạn thấy các con số trong ô này lạ.",
    "care": "aimusiclist chỉ tính **một lượt phát mỗi người mỗi ngày**. Vì vậy, số lượng người nghe thực tế khác nhau có thể ít hơn số lượt phát. Hãy xem kết quả này chỉ mang tính chất ước lượng.",
    "like": "Nó giống như việc đoán xem có bao nhiêu người đã đến thăm dựa trên số lượng dấu chân. Có những người đã đi qua hai lần."
  },
  "help.an.s3": {
    "t": "Lượt thích và lượt thêm vào danh sách phát",
    "what": "Số lượt thích và lượt thêm vào danh sách phát các bài hát của bạn trên aimusiclist mỗi ngày là bao nhiêu, và bài hát nào nhận được nhiều lượt thích và lượt thêm nhất?",
    "when": "Hãy sử dụng nó để xem những bài hát nào mọi người thực sự yêu thích, chứ không chỉ nghe một lần.",
    "click": "Di chuột vào thanh (hoặc chạm vào thanh) để xem ngày và số.",
    "care": "Số liệu càng lớn càng tốt. Nó chỉ hiển thị tối đa **90 ngày** gần nhất, ngay cả khi bạn chọn **Tất cả**. Số liệu được lấy một lần mỗi ngày từ aimusiclist.",
    "like": "Nó giống như việc đếm số lượng trái tim và những miếng dán \"mang về nhà\" trên gian hàng của bạn ở chợ lớn vậy."
  },
  "help.an.s3.likes": {
    "t": "Lượt thích trên aimusiclist",
    "what": "Mỗi thanh biểu thị một ngày. Nó cho biết tổng số lượt thích mà tất cả các bài hát của bạn nhận được trên aimusiclist trong ngày hôm đó.",
    "when": "Hãy sử dụng công cụ này để xem số lượt thích có tăng lên sau khi bạn phát hành hoặc chia sẻ bài hát hay không.",
    "care": "Càng nhiều càng tốt. Đây chỉ là lượt thích từ aimusiclist. Lượt thích trên trang web của bạn được hiển thị trong tab **Thống kê**.",
    "like": "Nó giống như việc đếm số lượng \"trái tim\" trên bảng hiệu gian hàng của bạn mỗi ngày."
  },
  "help.an.s3.adds": {
    "t": "Đã được thêm vào danh sách phát",
    "what": "Mỗi vạch biểu thị một ngày. Nó cho biết số lần mọi người thêm bài hát của bạn vào danh sách phát của họ trên aimusiclist trong ngày hôm đó.",
    "when": "Hãy dùng nó để xem mọi người có muốn giữ lại các bài hát của bạn và nghe lại chúng hay không.",
    "care": "Càng nhiều càng tốt. Việc thêm vào danh sách phát là một trong những dấu hiệu mạnh mẽ nhất cho thấy ai đó thích một bài hát.",
    "like": "Nó giống như việc đếm số khách mua đĩa nhạc của bạn mang về nhà mỗi ngày."
  },
  "help.an.s3.top": {
    "t": "Được yêu thích và thêm nhiều nhất",
    "what": "Tối đa 5 bài hát của bạn nhận được nhiều lượt thích (♥) và lượt thêm vào danh sách phát (+) nhất trên aimusiclist trong 7 ngày qua.",
    "when": "Hãy sử dụng nó để chọn một bài hát cho bài đăng tiếp theo của bạn hoặc để đặt bài hát đầu tiên trong một album.",
    "care": "Luôn luôn là **7 ngày gần nhất**. Các bài hát được sắp xếp theo lượt thích và số lượt thêm vào cộng lại.",
    "like": "Đó chính là kệ \"sản phẩm được yêu thích nhất\" trong cửa hàng của bạn."
  },
  "help.an.s4": {
    "t": "Vị trí của tôi trong thể loại của tôi",
    "what": "Đối với tối đa 6 bài hát của bạn, chức năng này hiển thị thứ hạng trên bảng xếp hạng aimusiclist của thể loại bài hát đó, và tỷ lệ phần trăm bài hát đứng đầu.",
    "when": "Hãy sử dụng công cụ này để xem bài hát của bạn mạnh đến mức nào so với các bài hát cùng thể loại.",
    "click": "Không có gì để nhấn. **Trong Top 20** được thêm vào khi bài hát nằm trong top 20 của thể loại nhạc đó.",
    "care": "Thứ hạng càng thấp và tỷ lệ phần trăm càng thấp thì càng tốt (top 1% là tuyệt vời). Nếu kích thước thể loại chưa được biết, tỷ lệ phần trăm sẽ được tính trên tất cả các bài hát trên aimusiclist. Bài hát chưa có thứ hạng thể loại sẽ ghi rõ điều đó.",
    "like": "Nó giống như việc bạn biết vị trí của mình trên kệ đĩa R&B của thị trường lớn, chứ không phải toàn bộ thị trường."
  },
  "help.site.seo": {
    "t": "Hiển thị trong kết quả tìm kiếm (Google)",
    "what": "Các cài đặt dành cho công cụ tìm kiếm như Google. Mỗi bài hát và album trên trang web của bạn đều có trang riêng để người khác tìm thấy qua tìm kiếm.",
    "when": "Vào đây khi muốn ẩn trang web khỏi kết quả tìm kiếm hoặc đăng ký trang web với Google Search Console.",
    "click": "Tiêu đề này chỉ giải thích mục cài đặt. Công tắc và các bước bên dưới mới thực hiện thay đổi.",
    "care": "Có thể mất vài ngày đến vài tuần để trang web xuất hiện trên Google. Việc này không thay đổi gì trên aimusiclist.com.",
    "like": "Giống như đưa tên cửa hàng và từng đĩa nhạc của bạn lên bản đồ thị trấn."
  },
  "help.site.seo_switch": {
    "t": "Hiển thị bài hát và album của tôi trong kết quả tìm kiếm",
    "what": "Cho phép công cụ tìm kiếm hiển thị trang chủ, trang bài hát và trang album của bạn. Mặc định công tắc được bật.",
    "when": "Hãy để bật nếu bạn muốn người nghe mới tìm thấy mình khi tìm kiếm. Chỉ tắt khi bạn muốn giữ trang web riêng tư.",
    "click": "Thay đổi được lưu ngay khi bạn nhấn. Khi tắt, các trang sẽ yêu cầu công cụ tìm kiếm không hiển thị chúng và sơ đồ trang web dành cho tìm kiếm sẽ bị gỡ.",
    "care": "Những trang đã xuất hiện trong kết quả tìm kiếm có thể mất một thời gian mới biến mất. Người biết địa chỉ vẫn có thể truy cập.",
    "like": "Giống như tấm biển \"mở cửa đón khách\" trên cửa hàng của bạn."
  },
  "help.site.gsc": {
    "t": "Đăng ký trang web của tôi với Google Search Console",
    "what": "Hướng dẫn từng bước để thông báo cho Google về trang web bằng tài khoản Google của chính bạn.",
    "when": "Làm một lần nếu muốn Google tìm thấy bài hát mới sớm hơn và xem mọi người tìm kiếm bạn bằng từ gì.",
    "click": "Mở phần hướng dẫn và làm lần lượt từ trên xuống. Bạn chỉ cần làm một lần.",
    "care": "Bạn cần có tài khoản Google. Nếu xảy ra lỗi, bạn có thể làm lại các bước mà không làm hỏng trang web.",
    "like": "Giống như ký tên vào sổ khách ở văn phòng bản đồ thị trấn để họ kiểm tra cửa hàng của bạn thường xuyên hơn."
  },
  "help.site.gsc_open": {
    "t": "Mở Google Search Console",
    "what": "Mở trang web của Google trong một thẻ mới.",
    "when": "Nhấn nút này ở bước đầu tiên.",
    "click": "Đăng nhập tại đó bằng tài khoản Google rồi quay lại thẻ này để làm bước tiếp theo.",
    "care": "Đây là trang của Google, không phải một phần trong trang web của bạn."
  },
  "help.site.gsc_copy": {
    "t": "Sao chép",
    "what": "Sao chép địa chỉ nằm ngay bên cạnh.",
    "when": "Nhấn khi bước hướng dẫn yêu cầu dán địa chỉ trang web hoặc địa chỉ sơ đồ trang web.",
    "click": "Sau đó dán vào ô trên trang Search Console.",
    "care": "Nếu thiết bị không sao chép được, một cửa sổ nhỏ sẽ hiện địa chỉ để bạn tự sao chép."
  },
  "help.site.gsc_input": {
    "t": "Thẻ xác minh của Google",
    "what": "Ô để dán nội dung Google cung cấp nhằm xác nhận trang web là của bạn.",
    "when": "Dán vào đây nội dung bạn đã sao chép từ [[HTML tag]] trong Search Console.",
    "click": "Bạn có thể dán toàn bộ nội dung nguyên như vậy. Trang web chỉ giữ lại phần cần thiết.",
    "care": "Để xóa, hãy xóa hết nội dung trong ô rồi nhấn Lưu.",
    "like": "Giống như một tấm thẻ tên cho Google biết cửa hàng này thuộc về bạn."
  },
  "help.site.gsc_save": {
    "t": "Lưu",
    "what": "Lưu nội dung xác minh và đặt nó trên trang chủ của bạn.",
    "when": "Nhấn sau khi dán nội dung, trước khi nhấn [[Verify]] trong Search Console.",
    "click": "Một lát sau sẽ hiện dấu tích. Sau đó quay lại Search Console và nhấn [[Verify]].",
    "care": "Nếu thấy thông báo màu đỏ, hãy sao chép lại toàn bộ nội dung [[HTML tag]] rồi dán đầy đủ."
  }
});
