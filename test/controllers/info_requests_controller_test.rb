require 'test_helper'

class InfoRequestsControllerTest < ActionController::TestCase
  setup do
    @info_request = info_requests(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:info_requests)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create info_request" do
    assert_difference('InfoRequest.count') do
      post :create, info_request: { analytic_dashboards: @info_request.analytic_dashboards, comments: @info_request.comments, custom_dashboards: @info_request.custom_dashboards, datamart: @info_request.datamart, degree_mapping: @info_request.degree_mapping, email: @info_request.email, institution: @info_request.institution, name: @info_request.name, phone: @info_request.phone, sankey: @info_request.sankey, title: @info_request.title }
    end

    assert_redirected_to info_request_path(assigns(:info_request))
  end

  test "should show info_request" do
    get :show, id: @info_request
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @info_request
    assert_response :success
  end

  test "should update info_request" do
    patch :update, id: @info_request, info_request: { analytic_dashboards: @info_request.analytic_dashboards, comments: @info_request.comments, custom_dashboards: @info_request.custom_dashboards, datamart: @info_request.datamart, degree_mapping: @info_request.degree_mapping, email: @info_request.email, institution: @info_request.institution, name: @info_request.name, phone: @info_request.phone, sankey: @info_request.sankey, title: @info_request.title }
    assert_redirected_to info_request_path(assigns(:info_request))
  end

  test "should destroy info_request" do
    assert_difference('InfoRequest.count', -1) do
      delete :destroy, id: @info_request
    end

    assert_redirected_to info_requests_path
  end
end
