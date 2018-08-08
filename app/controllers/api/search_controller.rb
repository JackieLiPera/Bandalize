class Api::SearchController < ApplicationController
  def index
    @results = []
    @artists = []
    @venues = []

    if params[:query].present?
      @results = PgSearch.multisearch(params[:query]).includes(:searchable)
      @artists = @results.where(searchable_type: "Artist").map(&:searchable)
      @venues = @results.where(searchable_type: "Venue").map(&:searchable)
    end
  end
end
