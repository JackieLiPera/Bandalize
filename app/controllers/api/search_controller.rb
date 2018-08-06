class Api::SearchController < ApplicationController

  def index
    if params[:query].present?
      @results = PgSearch.multisearch(params[:query]).includes(:searchable)

      @artists = @results.where(searchable_type: "Artist")
      @venues = @results.where(searchable_type: "Venue")

      render :index
    end
  end
end
