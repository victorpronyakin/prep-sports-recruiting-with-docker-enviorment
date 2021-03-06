<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Admin - Dashboard</title>

    <!-- Custom fonts for this template-->
    <link href="{{asset('admin-panel-css/vendor/fontawesome-free/css/all.min.css')}}" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="{{asset('admin-panel-css/sb-admin-2.min.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('css/admin/admin-blog.css')}}" rel="stylesheet" type="text/css">

</head>

<body id="page-top">

<!-- Page Wrapper -->
<div id="wrapper">
    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">Admin</div>
        </a>
        <!-- Divider -->
        <hr class="sidebar-divider my-0">
        <!-- Nav Item - Dashboard -->
        <li class="nav-item active">
            <a class="nav-link" href="#">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
            </a>
        </li>
        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                <i class="fas fa-fw fa-folder"></i>
                <span>Pages</span>
            </a>
            <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Pages Screens:</h6>
                    <a class="collapse-item" href="{{url('/admin/blog')}}">Blog</a>
                    <a class="collapse-item" href="{{url('/admin/user-account-management')}}">Account management</a>
                    <div class="collapse-divider"></div>
                </div>
            </div>
        </li>
        <hr class="sidebar-divider d-none d-md-block">
        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

    </ul>
    <!-- End of Sidebar -->
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
            <!-- Topbar -->
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <!-- Sidebar Toggle (Topbar) -->
                <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                    <i class="fa fa-bars"></i>
                </button>
                <!-- Topbar Search -->
                @if (!empty($users))
{{--                <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">--}}
                    <div class="input-group">
                        <input type="text" id="search_input" name="search" value="" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="button">
                                <i class="fas fa-search fa-sm"></i>
                            </button>
                        </div>
                    </div>
{{--                </form>--}}
                    <script>
                        var searchInput = document.getElementById('search_input');
                        var token = '{!! csrf_token() !!}';
                        var url = '/admin/user-account-management';
                        var request = new XMLHttpRequest();
                        request.responseType = "json";
                        searchInput.addEventListener('input', function (event) {
                            var input_val = event.target.value;
                            request.open("GET", url, true);
                            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                            request.setRequestHeader('X-CSRF-Token' , token);
                            request.setRequestHeader('param' , input_val);
                            var obj_res = '';
                            var count = '';
                            request.onload = function () {
                                obj_res = request.response.data;
                                count = request.response.count;
                                result(obj_res, input_val, url, count);
                            }
                            request.send();
                        });
                        function result(obj_res, input_val, url, count) {
                            var userContainer = document.getElementById('table-body-container');
                            var paginate = document.querySelector('.pagination-container');
                            userContainer.innerHTML = '';
                            paginate.innerHTML = '';
                            var lastId = obj_res.slice(obj_res.length-1)[0].id;
                            var firstId = obj_res.slice(0)[0].id;
                            for(field in obj_res) {
                                var link = '<a href="/admin/user-account-management/show-plans/' + obj_res[field].id + '">Show plans</a>'
                                var linkShowUser = '<a href="/admin/user-account-management/show/' + obj_res[field].id + '">' + obj_res[field].name + '</a>'
                                var resurs = `<tr class="col-12 row user-container">`+
                                    `<td class="col-2">${obj_res[field].name ? linkShowUser : ''}</td>` +
                                    `<td class="col-2">${obj_res[field].email ? obj_res[field].email : ''}</td>` +
                                    `<td class="col-2">${obj_res[field].birthday ? obj_res[field].birthday : ''}</td>` +
                                    `<td class="col-2">${obj_res[field].country ? obj_res[field].country : ''}</td>` +
                                    `<td class="col-2">${obj_res[field].paid_plans.length > 0 ? link : 'No plans'}</td>` +
                                    `<td class="col-2">${obj_res[field].is_admin ? 'Admin' : 'User'}</td></tr>`;

                                userContainer.innerHTML += resurs
                            }
                            var pageCount = count / 5;
                            var pageNumber = '';

                            for(i = 1; i <= pageCount; i++){
                                console.log(i, Math.ceil(pageCount), Math.floor(pageCount), Math.round(pageCount), 'Math.ceil(pageCount)');
                                if(i == Math.floor(pageCount)) {
                                    pageNumber += `<li class="page-item active"><a class="page-link" href="#">${i}</a></li>`;
                                } else {
                                    pageNumber += `<li class="page-item"><a class="page-link" href="#">${i}</a></li>`;
                                }
                            }
                            // class active and disablet
                            paginate.innerHTML = `<ul class="pagination">` +
                                    `<li class="page-item"><a class="page-link" aria-label="0" href="#">‹</a></li>` +
                                    pageNumber +
                                    `<li class="page-item"><a class="page-link" aria-label="1" href="#">›</a></li>` +
                                `</ul>`
                            var puginate_button = document.querySelectorAll('.page-item .page-link');
                            puginate_button.forEach(function (item) {
                                item.addEventListener('click', function (e){
                                    e.preventDefault();
                                    var page = '';
                                    var currentPage = '';
                                    var prevNext = this.getAttribute('aria-label');

                                    this.parentElement.classList.add('active');
                                    if(this.innerHTML.match(/[0-9]/) ) {
                                        page = this.innerHTML;
                                        currentPage = count / pageCount * page;
                                    }
                                        request.open("GET", url, true);
                                        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                                        request.setRequestHeader('X-CSRF-Token', token);
                                        request.setRequestHeader('param', input_val);
                                        request.setRequestHeader('page', page);
                                        request.setRequestHeader('current-page', currentPage);
                                        request.setRequestHeader('lastId', lastId);
                                        if(prevNext !== null) {request.setRequestHeader('prev-next', prevNext)}
                                        request.onload = function () {
                                            obj_res = request.response.data;
                                            if(obj_res.length > 4) {
                                                result(obj_res, input_val, url, count);
                                            }
                                        }
                                        request.send();
                                })
                            })
                        }
                    </script>
                @endif
                <!-- Topbar Navbar -->
                <ul class="navbar-nav ml-auto">
                    <!-- Nav Item - Search Dropdown (Visible Only XS) -->
{{--                    <li class="nav-item dropdown no-arrow d-sm-none">--}}
{{--                        <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">--}}
{{--                            <i class="fas fa-search fa-fw"></i>--}}
{{--                        </a>--}}
{{--                        <!-- Dropdown - Messages -->--}}
{{--                        <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">--}}
{{--                            <form class="form-inline mr-auto w-100 navbar-search">--}}
{{--                                <div class="input-group">--}}
{{--                                    <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">--}}
{{--                                    <div class="input-group-append">--}}
{{--                                        <button class="btn btn-primary" type="button">--}}
{{--                                            <i class="fas fa-search fa-sm"></i>--}}
{{--                                        </button>--}}
{{--                                    </div>--}}
{{--                                </div>--}}
{{--                            </form>--}}
{{--                        </div>--}}
{{--                    </li>--}}
                    <!-- Nav Item - User Information -->
                    <li class="nav-item dropdown no-arrow">
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown" style="display: block;position: initial;">
                        <a class="dropdown-item" href="{{ route('logout') }}"
                           onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                          Logout
                        </a>

                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                          @csrf
{{--                          <input type="submit" value="logout">--}}
                        </form>
                      </div>
                    </li>
                </ul>
            </nav>
            <!-- End of Topbar -->
            <!-- Begin Page Content -->
            <div class="container-fluid">
                <!-- Page Heading -->
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                </div>
                <div class="admin-content">
                    @yield('content')
                </div>
                <!-- Content Row -->
                <div class="row">
                <!-- This link for testing send mail
                    <a href="{{ route('send-mail') }}" class="btn-danger" style="width: 100px; height: 50px; text-align: center; padding-top: 20px; font-size: 10px">Send mail</a> -->
                <!-- end -->
                </div>
                <!-- Content Row -->
                <div class="row">
                </div>
                <!-- Content Row -->
                <div class="row">
                </div>
            </div>
        </div>
        <!-- End of Main Content -->
        <!-- Footer -->
        <footer class="sticky-footer bg-white">
            <div class="container my-auto">
                <div class="copyright text-center my-auto">
                    <span>Copyright &copy; Your Website 2020</span>
                </div>
            </div>
        </footer>
        <!-- End of Footer -->
    </div>
    <!-- End of Content Wrapper -->
</div>
<!-- End of Page Wrapper -->
<!-- Scroll to Top Button-->
<a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
</a>
<!-- Logout Modal-->
<div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div class="modal-footer">
                <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <a class="btn btn-primary" href="login.html">Logout</a>
            </div>
        </div>
    </div>
</div>

<!-- Bootstrap core JavaScript-->
<script src="{{asset('admin-panel-css/vendor/jquery/jquery.min.js')}}"></script>
<script src="{{asset('admin-panel-css/vendor/bootstrap/js/bootstrap.bundle.min.js')}}"></script>

<!-- Core plugin JavaScript-->
<script src="{{asset('admin-panel-css/vendor/jquery-easing/jquery.easing.min.js')}}"></script>

<!-- Custom scripts for all pages-->
<script src="{{asset('admin-panel-css/js/sb-admin-2.min.js')}}"></script>

</body>

</html>

